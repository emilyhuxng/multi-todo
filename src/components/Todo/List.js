import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const List = ({ list, listId }) => {
  console.log(list);
  const filter = useSelector(
    (state) => state.todoLists.find((list) => list.id === listId).filter
  );
  let newList = list;

  if (filter === "active") {
    newList = list.filter(item => {
      return !item.isSelected;
    })
  }

  if (filter === "completed") {
    newList = list.filter(item => {
      return item.isSelected;
    })
  }
  
  return (
    <div>
      {newList.map((task) => (
        <Todo task={task} listId={listId} />
      ))}
    </div>
  );
};

export default List;
