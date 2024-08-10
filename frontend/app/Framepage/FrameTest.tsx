"use client";
import React, { useState } from "react";
import { DialogFrame } from "./popover";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

interface FrameDataProps {
  onClick: (index: number) => void;
}

const FrameTest: React.FC = () => {
  const placeholdersExample = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const todos = [
    { title: "Organize workspace", date: "2024-08-24" },
    { title: "Plan weekend trip", date: "2024-08-25" },
    { title: "Attend webinar on AI", date: "2024-08-26" },
    { title: "Clean the house", date: "2024-08-27" },
    { title: "Start a new project", date: "2024-08-28" },
    { title: "Review TypeScript basics", date: "2024-08-29" },
  ];

  const [selectedTodo, setSelectedTodo] = useState<{
    title: string;
    date: string;
  } | null>(null);

  const handleIndexClick = (index: number) => {
    setSelectedTodo(todos[index]);
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
        <div className="w-full h-screen shadow-lg border rounded-2xl p-2 m-4">
          <h1>Selected Todo</h1>
          {selectedTodo ? (
            <div>
              <h2>{selectedTodo.title}</h2>
              <p>{selectedTodo.date}</p>
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
  const todos = [
    { title: "Organize workspace", date: "2024-08-24" },
    { title: "Plan weekend trip", date: "2024-08-25" },
    { title: "Attend webinar on AI", date: "2024-08-26" },
    { title: "Clean the house", date: "2024-08-27" },
    { title: "Start a new project", date: "2024-08-28" },
    { title: "Review TypeScript basics", date: "2024-08-29" },
  ];

  return (
    <div className="relative top-8 flex m-2 p-2 flex-col rounded-lg">
      <div className="flex flex-col rounded-2xl gap-4">
        {todos.map((todo, index) => (
          <button
            onClick={() => onClick(index)}
            key={index}
            className="flex flex-row border border-blue-600 rounded-2xl justify-between text-xl p-4"
          >
            <h1>{todo.title}</h1>
            <h2>{todo.date}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default FrameTest;
