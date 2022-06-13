import React from "react";
import AddBar from "./AddBar";
import Filters from "./Filters";
import List from "./List";
import TodoHeader from "./TodoHeader";

const TodoList = (props) => {
  return (
    <div className="rounded-sm border-solid border-slate-400 border w-1/3">
      <TodoHeader id={props.id} title={props.title} />
      <Filters />
      <List />
      <AddBar />
    </div>
  );
};

export default TodoList;
