"use client";
import React, { useState } from "react";
import { DialogFrame } from "./popover";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { ObjectTodos } from "../utils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Draggable from "react-draggable";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import AddTodos, { ThreedotsIcon } from "./AddTodos";
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

const colors = [
  "bg-gradient-to-r from-black via-black to-black ",
  "bg-gradient-to-r from-black via-black to-black ",
  "bg-gradient-to-r from-black via-black to-black ",
  "bg-gradient-to-r from-black via-black to-black ",
  "bg-gradient-to-r from-black via-black to-black ",
];

const FrameTest: React.FC = () => {
  const placeholdersExample = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
  interface Todo {
    id: string;
    title: string;
    date: string;
  }

  interface ObjectTodo {
    title: string;
    date: string;
    todos: Todo[];
  }

  const [selectedTodo, setSelectedTodo] = useState<ObjectTodo | null>(null);
  const [previousTodo, setPreviousTodo] = useState<ObjectTodo | null>(null);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  const scale = useTransform(scrollY, [0, 1000], [1, 1.2]);
  const rotateX = useTransform(scrollY, [0, 1000], [0, 10]);

  const handleIndexClick = (index: number) => {
    setSelectedTodo(ObjectTodos[index]);
  };

  return (
    <div className="m-2 p-2 flex flex-col relative">
      <nav className="relative m-2 p-2 border rounded-lg">
        <div className="block">Logo</div>
        <div className="flex justify-end w-auto gap-4">
          <button>Home</button>
          <button>ABOUT</button>
          <button>SERVICES</button>
          <button>CONTACT</button>
        </div>
      </nav>

      <h1 className="text-3xl flex justify-center">Frame</h1>
      <div className="flex flex-row">
        <div className="border shadow-lg shadow-gray-300 w-[40%] h-screen overflow-auto m-2 p-4 rounded-lg flex flex-col">
          <div className="flex justify-between flex-row gap-2">
            <DialogFrame />
            <PlaceholdersAndVanishInput placeholders={placeholdersExample} />
          </div>
          <div className="mt-4 text-center flex flex-col justify-center border">
            <FrameData onClick={handleIndexClick} />
          </div>
        </div>

        <div className="Tone w-full h-screen shadow-lg border rounded-2xl p-4 m-2 overflow-auto relative">
          {/*TODO: Add a plus icon and grip icon

          <div className="w-full border h-auto  rounded-lg m-0 mb-6 p-2 flex flex-row justify-between">
            <PlusIcon className="w-10 h-10 text-blue-600" />
            <GripVertical className="w-10 h-10 text-blue-600" />
          </div>
*/}

          <AnimatePresence>
            {selectedTodo ? (
              <motion.div
                className="grid grid-cols-6 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
              >
                {selectedTodo.todos.map((todo, index) => (
                  <Draggable key={index}>
                    <motion.div
                      whileTap={{ scale: 0.95 }}
                      drag
                      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                      className={`flex items-center justify-center w-44 h-28 border rounded-lg shadow-lg p-2 ${
                        colors[index % colors.length]
                      }`}
                      style={{
                        scale,
                        rotateX,
                        transition: "all 0.3s ease-in-out",
                        boxShadow:
                          "0px 0px 15px rgba(0, 0, 0, 0.3), 0px 0px 25px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <motion.div
                            className="text-center text-white flex flex-col m-0 "
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            style={{ cursor: "grab" }}
                          >
                            <div className=" flex flex-row-reverse  justify-between gap-4 border ">
                              {/* TODO: Three dot add the component here   */}
                              <ThreedotsIcon
                                selectedTodo={selectedTodo}
                                setSelectedTodo={setSelectedTodo}
                              />
                              <h2 className="text-sm flex     font-sm">
                                {todo.title}
                              </h2>
                            </div>
                            <p className="text-sm">{todo.date}</p>
                          </motion.div>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>{todo.title}</AlertDialogTitle>
                            <AlertDialogDescription>
                              {`This action cannot be undone. You're interacting with todo titled "${todo.title}" created on "${todo.date}".`}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </motion.div>
                  </Draggable>
                ))}
              </motion.div>
            ) : (
              <h1 className="text-7xl text-center font-bold h-screen ">
                Please select a todo from the list.
              </h1>
            )}
          </AnimatePresence>
          <div className="relative  inline-block  m-auto p-8   ">
            <div className="fixed flex-row    top-auto left-0  right-5 m-6 bottom-10  flex justify-end  ">
              {/* TODO: Add a plus icon and grip icon */}
              <AddTodos />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function FrameData({ onClick }: FrameDataProps) {
  return (
    <motion.div
      className="relative top-8 m-2 p-2 flex flex-col rounded-lg h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-2">
        {ObjectTodos.map((todo, index) => (
          <motion.button
            onClick={() => onClick(index)}
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex flex-row border border-blue-600 rounded-2xl justify-between text-xl p-3"
          >
            <h1>{todo.title}</h1>
            <h2>{todo.date}</h2>
            <h2 className="text-blue-600 text-sm">{todo.todos.length}</h2>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}

export default FrameTest;
