"use client";

import React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type TodosDatePickerProps = {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
};

export function TodosDatePicker({ value, onChange }: TodosDatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !value && "text-muted-foreground dark:text-muted-foreground-yellow",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {value ? format(value, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 m-2 shadow-sm">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => onChange(date || undefined)} // Ensure `undefined` is used when no date is selected
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
