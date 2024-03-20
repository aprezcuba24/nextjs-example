import { revalidatePath } from "next/cache"
import { DeleteResult } from "typeorm"

type TKeys = 'create' | 'update' | 'list' | 'remove'

type TMethods = {
  create: (props: any) => Promise<Record<string, any>>,
  update: (props: any) => Promise<Record<string, any>>,
  list: () => Promise<any[]>,
  remove: (id: any) => Promise<DeleteResult>,
}

export const crud = (path: string, methods: TMethods) => {
  const buildMethod = (key: TKeys) => async (props: any) => {
    'use server'
    await methods[key](props)
    revalidatePath(path)
  }
  return {
    list: methods.list,
    create: buildMethod('create'),
    remove: buildMethod('remove'),
    update: buildMethod('update'),
  }
}
