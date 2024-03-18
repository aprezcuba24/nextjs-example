import { createCategory } from "@/models/entity/category/actions"
import Form from "./form"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Page() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">New</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form action={createCategory} defaultValues={{ name: '', description: '' }} />
        </div>
      </DialogContent>
    </Dialog>
  )
}

