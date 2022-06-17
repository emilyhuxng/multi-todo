import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

const Alert = ({ open, onClose }) => {
  const yesHandler = () => {
    onClose(true);
  };

  const noHandler = () => {
    onClose(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={noHandler}>
        <DialogTitle>Delete all lists?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete all your lists? This action cannot
            be reversed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={yesHandler}>Yes</Button>
          <Button onClick={noHandler}>No</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Alert;
