import { PropsWithChildren } from "react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

type ButtonDialogProps = {
  btnText: string;
  title: string;
} & PropsWithChildren

export default function ButtonDialog({ btnText, title, children }: ButtonDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{btnText}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  )
}