import { useEffect, useState } from "react";
import { InputTodoArea } from "./components/InputTodoArea";
import { IncompleteTodoArea } from "./components/IncompleteTodoArea";
import "./styles.css";
import { CompleteTodoArea } from "./components/CompleteTodoArea";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteLists, setIncompleteLists] = useState([]);
  const [completeLists, setCompleteLists] = useState([]);
  const [stopInputFlag, setStopInputFlag] = useState(false);
  //追加ボタン押下時の処理
  const onClickAdd = () => {
    if (todoText === "") {
      return;
    }
    handlePutList(incompleteLists, todoText, setIncompleteLists);
    setTodoText("");
  };
  //削除ボタン押下時の処理
  const onClickDelete = (index) => {
    handleDelete(incompleteLists, index, setIncompleteLists);
  };
  //完了ボタン押下時の処理
  const onClickComplete = (index) => {
    handlePutList(completeLists, incompleteLists[index], setCompleteLists);
    handleDelete(incompleteLists, index, setIncompleteLists);
  };
  //戻すボタン押下時の処理
  const onClickBack = (index) => {
    handlePutList(incompleteLists, completeLists[index], setIncompleteLists);
    handleDelete(completeLists, index, setCompleteLists);
  };
  //削除処理の関数
  const handleDelete = (list, index, setter) => {
    const newTodos = [...list];
    newTodos.splice(index, 1);
    setter(newTodos);
  };
  //未完了のTODOへ追加処理関数
  const handlePutList = (list, todo, setter) => {
    const newTodos = [...list, todo];
    setter(newTodos);
  };

  useEffect(() => {
    incompleteLists.length >= 5
      ? setStopInputFlag(true)
      : setStopInputFlag(false);
  }, [incompleteLists]);

  return (
    <>
      <InputTodoArea
        todoText={todoText}
        setTodoText={setTodoText}
        onClickAdd={onClickAdd}
        stopInputFlag={stopInputFlag}
      />
      {stopInputFlag && <p>未完了が５個超えてますよ～</p>}
      <IncompleteTodoArea
        incompleteLists={incompleteLists}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodoArea
        completeLists={completeLists}
        onClickBack={onClickBack}
      />
    </>
  );
};
