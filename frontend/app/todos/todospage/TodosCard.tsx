import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { TodosEdit } from "./TodosEdit";

// Define the structure of a Todo item
type Todo = {
  id: number;
  TodoName: string;
  Description: string;
  TodoDate: string;
  Priority: string;
  Picture: string;
};

// Define the properties expected by the TodosCard component
type CardProps = React.ComponentProps<typeof Card> & {
  todo: Todo;
};

export function TodosCard({ className, todo }: CardProps) {
  // Dynamically create notifications from the todo object
  const notifications = [
    {
      title: "Date",
      description: todo.TodoDate,
    },
    {
      title: "Priority",
      description: todo.Priority,
    },
    {
      title: "Description",
      description: todo.Description,
    },
    {
      title: "Picture",
      description: todo.Picture,
    },
  ];

  return (
    <Card className={cn("w-[380px]", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{todo.TodoName}</CardTitle>
          <CardTitle>
            <TodosEdit />
          </CardTitle>
        </div>

        <CardDescription>{todo.Description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check className="mr-2 h-4 w-4" /> Mark all as read
        </Button>
      </CardFooter>
    </Card>
  );
}
