import React from "react";
import AddBar from "./AddBar";
import Filters from "./Filters";
import List from "./List";
import TodoHeader from "./TodoHeader";

const TodoList = ({listId, filter, title, list}) => {
  return (
    <div className="rounded-sm border-solid border-slate-400 border">
      <TodoHeader id={listId} title={title} />
      <Filters listId={listId} />
      <List list={list} listId={listId} />
      <AddBar id={listId} />
    </div>
  );
};

export default TodoList;
