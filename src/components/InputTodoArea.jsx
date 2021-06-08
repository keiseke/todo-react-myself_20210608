import React from "react";

export const InputTodoArea = (props) => {
  const { todoText, setTodoText, onClickAdd, stopInputFlag } = props;
  return (
    <>
      <div className="inputTodoArea">
        <input
          type="text"
          placeholder="TODOを入力してください"
          value={todoText}
          onChange={(e) => {
            setTodoText(e.target.value);
          }}
          disabled={stopInputFlag}
        />
        <button onClick={onClickAdd} disabled={stopInputFlag}>
          追加
        </button>
      </div>
    </>
  );
};
