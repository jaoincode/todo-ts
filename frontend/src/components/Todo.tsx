import React from "react";

type Props = {
  todoText: string;
  id: string;
};

function Todo({ todoText, id }: Props) {
  const handleComplete = () => {};

  return (
    <div className="todo">
      <span>{todoText}</span>
      <button onClick={handleComplete}>Complete</button>
    </div>
  );
}

export default Todo;
