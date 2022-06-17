import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store";
import Tooltip from "../../ui/Tooltip";

const Todo = ({ listId, itemId, content, isSelected }) => {
  // console.log(task);
  const dispatch = useDispatch();
  const selectedStyle = isSelected ? "line-through" : "";

  const checkboxChangeHandler = (event) => {
    console.log(event.target.checked + " " + listId + " " + itemId);
    dispatch(
      todoActions.changeSelected({
        listId,
        itemId,
        isSelected: event.target.checked,
      })
    );
  };

  const todoChangeHandler = (event) => {
    dispatch(
      todoActions.changeTodo({ listId, itemId, content: event.target.value })
    );
  };

  const handleKeyPress = (event) => {
    if (event.code === "Enter") {
      event.target.blur();
    }
  };
  // console.log(itemId + " " + isSelected)

  return (
    <div className="border h-10 flex items-center w-full">
      <GridViewIcon className="mx-2" fontSize="small" />
      <input
        className="mx-1"
        type="checkbox"
        id="1"
        checked={isSelected}
        onChange={checkboxChangeHandler}
      />
      <input
        type="text"
        className={"mx-1 w-4/5 " + selectedStyle}
        htmlFor="1"
        value={content}
        onChange={todoChangeHandler}
        onKeyDown={handleKeyPress}
      />
      <Tooltip />
    </div>
  );
};

export default Todo;
