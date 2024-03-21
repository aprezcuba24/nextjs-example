'use client'

import { TableData } from "@/components/Table"
import { Category } from "@/models/entity/category/category.entity"
import { ColumnDef } from "@tanstack/react-table"
import { Pencil1Icon } from '@radix-ui/react-icons'
import { DialogForm } from "./DialogForm"
import { useTableContext } from "@/context/table"
import { BtnRemove } from "@/components/BtnRemove"

type CategoryTableProps = {
  data: Category[],
}

type ActionProps = {
  row: Category,
}

function RowActions({ row }: ActionProps) {
  const { remove, update } = useTableContext()
  return (
    <div>
      <DialogForm title="Edit" action={update} defaultValues={row} btnIcon={<Pencil1Icon />} />
      <BtnRemove action={remove} entityId={row.id} />
    </div>
  )
}

const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: 'Description',
  },
  {
    accessorKey: "id",
    header: 'Actions',
    cell: ({ row }) => <RowActions row={row.original} />,
    enableSorting: false,
    enableHiding: false,
  },
]

export function CategoryTable({ data }: CategoryTableProps) {
  return <TableData data={data} columns={columns} />
}
