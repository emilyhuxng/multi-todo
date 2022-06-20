import React from "react";
import Buttons from "./Buttons";

const Header = ({ numOfLists }) => {
  return (
    <div className="flex justify-between w-[90%] ml-auto mr-auto my-12">
      <h1 className="font-medium text-3xl">Multi Todo</h1>
      <Buttons numOfLists={numOfLists} />
    </div>
  );
};

export default Header;
