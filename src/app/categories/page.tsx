import { createCategory, getCategories } from "@/models/entity/category/actions"
import { CategoryTable } from "./Table"
import { Category } from "@/models/entity/category/category.entity"
import { revalidatePath } from "next/cache"
import { DialogForm } from "./DialogForm"

export default async function Page() {
  const categories = await getCategories()
  async function create(props: Category) {
    'use server'
    await createCategory(props)
    revalidatePath('categories')
  }
  return (
    <>
      <DialogForm action={create} defaultValues={{ name: '', description: '' }} />
      <CategoryTable data={categories as Category[]} />
    </>
  )
}

