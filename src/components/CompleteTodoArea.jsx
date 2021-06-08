import React from "react";

export const CompleteTodoArea = (props) => {
  const { completeLists, onClickBack } = props;
  return (
    <>
      <div className="completeArea">
        <p>完了したTODO</p>
        <ul>
          {completeLists.map((todo, index) => {
            return (
              <div key={index} className="todoList">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
