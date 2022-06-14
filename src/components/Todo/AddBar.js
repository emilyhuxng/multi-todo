import React, { useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Input, InputAdornment } from "@mui/material";
import { useDispatch } from "react-redux";
import { TaskAltTwoTone } from "@mui/icons-material";
import { todoActions } from "../../store";

const AddBar = ({ id }) => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Hello");
    dispatch(
      todoActions.addTodo({
        id: id,
        taskContent: { isSelected: false, content: task },
      })
    );
  };

  return (
    <form className="flex justify-center items-center" onSubmit={submitHandler}>
      <Input
        id="input-with-start-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AddIcon />
          </InputAdornment>
        }
        placeholder="Add Item..."
        inputProps={{ style: { fontSize: 12 } }}
        className="w-[90%] m-4 border border-red-900 border-solid"
        onChange={changeHandler}
        value={task}
      />
    </form>
  );
};

export default AddBar;
