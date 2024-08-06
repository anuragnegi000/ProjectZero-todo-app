import express from "express";
import { listTodos, addTodo } from "../controllers/todoController";

const router = express.Router();

router.get("/frames/:frameId/todos", listTodos);
router.post("/frames/:frameId/todos", addTodo);

export default router;
