import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Todo = ({ task }) => {
  console.log(task)

  return (
    <div className="border-2 border-red-600 border-solid h-10 flex items-center">
      <GridViewIcon className="mx-2" fontSize="small" />
      <input className="mx-1" type="checkbox" id="1" />
      <input
        type="text"
        className="mx-1 w-4/5"
        htmlFor="1"
        value={task}
      />
      <MoreVertIcon className="mx-2" />
    </div>
  );
};

export default Todo;
