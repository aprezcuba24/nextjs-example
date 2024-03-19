import { createCategory, getCategories } from "@/models/entity/category/actions"
import ButtonDialog from "@/components/ButtonDialog"
import Form from "./form"
import { CategoryTable } from "./list"

export default async function Page() {
  const categories = await getCategories()
  return (
    <>
      <ButtonDialog title="New" btnText="New">
        <Form action={createCategory} defaultValues={{ name: '', description: '' }} />
      </ButtonDialog>
      <CategoryTable data={categories} />
    </>
  )
}

