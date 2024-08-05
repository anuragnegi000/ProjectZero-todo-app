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
import { DatePicker } from "../Framepage/date-picker";

export function TodosDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="gap-3" variant="outline">
          <PlusIcon className="w-5 h-5 gap-2" />
          Add Todos
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Todos</DialogTitle>
          <DialogDescription>
            {"Add new todos here. Click save when you're done."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Todo Name
            </Label>
            <Input
              id="name"
              placeholder="Enter todo name "
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Pick a Date
            </Label>

            <DatePicker />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
