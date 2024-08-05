import React from "react";
import { BreadcrumbTodos } from "./breadcrum";
import MainTodos from "./MainTodos";
import { Card } from "@/components/ui/card";

const TodosPage = () => {
  return (
    <>
      <div className="flex mt-auto  flex-col shadow-lg shadow-accent-300 rounded-lg  h-full  ">
        <div className=" hidden md:flex justify-between  m-4 p-4 ">
          <BreadcrumbTodos />
        </div>

        <div className="  gap-8 w-screen h-full flex flex-row">
          <MainTodos />
        </div>
      </div>
    </>
  );
};
export default TodosPage;
