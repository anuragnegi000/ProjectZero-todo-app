import React from "react";
import { TodosDialog } from "./TodosDialog";

import { TodosCard } from "./TodosCard";

const MainTodos = () => {
  return (
    <div className="flex flex-row  justify-between ">
      <div className=" flex m-4 p-4 gap-4  ">
        <TodosDialog />
      </div>

      <div className=" grid grid-cols-4 gap-3  ">
        <TodosCard />
        <TodosCard />
        <TodosCard />
        <TodosCard />
        <TodosCard />
        <TodosCard />
        <TodosCard />
        <TodosCard />
      </div>
    </div>
  );
};

export default MainTodos;
