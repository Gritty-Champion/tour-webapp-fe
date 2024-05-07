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
                Included With Pass
              </li>
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
                FAQs
              </li>
            </ul>
          </div>
          {selectedItem == "pass" ?  (
            <div className="my-2 p-4 bg-grayBG text-black">
        <p className="text-lg w-11/12 mx-auto">Included</p>
        <ul className="list_item flex  w-11/12 gap-10 ml-7  my-3 included_section">
          <div>
            <p className="text-lg flex gap-2 items-center -ml-4">
              {" "}
              <FaCheck />
              ALONG WITH TOUR
            </p>
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
                  <h1 className="text-lg font-medium">
                    Specific Start Date:
                  </h1>
                  <li className="text-sm ">
                    Valid for 48 consecutive hours starting from your selected
                    start date, or time of purchase (if selected start date is
                    the same day as purchase).
                  </li>
                  <h1 className="text-lg font-medium">
                    Flexible Start Date:
                  </h1>
                  <li className="text-sm ">
                    Valid for 48 consecutive hours starting from the time when
                    your tickets are scanned by our staff.
                  </li>
                  <h1 className="text-lg font-medium">All Options:</h1>
                  <li className="text-sm ">
                    Brooklyn Tour, Liberty Cruise (No Sky Deck access, General
                    Admission only), Holiday Lights Tour with Entertaining
                    Host and Night Tour with Entertaining Host are valid for a
                    single ride only and require reservations after purchase.
                  </li>
                </div>
              </div>
            </>
          ) : (

            <div className="faqs_section bg-grayBG">
              <Accordion
                expanded={expandedFaqs === "panel1"}
                onChange={handleChangeFaqs("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    General settings
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam
                    mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expandedFaqs === "panel2"}
                onChange={handleChangeFaqs("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Users
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                    Pellentesque convallis laoreet laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expandedFaqs === "panel3"}
                onChange={handleChangeFaqs("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Advanced settings
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                    Integer sit amet egestas eros, vitae egestas augue. Duis
                    vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expandedFaqs === "panel4"}
                onChange={handleChangeFaqs("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: "33%", flexShrink: 0 }}>
                    Personal data
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                    Integer sit amet egestas eros, vitae egestas augue. Duis
                    vel est augue.
                  </Typography>
                </AccordionDetails>
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
          <div className="">
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
                <div className="flex gap-1 items-center flex-wrap">
                  {" "}
                  <span className="font-medium flex gap-1 items-center">
                    {" "}
                    <FaLocationDot />
                    Departure point:{" "}
                    {realData?.departureStart && realData?.departureStart}
                  </span>{" "}
                  <p className="text-xs">
                    {realData?.departurePoint && realData?.departurePoint}
                  </p>
                  <p className="text-xs">{realData?.tips && realData?.tips}</p>
                </div>
              </div>
              <div className="flex gap-2 items-start w-full">
                {" "}
                <span className="font-medium flex items-center gap-3">
                  {" "}
                  <FaMobileScreenButton />
                  How to board:{" "}
                </span>
                Scan your e-pass, no print-outs needed{" "}
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
