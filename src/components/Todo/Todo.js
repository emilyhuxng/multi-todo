import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store";

const Todo = ({ task, listId }) => {
  // console.log(task);
  const itemId = task.itemId;
  const dispatch = useDispatch();
  const isSelected = useSelector(
    (state) =>
      state.todoLists
        .find((list) => list.id === listId)
        .list.find((item) => item.itemId === itemId).isSelected
  );
  const selectedStyle = isSelected ? "line-through" : "";

  const checkboxChangeHandler = (event) => {
    console.log(event.target.checked);
    console.log(listId + " " + itemId);
    dispatch(
      todoActions.changeSelected({
        listId,
        itemId,
        isSelected: event.target.checked,
      })
    );
  };

  return (
    <div className="border-2 border-red-600 border-solid h-10 flex items-center">
      <GridViewIcon className="mx-2" fontSize="small" />
      <input
        className="mx-1"
        type="checkbox"
        id="1"
        onChange={checkboxChangeHandler}
      />
      <input
        type="text"
        className={"mx-1 w-4/5 " + selectedStyle}
        htmlFor="1"
        value={task.content}
      />
      <MoreVertIcon className="mx-2" />
    </div>
  );
};

export default Todo;
