'use client'

import Dialog from "@/components/Dialog";
import React, { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";

type Form = React.ComponentType<{
  action: any,
  defaultValues: any,
}>

export type BtnDialogFormProps = {
  action: (object: any) => Promise<any>,
  defaultValues: any,
  title: string,
  btnIcon?: React.ReactNode,
  btnText?: string,
  Component: Form,
}

export function BtnDialogForm({ action, title, btnIcon, btnText, Component, defaultValues }: BtnDialogFormProps) {
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
        <Component action={handleAction} defaultValues={defaultValues} />
      </Dialog>
    </>
  )
}