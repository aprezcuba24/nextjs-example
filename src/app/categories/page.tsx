import * as categories from "@/models/entity/category/actions"
import { CategoryTable } from "./Table"
import { Category } from "@/models/entity/category/category.entity"
import { DialogForm } from "./DialogForm"
import { crud } from "@/lib/crud"
import { TableContextProvider } from "@/context/table"

export default async function Page() {
  const { list, create, remove, update } = crud('categories', categories)
  return (
    <TableContextProvider update={update} remove={remove}>
      <DialogForm title="New" action={create} defaultValues={{ name: '', description: '' }} />
      <CategoryTable data={await list() as Category[]} />
    </TableContextProvider>
  )
}

