import React, { useState } from "react";

const Filters = () => {
  const [selected, setSelected] = useState("all");

  const selectedStyle = "border-b border-blue-400 border-solid text-blue-400";

  const clickHandler = (selectedFilter) => {
    setSelected(selectedFilter);
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
