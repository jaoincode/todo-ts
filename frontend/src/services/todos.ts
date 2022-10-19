import axios from "axios";

const todo = axios.create({
  baseURL: "http://localhost:3000/todos",
});

const getAll = async () => {
  return todo.get("/");
};

const createTodo = async (todoText: string) => {
  return todo.post("/", { todo: todoText });
};

const completeTodo = async (id: string) => {
  return todo.delete(`/${id}`);
};

export { getAll, createTodo, completeTodo };
