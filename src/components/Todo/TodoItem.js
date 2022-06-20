import React from "react";
import Todo from "./Todo";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const TodoItem = ({ listId, itemId, content, isSelected, dueDate }) => {
  let dueDateContent = "";
  const currentDate = new Date();
//   console.log("Right now: " + currentDate);
//   console.log("Picked date: " + dueDate);
  if (dueDate) {
    if (
      dueDate.getDate() === currentDate.getDate() &&
      dueDate.getMonth() === currentDate.getMonth() &&
      dueDate.getFullYear() === currentDate.getFullYear()
    ) {
      dueDateContent = (
        <p className="text-xs text-blue-500 font-mono mt-0 mb-0 mr-0 pl-2 py-1 border-t w-11/12">
          Due today!
        </p>
      );
    } else if (
      dueDate.getDate() === currentDate.getDate() + 1 &&
      dueDate.getMonth() === currentDate.getMonth() &&
      dueDate.getFullYear() === currentDate.getFullYear()
    ) {
      dueDateContent = (
        <p className="text-xs text-blue-500 font-mono mt-0 mb-0 mr-0 pl-2 py-1 border-t w-11/12">
          Due tomorrow!
        </p>
      );
    } else {
      dueDateContent = (
        <div className="text-xs font-mono w-11/12 border-t py-1 h-min">
          <p className="float-left pl-2 mr-1 mb-0 text-gray-500 font-bold">Due on: </p>
          <p className="float-left text-gray-400 mb-0">
            {MONTHS[dueDate.getMonth()] +
              " " +
              dueDate.getDate() +
              ", " +
              dueDate.getFullYear()}
          </p>
        </div>
      );
    }
  }

  return (
    <div className="flex flex-col items-center w-full border-b">
      <Todo
        listId={listId}
        itemId={itemId}
        content={content}
        isSelected={isSelected}
      />
      {dueDate && dueDateContent}
    </div>
  );
};

export default TodoItem;
