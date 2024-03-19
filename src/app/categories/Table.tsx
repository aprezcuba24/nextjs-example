'use client'

import { TableData } from "@/components/Table"
import { Category } from "@/models/entity/category/category.entity"
import { ColumnDef } from "@tanstack/react-table"
import { TrashIcon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button"
import { MouseEventHandler } from "react"

type TRemoveAction = (id: number) => Promise<void>

type CategoryTableProps = {
  data: Category[],
  remove: TRemoveAction,
}

type ActionProps = {
  row: Category,
  remove: TRemoveAction
}

function RowActions({ row, remove }: ActionProps) {
  return (
    <Button onClick={() => remove(row.id as number) as unknown as MouseEventHandler<HTMLButtonElement>} variant="outline" size="icon">
      <TrashIcon />
    </Button>
  )
}

export function CategoryTable({ data, remove }: CategoryTableProps) {
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
      cell: ({ row }) => <RowActions row={row.original} remove={remove} />,
      enableSorting: false,
      enableHiding: false,
    },
  ]
  return <TableData data={data} columns={columns} />
}
