'use client'

import { TableData } from "@/components/Table"
import { Category } from "@/models/entity/category/category.entity"
import { ColumnDef } from "@tanstack/react-table"
import { TrashIcon, Pencil1Icon } from '@radix-ui/react-icons'
import { Button } from "@/components/ui/button"
import { MouseEventHandler } from "react"
import { DialogForm } from "./DialogForm"

type TRemoveAction = (id: number) => Promise<void>
type TUpdateAction = (props: Category) => Promise<void>

type CategoryTableProps = {
  data: Category[],
  remove: TRemoveAction,
  update: TUpdateAction,
}

type ActionProps = {
  row: Category,
  remove: TRemoveAction,
  update: TUpdateAction,
}

function RowActions({ row, remove, update }: ActionProps) {
  console.log(row);
  return (
    <div>
      <DialogForm title="Edit" action={update} defaultValues={row} btnIcon={<Pencil1Icon />} />
      <Button onClick={() => remove(row.id as number) as unknown as MouseEventHandler<HTMLButtonElement>} variant="outline" size="icon">
        <TrashIcon />
      </Button>
    </div>
  )
}

export function CategoryTable({ data, remove, update }: CategoryTableProps) {
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
      cell: ({ row }) => <RowActions row={row.original} remove={remove} update={update} />,
      enableSorting: false,
      enableHiding: false,
    },
  ]
  return <TableData data={data} columns={columns} />
}
