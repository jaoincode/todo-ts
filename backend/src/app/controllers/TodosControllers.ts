import { Request, Response } from "express";
import Todo from "../models/Todo";

export default {
  async getAll(req: Request, res: Response) {
    const todos = await Todo.find();
    return res.json(todos);
  },

  async createTodo(req: Request, res: Response) {
    const { todo } = req.body;

    if (!todo) {
      return res.status(203).json({ error: "You need to send a todo" });
    }
    const newTodo = new Todo({
      todo,
    });
    try {
      await newTodo.save();
      res.status(201).json({ newTodo });
    } catch (err) {
      res.status(203).json({ error: err });
    }
  },

  async completeTodo(req: Request, res: Response) {
    const { id } = req.params;
    const completedTodo = await Todo.findById(id);

    try {
      await completedTodo?.delete();
      return res.status(200).json({ message: "Todo completed with success" });
    } catch (err) {}
  },
};
