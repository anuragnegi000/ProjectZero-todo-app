"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BreadcrumbInline } from "./breadcrum";
import Image from "next/image";
import { DatePicker } from "./date-picker";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import { handleToast } from "../todos/todospage/Toast";

const FrameForm = () => {
  return (
    <>
      <div className="flex mt-auto justify-center flex-col shadow-lg shadow-accent-300 rounded-lg  h-full  ">
        <div className=" hidden md:flex justify-between  m-4 p-4 ">
          <BreadcrumbInline />
        </div>

        <div className="  gap-8  m-16 p-8  flex flex-row justify-center">
          <div className="flex  justify-center ">
            <CardWithForm />
          </div>

          <div className=" hidden md:flex ">
            <Image
              className="rounded-lg  shadow-lg shadow-blue-500"
              src="/satoru-gojo.jpg"
              alt="card.img"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameForm;

export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Frames </CardTitle>
        <CardDescription>
          Create multiple Frames and todos in one click
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Frame Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Select Date</Label>
              <DatePicker />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="Priority">Priority</Label>
              <Select>
                <SelectTrigger id="priority">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button variant="outline" onClick={handleToast}>
          <Link href="/todos/todospage"> Next </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
