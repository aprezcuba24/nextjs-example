import { PaginateData, PaginationResult } from "@/types/pagination"
import { revalidatePath } from "next/cache"
import { redirect } from 'next/navigation';
import { DeleteResult } from "typeorm"

type TKeys = 'create' | 'update' | 'list' | 'remove'

type TMethods = {
  create: (props: any) => Promise<Record<string, any>>,
  update: (props: any) => Promise<Record<string, any>>,
  list: (props: any) => Promise<PaginationResult<any>>,
  remove: (id: any) => Promise<DeleteResult>,
}

export const crud = (path: string, methods: TMethods) => {
  const buildMethod = (key: TKeys) => async (props: any) => {
    'use server'
    await methods[key](props)
    revalidatePath(path)
  }
  const paginate = async ({ pageIndex, pageSize }: PaginateData) => {
    'use server'
    redirect(`${path}?pageIndex=${pageIndex}&pageSize=${pageSize}`)
  }
  const list = async (query: any) => {
    'use server'
    const pageIndex = parseInt(query.pageIndex || '0');
    const pageSize = parseInt(query.pageSize || '10');
    return methods.list({ pageIndex, pageSize })
  }
  return {
    paginate,
    list,
    create: buildMethod('create'),
    remove: buildMethod('remove'),
    update: buildMethod('update'),
  }
}
