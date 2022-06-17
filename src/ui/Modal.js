import { Calendar } from "react-calendar";
import Dialog from "@mui/material/Dialog";
import "react-calendar/dist/Calendar.css";

const Modal = ({ open, selectedValue, onClose }) => {
  return (
    <Dialog open={open} onClose={() => onClose(selectedValue)}>
      <Calendar onChange={(value) => onClose(value)} minDate={new Date()} />
    </Dialog>
  );
};

export default Modal;
