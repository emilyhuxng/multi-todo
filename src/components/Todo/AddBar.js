import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Input, InputAdornment } from "@mui/material";
import { useDispatch } from "react-redux";
import { todoActions } from "../../store";

const AddBar = ({ listId }) => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setTask("");
    dispatch(
      todoActions.addTodo({
        listId,
        taskContent: { isSelected: false, content: task, dueDate: null, },
      })
    );
  };

  return (
    <form className="flex justify-center items-center mb-0 border-t-2" onSubmit={submitHandler}>
      <Input
        id="input-with-start-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AddIcon />
          </InputAdornment>
        }
        placeholder="Add Item..."
        inputProps={{ style: { fontSize: 12 } }}
        className="w-[90%] mx-4 my-2"
        onChange={changeHandler}
        value={task}
      />
    </form>
  );
};

export default AddBar;
