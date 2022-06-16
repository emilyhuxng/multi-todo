import React from "react";
import Todo from "./Todo";

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
    <p className="text-center text-gray-500 leading-[8rem]">
      There are no items in your list.
    </p>
  );

  if (list.length !== 0 && newList.length === 0 && filter === "active") {
    content = (
      <p className="text-center text-gray-500 py-[4rem]">
        There are no active items in your list. <br />
        Woohoo, you’ve completed all your tasks! 🥳
      </p>
    );
  }
  if (list.length !== 0 && newList.length === 0 && filter === "completed") {
    content = (
      <p className="text-center text-gray-500 leading-[8rem]">
        There are no completed items in your list.
      </p>
    );
  }

  console.log(newList);
  return (
    <div className="flex items-center justify-center flex-col border border-red-700">
      {newList.length === 0
        ? content
        : newList.map((task) => (
            <Todo
              listId={listId}
              itemId={task.itemId}
              content={task.content}
              isSelected={task.isSelected}
            />
          ))}
    </div>
  );
};

export default List;
