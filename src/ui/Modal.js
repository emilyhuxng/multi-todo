import { Calendar } from "react-calendar";
import Dialog from "@mui/material/Dialog";
import "react-calendar/dist/Calendar.css";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { todoActions } from "../store";

const Modal = ({ open, selectedValue, onClose, listId, itemId }) => {
  const dispatch = useDispatch();

  const clearHandler = () => {
    dispatch(todoActions.addDueDate({ listId, itemId, dueDate: null }));
    onClose(null);
  };

  return (
    <Dialog open={open} onClose={() => onClose(selectedValue)}>
      <Calendar onChange={(value) => onClose(value)} minDate={new Date()} />
      <div className="flex justify-center">
        <Button onClick={clearHandler} className="w-32">
          Clear
        </Button>
      </div>
    </Dialog>
  );
};

export default Modal;
