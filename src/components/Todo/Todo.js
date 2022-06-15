import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch} from "react-redux";
import { todoActions } from "../../store";

const Todo = ({ listId, itemId, content, isSelected }) => {
  // console.log(task);
  const dispatch = useDispatch();
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

  const todoChangeHandler = (event) => {
    dispatch(
      todoActions.changeTodo({ listId, itemId, content: event.target.value })
    );
  };



  const handleKeyPress = (event) => {
    // event.preventDefault();
    if (event.code === "Enter") {
      event.target.blur();
    }
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
        value={content}
        onChange={todoChangeHandler}
        onKeyDown={handleKeyPress}
      />
      <MoreVertIcon className="mx-2" />
    </div>
  );
};

export default Todo;
