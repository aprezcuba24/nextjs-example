import * as categories from "@/models/entity/category/actions"
import { CategoryTable } from "./Table"
import { DialogForm } from "./DialogForm"
import { crud } from "@/lib/crud"
import { TableContextProvider } from "@/context/table"

type PageProps = {
  searchParams: any
}

export default async function Page({ searchParams }: PageProps) {
  const { list, create, remove, update, paginate } = crud('/categories', categories)
  return (
    <TableContextProvider update={update} remove={remove}>
      <DialogForm title="New" action={create} defaultValues={{ name: '', description: '' }} />
      <CategoryTable pagination={await list(searchParams)} paginate={paginate} />
    </TableContextProvider>
  )
}

