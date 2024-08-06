"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusIcon } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FakeTodos } from "@/app/utils";
import { TodosDatePicker } from "./TodosDatePicker";
import { TodosCombobox } from "./TodosComboBox";

// Validation schema using Zod
const todoSchema = z.object({
  TodoName: z.string().min(1, "Todo Name is required"),
  Description: z.string().min(1, "Description is required"),
  TodoDate: z.string().optional(),
  Priority: z.string().optional(),
  Picture: z.any().optional(),
});

export function TodosDialog() {
  const [todos, setTodos] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    }
    return [];
  });

  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    reset,
    getValues,
  } = useForm({
    resolver: zodResolver(todoSchema),
  });

  const onSubmit = (data: any) => {
    const fileInput = document.getElementById("picture") as HTMLInputElement;
    const file = fileInput?.files?.[0] || "";

    // Convert date string to Date object if it's defined
    const todoDate = data.TodoDate ? new Date(data.TodoDate) : undefined;

    const newTodo = {
      id: todos.length + 1, // Generate new ID
      TodoName: data.TodoName,
      Description: data.Description,
      TodoDate: todoDate,
      Priority: data.Priority,
      Picture: file ? URL.createObjectURL(file) : "none",
    };

    // Update todos state and local storage
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));

    // Log updated todos
    console.log("Updated Todos:", updatedTodos);

    // Close dialog and reset form
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-3" variant="outline">
          <PlusIcon className="w-5 h-5 gap-2" />
          Add Todos
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Add New Todos</DialogTitle>
            <DialogDescription>
              {"Add new todos here. Click save when you're done."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="TodoName" className="text-right">
                Todo Name
              </Label>
              <Input
                id="TodoName"
                placeholder="Enter todo name"
                className="col-span-3"
                {...register("TodoName")}
              />
              {errors.TodoName && (
                <span className="text-red-500">{errors.TodoName.message}</span>
              )}
            </div>
            <div className="flex flex-row items-center gap-8">
              <Label htmlFor="Description">Description</Label>
              <Input
                id="Description"
                placeholder="Enter description"
                {...register("Description")}
              />
              {errors.Description && (
                <span className="text-red-500">
                  {errors.Description.message}
                </span>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="TodoDate" className="text-right">
                Pick a Date
              </Label>
              <Controller
                name="TodoDate"
                control={control}
                render={({ field }) => (
                  <TodosDatePicker
                    value={field.value ? new Date(field.value) : undefined}
                    onChange={(date) => field.onChange(date?.toISOString())}
                  />
                )}
              />
              {errors.TodoDate && (
                <span className="text-red-500">{errors.TodoDate.message}</span>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Priority" className="text-right">
                Pick Priority
              </Label>
              <Controller
                name="Priority"
                control={control}
                render={({ field }) => (
                  <TodosCombobox
                    value={field.value || ""}
                    onChange={field.onChange}
                  />
                )}
              />
              {errors.Priority && (
                <span className="text-red-500">{errors.Priority.message}</span>
              )}
            </div>
            <div className="flex flex-row items-center gap-8">
              <Label htmlFor="Picture">Picture</Label>
              <Input
                id="picture"
                type="file"
                {...register("Picture")}
                onChange={(e) => setValue("Picture", e.target.files?.[0])}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create Todo</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
