import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store";

const TodoHeader = ({ listId, title }) => {
  const dispatch = useDispatch();

  const titleChangeHandler = (event) => {
    dispatch(todoActions.changeTitle({ id: listId, title: event.target.value }));
  };

  return (
    <div className="h-12 bg-slate-100 flex items-center border border-red-700 border-solid">
      <GridViewIcon className="mx-2" />
      <input
        className="bg-transparent text-xl font-thin w-[80%] mr-1"
        value={title}
        onChange={titleChangeHandler}
      />
      <CloseIcon />
    </div>
  );
};

export default TodoHeader;
