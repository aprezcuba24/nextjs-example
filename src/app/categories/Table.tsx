import { TableData } from "@/components/Table"
import { Category } from "@/models/entity/category/category.entity"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: 'Description',
  },
]

type CategoryTableProps = {
  data: Category[],
}

export function CategoryTable({ data }: CategoryTableProps) {
  return <TableData data={data} columns={columns} />
}
