'use server'

import { Category } from "./category.entity";

export async function createCategory(category: Category) {
  console.log(category);
}
