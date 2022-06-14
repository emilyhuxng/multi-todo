import React from "react";
import Todo from "./Todo";

const List = ({ list }) => {
  console.log(list);

  return (
    <div>
      {list.map((task) => (
        <Todo task={task} />
      ))}
    </div>
  );
};

export default List;
