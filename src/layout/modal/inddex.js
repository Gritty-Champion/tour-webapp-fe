import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import { RxCross2 } from "react-icons/rx";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs"; // Import Day.js

import "./index.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "50%",
  // bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  p: 4,
};

export const ModalForm = ({ open, handleClose }) => {
  const today = dayjs(); // Get today's date using Day.js

  const shouldDisableMonth = (startDate) => {
    const startOfMonth = dayjs(startDate).startOf("month");
    const startOfCurrentMonth = today.startOf("month");
    return startOfMonth.isBefore(startOfCurrentMonth);
  };
  const isAfterToday = (selectedDate) => {
    return dayjs(selectedDate).isBefore(today, 'day'); // Compare if the selected date is before today
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div className="nested_private_form relative">
              <div
                className="absolute top-4 right-4 bg-primary text-xl text-white rounded-full p-1 cursor-pointer"
                onClick={handleClose}
              >
                <RxCross2 />
              </div>
              <form className="">
                <h1 className="text-2xl text-center py-4">Send A Message</h1>
                <div className="my-2">
                  <input
                    type="text"
                    placeholder="Organization/Company"
                    className="py-2"
                  />
                </div>
                <div className="my-2">
                  <input
                    type="text"
                    placeholder="Number of Guests"
                    className="py-2"
                  />
                </div>
                <div className="my-2">
                  <input type="email" placeholder="Email" className="py-2" />
                </div>
                <div className="my-2">
                  <input type="number" placeholder="Phone" className="py-2" />
                </div>
                <div className="my-2 flex justify-between gap-4">
                  <input type="text" placeholder="Pick-up Location" className="py-2" />
                  <div className="w-full date_picker_modal">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["DatePicker"]}>
                        <DatePicker label="Pick Up Date" shouldDisableDate={isAfterToday}  shouldDisableMonth={shouldDisableMonth} />
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>

                <div className="my-2">
                  <textarea cols={"5"} placeholder="Additonal Requests" />
                </div>
                <div className="my-2">
                  <button
                    type="submit"
                    className="bg-primary w-full rounded-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
