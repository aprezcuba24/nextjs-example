import { createCategory } from "@/models/entity/category/category"
import Form from "./form"

export default function Page() {
  return (
    <Form action={createCategory} defaultValues={{ name: '', description: '' }} />
  )
}

