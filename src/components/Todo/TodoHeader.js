import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store";

const TodoHeader = ({ id, title }) => {
    const dispatch = useDispatch();
    const todoLists = useSelector(state => state.todoLists);

  const titleChangeHandler = (event) => {
    dispatch(todoActions.changeTitle({id: id, title: event.target.value}))
    // console.log(todoLists);
  }

  return (
    <div className="h-12 bg-slate-100 flex items-center border border-red-700 border-solid">
      <GridViewIcon className="mx-2" />
      <input
        className="bg-transparent text-xl font-thin w-[82%]"
        value={title}
        onChange={titleChangeHandler}
      />
      <CloseIcon />
    </div>
  );
};

export default TodoHeader;
