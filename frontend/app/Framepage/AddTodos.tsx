import { Button } from "@/components/ui/button";
import { ObjectTodos } from "../utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { EllipsisVerticalIcon, PlusIcon } from "lucide-react";
interface Todo {
  id: string;
  title: string;
  date: string;
}

interface ObjectTodos {
  title: string;
  date: string;
  todos: Todo[];
}
interface ThreedotsIconProps {
  selectedTodo: ObjectTodos | null;
  setSelectedTodo: React.Dispatch<React.SetStateAction<ObjectTodos | null>>;
}
const AddTodos = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <PlusIcon className=" justify-end sticky w-12 h-12  z-100  border-collapse bg-white   rounded-full text-blue-600 " />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodos;
export function ThreedotsIcon({
  selectedTodo,
  setSelectedTodo,
}: ThreedotsIconProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button
            onClick={() => {
              setSelectedTodo(null);
            }}
            className=" flex  m-0 p-0"
          >
            <EllipsisVerticalIcon width={16} height={16} />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <button
              onClick={() => {
                setSelectedTodo(selectedTodo ? null : selectedTodo);
              }}
            >
              {" "}
              Edit
            </button>
          </DropdownMenuItem>

          <DropdownMenuItem>set Priority </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
