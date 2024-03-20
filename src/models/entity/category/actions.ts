'use server'

import { instanceToPlain, plainToClass } from "class-transformer";
import { Category } from "./category.entity";

export async function create(props: any) {
  const entity = plainToClass(Category, props)
  return instanceToPlain(await entity.save())
}

export async function list() {
  return (await Category.find()).map((item) => instanceToPlain(item))
}

export async function remove(id: number) {
  return Category.delete(id)
}

export async function update(props: any) {
  const entity = plainToClass(Category, props)
  return instanceToPlain(await entity.save())
}
