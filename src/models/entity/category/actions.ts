'use server'

import { instanceToPlain, plainToClass } from "class-transformer";
import { Category } from "./category.entity";

export async function create(props: any) {
  const entity = plainToClass(Category, props)
  return instanceToPlain(await entity.save())
}

export async function list({ pageIndex = 0, pageSize = 1 }) {
  const skip = pageIndex * pageSize
  const [entities, total] = await Category.findAndCount({ take: pageSize, skip })
  return {
    total,
    pageSize,
    pageIndex,
    firstRecordNumber: skip + 1,
    totalPage: Math.floor(total / pageSize) + 1,
    lastRecordNumber: skip + entities.length,
    data: entities.map((item) => instanceToPlain(item)),
  }
}

export async function remove(id: number) {
  return Category.delete(id)
}

export async function update(props: any) {
  const entity = plainToClass(Category, props)
  return instanceToPlain(await entity.save())
}
