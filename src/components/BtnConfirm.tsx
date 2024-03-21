import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";

export type BtnConfirmProps = {
  btnIcon?: React.ReactNode,
  btnText?: string,
  title: string,
  description: string,
  btnCancelText?: string,
  btnContinueText?: string,
  action: () => any
}

export function BtnConfirm({ btnIcon, btnText, title, description, action, btnCancelText = 'Cancel', btnContinueText = 'Continue' }: BtnConfirmProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline" size={btnIcon ? "icon" : "default"}>{btnIcon || btnText}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{btnCancelText}</AlertDialogCancel>
          <AlertDialogAction onClick={action}>{btnContinueText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
