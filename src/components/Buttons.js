import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useState } from "react";
import { todoActions } from "../store/index.js";
import { useDispatch } from "react-redux";
import Alert from "../ui/Alert.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Buttons = ({ numOfLists }) => {
  const theme = createTheme({
    palette: {
      action: {
        disabledBackground: "#ff8aa1",
        disabled: "white",
      },
      error: {
        main: "#ff4066",
      },
      success: {
        main: "#78ff85",
      },
    },
  });

  const dispatch = useDispatch();
  const [alertOpen, setAlertOpen] = useState(false);
  const isEmpty = numOfLists === 0;

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
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          color="success"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={addNewListHandler}
          sx={{ color: "white", mx: 1 }}
        >
          Add New List
        </Button>

        <Button
          color="error"
          variant="contained"
          startIcon={<DeleteIcon />}
          onClick={deleteAllListsHandler}
          disabled={isEmpty}
          sx={{ mx: 1 }}
        >
          Delete All Lists
        </Button>
      </ThemeProvider>
      <Alert open={alertOpen} onClose={closeHandler} />
    </div>
  );
};

export default Buttons;
