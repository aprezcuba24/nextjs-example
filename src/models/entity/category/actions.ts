'use server'

import { instanceToPlain, plainToClass } from "class-transformer";
import { Category } from "./category.entity";
import { PaginateData } from "@/types/pagination";

export async function create(props: any) {
  const entity = plainToClass(Category, props)
  return instanceToPlain(await entity.save())
}

export async function list(props: PaginateData) {
  return Category.paginate(props)
}

export async function remove(id: number) {
  return Category.delete(id)
}

export async function update(props: any) {
  const entity = plainToClass(Category, props)
  return instanceToPlain(await entity.save())
}
