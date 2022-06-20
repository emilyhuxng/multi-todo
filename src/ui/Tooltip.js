import Popup from "reactjs-popup";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DeleteIcon from "@mui/icons-material/Delete";
import "../App.css";
import { useDispatch } from "react-redux";
import { todoActions } from "../store";
import Modal from "./Modal";
import { useState } from "react";

const Tooltip = ({ listId, itemId }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const deleteHandler = () => {
    dispatch(todoActions.removeTodo({ listId, itemId }));
    setTooltipOpen(false);
  };

  const setDateHandler = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
    dispatch(todoActions.addDueDate({ listId, itemId, dueDate: value }));
    console.log(value);
  };

  return (
    <div>
      <Popup
        trigger={
          <MoreVertIcon className="mx-1 text-gray-400 hover:text-black" />
        }
        position="right center"
        on="hover"
        closeOnDocumentClick
        arrow
        onOpen={() => setTooltipOpen(true)}
        onClose={() => setTooltipOpen(false)}
        open={tooltipOpen}
      >
        <button
          className="border border-red-600 w-full flex justify-start m-0 h-[30px] hover:bg-gray-100 items-center"
          onClick={setDateHandler}
        >
          <CalendarMonthIcon className="mx-1 mr-2" fontSize="small" />
          Set due date
        </button>
        <button
          className="border border-red-600 w-full flex justify-start m-0 h-[30px] hover:bg-gray-100 items-center"
          onClick={deleteHandler}
        >
          <DeleteIcon className="mx-1 mr-2" fontSize="small" />
          Delete item
        </button>
      </Popup>
      <Modal
        open={open}
        selectedValue={selectedValue}
        onClose={handleClose}
        listId={listId}
        itemId={itemId}
      />
    </div>
  );
};

export default Tooltip;
