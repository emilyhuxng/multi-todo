import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { todoActions } from "../store/index.js";
import { useDispatch } from "react-redux";
import Alert from "../ui/Alert.js";

const Buttons = () => {
  const dispatch = useDispatch();
  const [alertOpen, setAlertOpen] = useState(false);

  const addNewListHandler = () => {
    dispatch(todoActions.addTodoList());
  };

  const deleteAllListsHandler = () => {
    setAlertOpen(true);
  };

  const closeHandler = (close) => {
    if (close) {
      dispatch(todoActions.deleteAllTodoLists());
    }
    setAlertOpen(false);
  }

  return (
    <div>
      <Button
        style={{
          backgroundColor: "#23d160",
          textTransform: "none",
          fontWeight: "700px",
        }}
        variant="contained"
        startIcon={<AddIcon />}
        onClick={addNewListHandler}
      >
        Add New List
      </Button>
      <Button
        style={{
          backgroundColor: "#ff3860",
          textTransform: "none",
          marginLeft: "0.5rem",
        }}
        variant="contained"
        startIcon={<DeleteIcon />}
        onClick={deleteAllListsHandler}
      >
        Delete All Lists
      </Button>
      <Alert open={alertOpen} onClose={closeHandler} />
    </div>
  );
};

export default Buttons;
