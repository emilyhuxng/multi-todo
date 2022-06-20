import React from "react";
import AddBar from "./AddBar";
import Filters from "./Filters";
import List from "./List";
import TodoHeader from "./TodoHeader";
import ProgressBar from "react-bootstrap/ProgressBar";

const TodoList = ({ listId, filter, title, list }) => {
  const total = list.length;
  const finished = list.filter((item) => item.isSelected).length;
  console.log(total + " " + finished)

  return (
    <div className="rounded-sm border-solid border-slate-400 border h-[275px]">
      <TodoHeader listId={listId} title={title} />
      <ProgressBar style={{ height: "2px" }} now={finished / total * 100} />
      <Filters listId={listId} />
      <List list={list} listId={listId} filter={filter} />
      <AddBar listId={listId} />
    </div>
  );
};

export default TodoList;
