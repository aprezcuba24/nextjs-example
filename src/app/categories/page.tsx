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
    <div className="p-5">
      <TableContextProvider update={update} remove={remove}>
        <div className="mb-2 flex justify-end">
          <DialogForm title="New" action={create} defaultValues={{ name: '', description: '' }} />
        </div>
        <CategoryTable pagination={await list(searchParams)} paginate={paginate} />
      </TableContextProvider>
    </div>
  )
}

