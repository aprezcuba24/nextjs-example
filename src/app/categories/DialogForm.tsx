'use client'

import Dialog from "@/components/Dialog";
import FormCategory from "./form";
import React, { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";

type DialogFormProps = {
  action: (object: any) => Promise<any>,
  defaultValues: any,
  title: string,
  btnIcon?: React.ReactNode,
  btnText?: string,
}

export function DialogForm({ action, title, btnIcon, btnText, defaultValues }: DialogFormProps) {
  btnText = btnText || title
  const [open, setOpen] = useState(false)
  const handleAction = useCallback(async (props: any) => {
    await action(props);
    setOpen(false)
  }, [action]);
  const handleOpen = useCallback(() => {
    setOpen(prev => !prev)
  }, []);

  return (
    <>
      <Button variant="outline" onClick={handleOpen} size={btnIcon ? "icon" : "default"}>{btnIcon || btnText}</Button>
      <Dialog title={title} open={open} onOpenChange={handleOpen}>
        <FormCategory action={handleAction} defaultValues={defaultValues} />
      </Dialog>
    </>
  )
}