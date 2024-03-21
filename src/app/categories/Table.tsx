'use client'

import { TableData, TableDataProps } from "@/components/Table"
import { Category } from "@/models/entity/category/category.entity"
import { ColumnDef } from "@tanstack/react-table"
import { Pencil1Icon } from '@radix-ui/react-icons'
import { DialogForm } from "./DialogForm"
import { useTableContext } from "@/context/table"
import { BtnRemove } from "@/components/BtnRemove"
import { BtnList } from "@/components/BtnList"

type ActionProps = {
  row: Category,
}

function RowActions({ row }: ActionProps) {
  const { remove, update } = useTableContext()
  return (
    <BtnList>
      <DialogForm title="Edit" action={update} defaultValues={row} btnIcon={<Pencil1Icon />} />
      <BtnRemove action={remove} entityId={row.id} />
    </BtnList>
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

export function CategoryTable(props: Omit<TableDataProps, 'columns'>) {
  return <TableData {...props} columns={columns} />
}
