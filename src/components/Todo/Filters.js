import React from "react";

const Filters = () => {
  return (
    <div className="h-8 flex items-center border border-solid border-blue-700 text-sm justify-center">
      <button className="mx-2">Active</button>
      <button className="mx-2">Completed</button>
      <button className="mx-2">All</button>
    </div>
  );
};

export default Filters;
