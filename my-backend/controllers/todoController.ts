import { Request, Response } from "express";
import { getTodos, createTodo } from "../models/todoModel";

export const listTodos = async (req: Request, res: Response) => {
  const frameId = parseInt(req.params.frameId, 10);
  const todos = await getTodos(frameId);
  res.json(todos);
};

export const addTodo = async (req: Request, res: Response) => {
  const frameId = parseInt(req.params.frameId, 10);
  const todoData = req.body;
  const todo = await createTodo(frameId, todoData);
  res.status(201).json(todo);
};
