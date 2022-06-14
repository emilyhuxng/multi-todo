import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store";

const Filters = ({ listId }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("all");

  const selectedStyle = "border-b border-blue-400 border-solid text-blue-400 pt-0.5";

  const clickHandler = (selectedFilter) => {
    setSelected(selectedFilter);
    dispatch(todoActions.changeFilter({listId, filter: selectedFilter}))
  };

  return (
    <div className="h-8 flex items-center border border-solid border-gray-100 text-sm justify-center">
      <button
        className={
          "px-2 h-full " + (selected === "active" ? selectedStyle : "")
        }
        onClick={() => clickHandler("active")}
      >
        Active
      </button>
      <button
        className={
          "px-2 h-full " + (selected === "completed" ? selectedStyle : "")
        }
        onClick={() => clickHandler("completed")}
      >
        Completed
      </button>
      <button
        className={"px-2 h-full " + (selected === "all" ? selectedStyle : "")}
        onClick={() => clickHandler("all")}
      >
        All
      </button>
    </div>
  );
};

export default Filters;
