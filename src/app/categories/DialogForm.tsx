'use client'

import Dialog from "@/components/Dialog";
import FormCategory from "./form";
import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";

type DialogFormProps = {
  action: (object: any) => Promise<any>,
  defaultValues: any,
}

export function DialogForm({ action }: DialogFormProps) {
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
      <Button variant="outline" onClick={handleOpen}>New</Button>
      <Dialog title="New" open={open} onOpenChange={handleOpen}>
        <FormCategory action={handleAction} defaultValues={{ name: '', description: '' }} />
      </Dialog>
    </>
  )
}