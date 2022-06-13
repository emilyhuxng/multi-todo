import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Input, InputAdornment } from "@mui/material";

const AddBar = () => {
  return (
    <div className="flex justify-center items-center">
      <Input
        id="input-with-start-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AddIcon />
          </InputAdornment>
        }
        placeholder="Add Item..."
        inputProps={{style: {fontSize: 12}}}
        className="w-[90%] m-4 border border-red-900 border-solid"
      />
    </div>
  );
};

export default AddBar;
