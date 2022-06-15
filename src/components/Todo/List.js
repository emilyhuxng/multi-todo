import React from "react";
import Todo from "./Todo";

const List = ({ list, listId, filter }) => {
  console.log(list);
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
        <Todo listId={listId} itemId={task.itemId} content={task.content} isSelected={task.isSelected} />
      ))}
    </div>
  );
};

export default List;
