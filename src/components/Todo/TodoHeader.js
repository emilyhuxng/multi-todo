import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store";

const TodoHeader = ({ listId, title }) => {
  const dispatch = useDispatch();

  const titleChangeHandler = (event) => {
    dispatch(todoActions.changeTitle({ listId, title: event.target.value }));
  };

  const handleKeyPress = (event) => {
    if (event.code === "Enter") {
      event.target.blur();
    }
  };

  return (
    <div className="h-12 bg-slate-100 flex items-center ">
      <GridViewIcon className="mx-2 text-gray-400" />
      <input
        className=" bg-inherit text-xl font-thin w-[80%] mr-1 focus:outline-none focus:bg-yellow-100"
        value={title}
        onChange={titleChangeHandler}
        onKeyDown={handleKeyPress}
      />
      <CloseIcon />
    </div>
  );
};

export default TodoHeader;
