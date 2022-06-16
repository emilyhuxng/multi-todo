import React from "react";
import AddBar from "./AddBar";
import Filters from "./Filters";
import List from "./List";
import TodoHeader from "./TodoHeader";

const TodoList = ({listId, filter, title, list}) => {
  return (
    <div className="rounded-sm border-solid border-slate-400 border h-min">
      <TodoHeader listId={listId} title={title} />
      <Filters listId={listId} />
      <List list={list} listId={listId} filter={filter}/>
      <AddBar listId={listId} />
    </div>
  );
};

export default TodoList;
