import React from "react";

type Props = {
  value: string;
  placeholder: string;
  id: string;
};

function Input({ value, placeholder, id }: Props) {
  return (
    <div className="input">
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        id={id}
      ></input>
    </div>
  );
}

export default Input;
