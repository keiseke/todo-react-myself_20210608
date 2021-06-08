import React from "react";

export const IncompleteTodoArea = (props) => {
  const { incompleteLists, onClickComplete, onClickDelete } = props;
  return (
    <>
      <div className="incompleteTodoArea">
        <p>未完了のTODO</p>
        <ul>
          {incompleteLists.map((todo, index) => {
            return (
              <div key={index} className="todoList">
                <li>{todo}</li>
                <button
                  onClick={() => {
                    onClickComplete(index);
                  }}
                >
                  完了
                </button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
