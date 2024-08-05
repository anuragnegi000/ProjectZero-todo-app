import { BellRing, Check, EllipsisVerticalIcon } from "lucide-react";

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
import { Switch } from "@/components/ui/switch";
import { TodosEdit } from "./TodosEdit";
import { Telemetry } from "next/dist/telemetry/storage";

const notifications = [
  {
    title: "Date",
    description: "05/05/2023",
  },
  {
    title: "Priority",
    description: "Easy",
  },
  {
    title: "Notes",
    description: " I will complete this task",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function TodosCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{"Todos Title "}</CardTitle>
          <CardTitle>
            <TodosEdit />
          </CardTitle>
        </div>

        <CardDescription>{"Todos Title "}</CardDescription>
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
