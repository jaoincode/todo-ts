import React, { useState } from "react";
import Input from "./components/Input";
import Todo from "./components/Todo";

function App() {
  const [todo, setTodo] = useState<string>("");

  const changeTodo = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    setTodo(target.value);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="todos">
          <Todo todoText="New todo" id="1" />
          <Todo todoText="New todo 2" id="2" />
          <Todo todoText="New todo 3" id="3" />
          <Todo todoText="New todo 3" id="3" />
          <Todo todoText="New todo 3" id="3" />
          <Todo todoText="New todo 3" id="3" />
          <Todo todoText="New todo 3" id="3" />
          <Todo todoText="New todo 3" id="3" />
          <Todo todoText="New todo 3" id="3" />
          <Todo todoText="New todo 3" id="3" />
          <Todo todoText="New todo 3" id="3" />
          <Todo todoText="New todo 3" id="3" />
          <Todo todoText="New todo 3" id="3" />
        </div>
        <form>
          <Input value={todo} placeholder="Add a new todo" id="input" />
        </form>
      </div>
    </div>
  );
}

export default App;
