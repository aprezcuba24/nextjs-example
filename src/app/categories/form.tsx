'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useFormStatus } from 'react-dom'
import { useForm } from "react-hook-form"
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { useCallback } from "react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Category } from "@/models/entity/category/category.entity"
import { instanceToPlain } from 'class-transformer';

type FormAction = {
  action: (object: any) => Promise<void>,
  defaultValues: any,
}
const resolver = classValidatorResolver(Category);

export default function FormCategory({ action, defaultValues }: FormAction) {
  const { pending } = useFormStatus()
  const form = useForm<Category>({
    resolver,
    defaultValues,
  })

  const onSubmit = useCallback(async (e: Category) => {
    const a = await action(instanceToPlain(e))
    console.log(a);
  }, [action])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }: { field: any }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Name" {...field} required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="pt-4 text-right">
          <Button type="submit" aria-disabled={pending}>Save</Button>
        </div>
      </form>
    </Form>
  )
}

