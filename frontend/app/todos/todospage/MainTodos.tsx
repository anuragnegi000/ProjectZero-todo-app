import React from "react";
import { TodosDialog } from "./TodosDialog";

const MainTodos = () => {
  return (
    <div className="flex flex-row  justify-between ">
      <div className=" flex m-4 p-4 gap-4  ">
        <TodosDialog />
        Todos modal
      </div>

      <div></div>
    </div>
  );
};

export default MainTodos;
