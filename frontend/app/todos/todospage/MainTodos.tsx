import React from "react";
import { TodosDialog } from "./TodosDialog";

import { TodosCard } from "./TodosCard";
import { FakeTodos } from "@/app/utils";

const MainTodos = () => {
  return (
    <div className="flex flex-row  justify-between ">
      <div className=" flex m-4 p-4 gap-4  ">
        <TodosDialog />
      </div>

      <div className=" grid grid-cols-4 gap-3  ">
        {FakeTodos.map((todo) => (
          <TodosCard key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default MainTodos;
