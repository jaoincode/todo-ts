import React, { useEffect, useState } from "react";
import Input from "./components/Input";
import Todo from "./components/Todo";
import { getAll } from "./services/todos";

type Todo = {
  todo: string;
  createdAt: Date;
  _id: string;
};

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const response = await getAll();
    setTodos(response.data.reverse());
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="todos">
          {todos.length < 1 && <p className="nothing">Nothing saved</p>}
          {todos.length > 0 &&
            todos.map((todo: Todo) => (
              <Todo
                todoText={todo.todo}
                id={todo._id}
                key={todo.todo}
                createdAt={todo.createdAt}
              />
            ))}
          <div className="shadow"></div>
        </div>
        <Input placeholder="Add a new todo" id="input" />
      </div>
      <footer>
        <span>
          Made with ❤️ by <a href="https://github.com/jaoincode">@jaoincode</a>
        </span>
      </footer>
    </div>
  );
}

export default App;
