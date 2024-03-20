import FormCategory from "./form";
import { BtnDialogForm, BtnDialogFormProps } from "@/components/BtnDialogForm";

export function DialogForm({ ...props }: Omit<BtnDialogFormProps, 'Component'>) {
  return <BtnDialogForm Component={FormCategory} {...props} />
}