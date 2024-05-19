import React, { useState } from "react";
import "./index.css";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import northpool from "../../../assest/images/north_pool.jpg";
import { FaCheck } from "react-icons/fa6";
import { AlbumHoliday } from "../albumHoliday";
import { FaRegCalendarDays } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { LuClock9 } from "react-icons/lu";
import { FaMobileScreenButton } from "react-icons/fa6";
import map from "../../../assest/images/map.png";
import nightmap from '../../../assest/images/black.jpg'


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));




export const HolidayInfoSection = ({ realData }) => {



  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [selectedItem, setSelectedItem] = useState("pass");

  const [expandedFaqs, setExpandedFaqs] = useState(false);

  const handleChangeFaqs = (panel) => (event, isExpanded) => {
    setExpandedFaqs(isExpanded ? panel : false);
  };


  
  return (
    <div className="w-8/12 holiday_info">
      <div className="info_section w-full bg-grayBG p-4">
        <div className="nested_info_section w-full text-black">
          <div className="">
            <h1 className="text-left text-2xl py-2">The Experience</h1>
            {realData?.description &&
              realData?.description.map((value) => {
                return <p className="text-sm my-2">{value}</p>;
              })}
          </div>
        </div>
      </div>{" "}


      <div className="p-3 box_section flex flex-col my-2">
      <div className="links_included text-black">
            <ul className="flex flex-row justify-between items-center">
              <li
                onClick={() => setSelectedItem("pass")}
                className={
                  selectedItem === "pass"
                    ? "selected py-3 w-full text-center cursor-pointer"
                    : "py-3 w-full text-center"
                }
              >
Sites & Attractions              </li>
              <li
                onClick={() => setSelectedItem("tickets")}
                className={
                  selectedItem === "tickets"
                    ? "selected py-3 w-full text-center cursor-pointer"
                    : "py-3 w-full text-center"
                }
              >
                Tickets
              </li>
              <li
                onClick={() => setSelectedItem("details")}
                className={
                  selectedItem === "details"
                    ? "selected py-3 w-full text-center cursor-pointer"
                    : "py-3 w-full text-center"
                }
              >
                Map
              </li>
            </ul>
          </div>
          {selectedItem == "pass" ?  (
            <div className="my-2 p-4 bg-grayBG text-black">
        {/* <p className="text-lg w-11/12 mx-auto">Included</p> */}
        <ul className="list_item flex  w-11/12 gap-10 ml-7  my-3 included_section">
          <div>
            {Array.isArray(realData?.includes) &&
              realData.includes.map((value) => (
                <li className="ml-5" key={value}>
                  {value}
                </li>
              ))}
          </div>
        </ul>
        <div className="flex gap-0 flex-wrap">
          {Array.isArray(realData?.additionalInludes) &&
            realData.additionalInludes.map((value) => (
              <li className="ml-5" key={value}>
                {value}
              </li>
            ))}
        </div>
      </div>
          ) :   selectedItem == "tickets" ? (
            <>
              <div className="main_ticket w-full p-4 bg-white text-black">
                <div className="nested_tickets">
                <li className="text-sm ">
                  Once you start using your Hop on Hop off tour ticket, it will be valid for a specific duration. This means that from the moment you first board the bus and activate your ticket, you can enjoy unlimited rides and hop on and off at any stop within the designated time frame.
                  </li>
                  <li className="text-sm ">
                  For example, if you purchase a 24-hour ticket and begin using it at 10:00 AM, you will have access to the tour buses until 10:00 AM the following day.
                  During this period, you can explore Downtown NYC at your own pace, getting off at any stop that catches your interest and rejoining the tour whenever you're ready.

                  </li>
                 
                  <li className="text-sm ">
                  If you purchase a single day ticket, your ticket is only valid for the same day irrespective of when you commence its use.
                  </li>
                  <li className="text-sm ">
                  Tickets for boat cruises are valid only for single entry.
                  </li>
                  <li className="text-sm ">
                  Customers are required to purchase a minimum of two drinks of their choice in addition to the purchase of comedy tickets.
                  </li>
                  <li className="text-sm ">
                  Please keep in mind that the validity period of your ticket starts from the moment of your first usage. So, make the most of your time and take full advantage of the flexibility and convenience offered by our Hop on Hop off tour.
                  </li>
                </div>
              </div>
            </>
          ) : (

            <div className="faqs_section bg-grayBG">
            <Accordion
              onChange={handleChangeFaqs("panel1")}
            >{ realData?.heading === "Night Tour (Black Line)" ? 
            <img src={nightmap} alt="MAP" /> : 
            <img src={map} alt="MAP" /> 
        }
                
            </Accordion>
          </div>
          )} 
      

      </div>




      <div className="my-2 p-4 bg-grayBG text-black album_amazaing">
        <h1 className="text-left text-2xl py-2">Amazing Photo Ops</h1>
        <AlbumHoliday realData={realData} />
      </div>
      <div className="info_section w-full bg-grayBG p-4 my-4">
        <div className="nested_info_section w-full text-black">
          <div className="text-sm">
            <h1 className="text-left text-2xl py-2">Boarding Info</h1>
            <div className="flex items-start justify-between flex-col my-2 gap-4 w-full">
              <div className="w-full">
                {" "}
                <div className="flex gap-2">
                  <span className="font-medium flex gap-1 items-center">
                    {" "}
                    <FaRegCalendarDays /> Dates:
                  </span>{" "}
                  Frequent departures daily
                </div>
                <div className="items-center">
                  {" "}
                  <span className="font-medium flex gap-1 items-center">
                    {" "}
                    <FaLocationDot />
                    Departure point:{" "}
            
                  </span>{" "}
                 
                  <p className="text-xs">
                    {realData?.departurePoint}
                  </p>
                  <p className="text-xs">{realData?.tips}</p>
                </div>
              </div>
              <div className="flex gap-2 items-start w-full">
                {" "}
                <span className="font-medium flex items-center gap-3">
                  {" "}
                  <FaMobileScreenButton />
                  How to board:{" "}
                </span>
                Bring your e-ticket, voucher, reservation in paper or electronic form on your phone or other devices for validation and enjoy an unforgettable adventure
              </div>
            </div>
            <div className="flex justify-between gap-4  flex-col items-start w-full">
              <div className="w-full">
                <div className="flex gap-2 items-center">
                  <span className="font-medium flex gap-1 items-center">
                    <FaUserLarge /> Departure Time:{" "}
                  </span>{" "}
                  Frequent departures
                </div>
                <div className="text-sm">
                  <p>
                    <span className="font-medium"> {realData?.weekDay} </span>{" "}
                    {realData?.weekDayTime}
                  </p>
                  <p>
                    <span className="font-medium">
                      {" "}
                      {realData?.specificDay}{" "}
                    </span>{" "}
                    {realData?.specificTime}
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-center flex-wrap gap-2 w-full">
                <span className="font-medium flex items-center gap-2">
                  <LuClock9 />
                  Complete trip duration:{" "}
                </span>{" "}
                {realData?.howToBoard &&
                  realData?.howToBoard.map((value) => {
                    return <p className="text-xs my-0 py-0">{value}</p>;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};


