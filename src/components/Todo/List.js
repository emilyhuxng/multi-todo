import React from "react";
import TodoItem from "./TodoItem";

const List = ({ list, listId, filter }) => {
  // console.log(list);
  let newList = list;

  if (filter === "active") {
    newList = list.filter((item) => {
      return !item.isSelected;
    });
  }

  if (filter === "completed") {
    newList = list.filter((item) => {
      return item.isSelected;
    });
  }

  let content = (
    <p className="text-center text-gray-500">
      There are no items in your list.
    </p>
  );

  if (list.length !== 0 && newList.length === 0 && filter === "active") {
    content = (
      <p className="text-center text-gray-500">
        There are no active items in your list. <br />
        Woohoo, you’ve completed all your tasks! 🥳
      </p>
    );
  }
  if (list.length !== 0 && newList.length === 0 && filter === "completed") {
    content = (
      <p className="text-center text-gray-500">
        There are no completed items in your list.
      </p>
    );
  }

  // console.log(newList);
  return newList.length === 0 ? (
    <div className="flex items-center justify-center flex-col h-36 overflow-auto">
      {content}
    </div>
  ) : (
    <div className="flex flex-col items-center h-36 overflow-auto">
      {newList.map((task) => (
        <TodoItem
          key={task.itemId}
          listId={listId}
          itemId={task.itemId}
          content={task.content}
          isSelected={task.isSelected}
          dueDate={task.dueDate}
        />
      ))}
    </div>
  );
};

export default List;
