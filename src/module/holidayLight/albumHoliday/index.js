import React, { useState } from "react";
import "./index.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import busimg from "../../../assest/images/img3.jpg";
import { RxCross2 } from "react-icons/rx";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 2,
};

let dammydata = [
  {
    id: 1,
    img: busimg,
    desc: "Rockefeller Christmas Tree 1",
  },
  {
    id: 2,
    img: busimg,
    desc: "Rockefeller Christmas Tree 2",
  },
  {
    id: 3,
    img: busimg,
    desc: "Rockefeller Christmas Tree 3",
  },
  {
    id: 4,
    img: busimg,
    desc: "Rockefeller Christmas Tree 4",
  },
  {
    id: 5,
    img: busimg,
    desc: "Rockefeller Christmas Tree 5",
  },
  {
    id: 6,
    img: busimg,
    desc: "Rockefeller Christmas Tree 6",
  },
  {
    id: 7,
    img: busimg,
    desc: "Rockefeller Christmas Tree 7",
  },
  {
    id: 8,
    img: busimg,
    desc: "Rockefeller Christmas Tree 8",
  },
  {
    id: 9,
    img: busimg,
    desc: "Rockefeller Christmas Tree 9",
  },
  {
    id: 10,
    img: busimg,
    desc: "Rockefeller Christmas Tree 10",
  },
  {
    id: 11,
    img: busimg,
    desc: "Rockefeller Christmas Tree 11",
  },
  {
    id: 12,
    img: busimg,
    desc: "Rockefeller Christmas Tree 12",
  },
  {
    id: 13,
    img: busimg,
    desc: "Rockefeller Christmas Tree 13",
  },
  {
    id: 14,
    img: busimg,
    desc: "Rockefeller Christmas Tree 14",
  },
  {
    id: 15,
    img: busimg,
    desc: "Rockefeller Christmas Tree 15",
  },
  {
    id: 16,
    img: busimg,
    desc: "Rockefeller Christmas Tree 16",
  },
  {
    id: 17,
    img: busimg,
    desc: "Rockefeller Christmas Tree 17",
  },
];
const numberOfItemsToShow = 9;
const slicedData = dammydata.slice(0, numberOfItemsToShow);
// const endItems = dammydata.slice(-numberOfItemsToShow);
// console.log("endItems",endItems);
export const AlbumHoliday = ({realData}) => {
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onclickFunc = (id) => {
    handleOpen();
    let filterData =realData?.galleryImg.filter((value, ind) => ind == id);
    console.log("FilterData", filterData);
    setModalData(filterData);
  };
  return (
    <div className="">
      <div className="album_section">
        <div className="album_one w-full relative">
          {realData?.galleryImg && realData?.galleryImg.map((value, id) => {
            return (
              <>
                <div
                  key={id}
                  onClick={() => onclickFunc(id)}
                  className="relative"
                >
                  <img src={value} alt="busimg" />
                  {/* <p>{value.desc}</p> */}
                </div>
              </>
            );
          })}
        </div>
       
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description "
        open={open}
        className="relative"
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
            {modalData.map((value, id) => {
              return (
                <div className="bg-white modal_section" key={id}>
                  <div
                    className="absolute -top-3 -right-3 bg-primary text-white p-2 w-8 h-8 rounded-full cursor-pointer"
                    onClick={handleClose}
                  >
                    <RxCross2 />
                  </div>
                  <img src={value} alt={id} className="w-full" />
                 
                </div>
              );
            })}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
