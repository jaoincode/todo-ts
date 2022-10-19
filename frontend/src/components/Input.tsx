import React, { FormEvent, useState } from "react";
import { createTodo } from "../services/todos";
import Right from "../assets/right.png";

type Props = {
  placeholder: string;
  id: string;
};

function Input({ placeholder, id }: Props) {
  const [value, setValue] = useState<string>("");

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const submitTodo = async (e: FormEvent) => {
    e.preventDefault();
    if (!value) return alert("You have to send a todo");
    await createTodo(value);
    window.location.reload();
  };

  return (
    <form onSubmit={submitTodo}>
      <div className="input">
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          id={id}
          onChange={changeInput}
          maxLength={35}
        ></input>
        <button type="submit">
          <img src={Right} alt="Send button" />
        </button>
      </div>
    </form>
  );
}

export default Input;
