import React,{useState} from 'react'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { RxCross2 } from "react-icons/rx";
import hoponHoOFF from "../../../assest/images/Hop-on-Hop-off-3.jpg";
import "../index.css";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: "50%",
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    // boxShadow: 24,
    p: 4,
  };

export  const MainPageModal = () => {
    const [open, setOpen] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className='main_modal_page'>
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
          <div className='nested_private_form relative'>
            <div className='absolute top-1 right-1 bg-primary text-xl text-white rounded-full p-1 cursor-pointer' onClick={handleClose}>
            <RxCross2 />             
            </div>
          <div>
                <img src={hoponHoOFF} alt='hoponHoOFF'/>
          </div>
              <div className='my-2 flex flex-col justify-center w-full items-center'>
                 <h1 className='text-center text-black text-3xl font-bold'>Why Hop-Off When You Can Hop-On?</h1>
                 <h2 className='text-center text-primary text-4xl font-bold'>GET 25% OFF YOUR TICKET</h2>
                 <button className='btn_coupon flex justify-center w-64 my-2'>COUPON: WINTER</button>
              </div>
       </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

