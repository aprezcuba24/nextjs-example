'use server'

import { instanceToPlain, plainToClass } from "class-transformer";
import { Category } from "./category.entity";

export async function createCategory(props: any) {
  const entity = plainToClass(Category, props)
  return instanceToPlain(await entity.save())
}
