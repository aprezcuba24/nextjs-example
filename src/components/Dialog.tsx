import { PropsWithChildren } from "react";
import { Dialog as BaseDialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { DialogProps } from "@radix-ui/react-dialog";

type ButtonDialogProps = {
  title: string;
} & PropsWithChildren & DialogProps

export default function Dialog({ title, children, ...props }: ButtonDialogProps) {
  return (
    <BaseDialog {...props}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {children}
        </div>
      </DialogContent>
    </BaseDialog>
  )
}