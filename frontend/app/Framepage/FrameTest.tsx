"use client";
import React, { useState } from "react";
import { DialogFrame } from "./popover";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { ObjectTodos } from "../utils";

interface FrameDataProps {
  onClick: (index: number) => void;
}

interface Todo {
  title: string;
  date: string;
}

interface ObjectTodo {
  title: string;
  date: string;
  todos: Todo[];
}

const FrameTest: React.FC = () => {
  const placeholdersExample = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const [selectedTodo, setSelectedTodo] = useState<ObjectTodo | null>(null);

  const handleIndexClick = (index: number) => {
    setSelectedTodo(ObjectTodos[index]);
  };

  return (
    <div className="m-2 p-2 flex flex-col">
      <nav className="relative m-2 p-2 border rounded-lg">
        <div className="block">Logo</div>
        <div className="flex justify-end w-auto gap-10">
          <button>Home</button>
          <button>ABOUT</button>
          <button>SERVICES</button>
          <button>CONTACT</button>
        </div>
      </nav>

      <h1 className="text-3xl flex justify-center">Frame</h1>
      <div className="flex flex-row">
        <div className="border shadow-lg shadow-gray-300 w-[40%] h-screen overflow-auto m-4 p-5 rounded-lg flex flex-col">
          <div className="flex flex-row justify-between w-full m-0 p-0">
            <div className="inline-block">
              <DialogFrame />
            </div>
            <div>
              <PlaceholdersAndVanishInput placeholders={placeholdersExample} />
            </div>
          </div>
          <div className="text-ellipsis overflow-auto text-center flex flex-col justify-center mt-4 border">
            <FrameData onClick={handleIndexClick} />
          </div>
        </div>
        <div className="Tone w-full h-[80vh] shadow-lg border rounded-2xl p-2 m-4">
          {selectedTodo ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-auto p-2">
              <h2 className="text-3xl font-bold col-span-full">
                {selectedTodo.title}
              </h2>
              <p className="text-xl font-bold text-gray-400 col-span-full">
                {selectedTodo.date}
              </p>
              <ul className="todo-list max-h-[60vh] overflow-auto col-span-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedTodo.todos.map((todo, index) => (
                  <li
                    key={index}
                    className="m-4 p-4 border border-blue-600 rounded-2xl text-xl"
                  >
                    {todo.title} - {todo.date}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Please select a todo from the list.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export function FrameData({ onClick }: FrameDataProps) {
  return (
    <div className="relative top-8 flex m-2 p-2 flex-col rounded-lg">
      <div className="flex flex-col rounded-2xl gap-4">
        {ObjectTodos.map((todo, index) => (
          <button
            onClick={() => onClick(index)}
            key={index}
            className="flex flex-row border border-blue-600 rounded-2xl justify-between text-xl p-4"
          >
            <h1>{todo.title}</h1>
            <h2>{todo.date}</h2>
            <h2 className="text-blue-600">{todo.todos.length}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default FrameTest;
