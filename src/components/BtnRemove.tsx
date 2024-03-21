import { TrashIcon } from "@radix-ui/react-icons";
import { BtnConfirm, BtnConfirmProps } from "./BtnConfirm";

type TKey = 'title' | 'description' | 'btnIcon'

type BtnRemoveProps = {
  action: (id: any) => any,
  entityId: any,
} & Omit<BtnConfirmProps, TKey> & Partial<Pick<BtnConfirmProps, TKey>>

export function BtnRemove({ action, entityId, ...props }: BtnRemoveProps) {
  const newProps: BtnConfirmProps = {
    ...{
      title: "Are you absolutely sure?",
      description: "The record will be removed.",
      btnIcon: <TrashIcon />,
      action: () => action(entityId),
    }, ...props
  }

  return <BtnConfirm {...newProps} />
}