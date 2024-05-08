import React, { useEffect, useLayoutEffect, useState } from "react";
import "./index.css";
import { BiWorld } from "react-icons/bi";
import { SiFireship } from "react-icons/si";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import iconDownload from "../../../assest/images/icon-phone-hand-download-app.svg";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import dayjs from "dayjs"; // Import Day.js
import { FaRegClock } from "react-icons/fa6";
import { ModalForm } from "../../../layout/modal/inddex";
import { useNavigate } from "react-router-dom";
let timeData = [
  {
    id: 1,
    timeValue: "8:00 AM",
  },
  {
    id: 2,
    timeValue: "10:00 AM",
  },
  {
    id: 3,
    timeValue: "12:00 PM",
  },
  {
    id: 4,
    timeValue: "2:00 PM",
  },
  {
    id: 5,
    timeValue: "4:00 PM",
  },
  {
    id: 6,
    timeValue: "6:00 PM",
  },
];



export const HolidayPricingSection = ({ realData,setTotalAmount }) => {
  let [adultPrice, setAdultPrice] = useState(0);
  let [kidPrice, setkidPrice] = useState(0);
  const [adultCost, setAdultCost] = useState(0); // Initial price for adults
  const [kidCost, setKidCost] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [expanded, setExpanded] = useState(false);
  let [timeid, setTimeId] = useState(1);
  let [weekDay, setWeekDay] = useState("");
  let [url, setURl]=useState(false);
   let [sectionUrl, setSectionUrl]=useState(false);


  let navigate=useNavigate();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onClickFuncAdult = (selectedPirce) => {
    // Increment adult ticket price by 1 and ensure it doesn't go below 0
    setAdultPrice((prevPrice) => Math.max(prevPrice + 1, 0));
    setAdultCost((prevPrice) => prevPrice + Number(selectedPirce));
  };
  const onClickFuncAdultDecrement = (selectedPrice) => {
    // Decrement adult ticket price by 1 and ensure it doesn't go below 0
    setAdultPrice((prevPrice) => Math.max(prevPrice - 1, 0));
    setAdultCost((prevPrice) => Math.max(prevPrice - Number(selectedPrice), 0));
  };
  const onClickFuncKid = (selectedCost) => {
    // Increment kid ticket price by 1 and ensure it doesn't go below 0
    setkidPrice((prevPrice) => Math.max(prevPrice + 1, 0));
    setKidCost((prevPrice) => prevPrice + Number(selectedCost));
  };
  const onClickFuncKidDecrement = (selectedCost) => {
    // Decrement kid ticket price by 1 and ensure it doesn't go below 0
    setkidPrice((prevPrice) => Math.max(prevPrice - 1, 0));
    setKidCost((prevPrice) => Math.max(prevPrice - Number(selectedCost), 0));
  };

  const today = dayjs(); // Get today's date using Day.js

  // Define a function to check if the selected date is after today
  const isAfterToday = (date) => {
    const dayOfWeek = dayjs(date).day(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    return dayOfWeek !== 1 && dayOfWeek !== 3 && dayOfWeek !== 2;
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleDaySelect = (day) => {
    setWeekDay(day);
    if (day === "Monday") {
      setTimeId(3); // Set timeid to 3 for "12:00 PM" when Monday is selected
    } else if (day == "Tuesday") {
      setTimeId(4); // Set timeid to 3 for "12:00 PM" when Monday is selected
    } else if (day == "Wednesday") {
      setTimeId(2);
    } else {
      setTimeId(null); // Reset timeid if another day is selected
    }
  };
  const getIdTime = (id) => {
    if (weekDay === "Monday" && timeid === 3) {
      return;
    } else if (weekDay === "Tuesday" && timeid === 4) {
      return;
    } else if (weekDay === "Wednesday" && timeid === 2) {
      return;
    }
    setTimeId(id);
  };

  const handleDateChange = (date) => {
    // console.log(new Date(date.$d));

    let dates = new Date(date.$d);
    const options = { weekday: "long" };
    const weekday = dates.toLocaleDateString("en-US", options);
    // setWeekDay(weekday);
    handleDaySelect(weekday);
    setSelectedDate(date);
  };
  const shouldDisableMonth = (startDate) => {
    const startOfMonth = dayjs(startDate).startOf("month");
    const startOfCurrentMonth = today.startOf("month");
    return startOfMonth.isBefore(startOfCurrentMonth);
  };
  // console.log("selectedDate", selectedDate);
  
  useEffect(() =>{
    let urlData = ["hop-on-hop-off-harlem-tour", "hop-on-hop-off-uptown-tour"];
    const currentPath = window.location.pathname.split("/").pop();
    console.log("currentPath",currentPath);  
    let resp = urlData.includes(currentPath);
    console.log("resp", resp);
    setURl(resp);
  });
  

  let urlSection = window.location.pathname.split("/").pop();
  console.log('urlSection', urlSection);
  // setSectionUrl(urlSection);

  const getTotalAmount=() =>{
       console.log(adultCost , kidCost);
    setTotalAmount(adultCost + kidCost)
    navigate("/reserve/confirm");
  }


  return (
    <div className="w-2/5 pricing_info">
      <div className="card_pricing w-full relative">
        <div className="sticky top-0 mb-4">
          <div className="nested_card_pricing text-black ">
            <h1 className="text-center">{realData?.heading}</h1>
            <div className="extra_feature flex gap-3 items-center justify-between my-3">
              <div className="flex flex-col items-center px-1 w-full">
                <BiWorld color="blue" />
                <p className="text-xs text-center py-1">Most Iconic Tour</p>
              </div>

              <div className="text-primary flex flex-col items-center px-1 w-full">
                <SiFireship  />
                <p className="text-xs text-center py-1">
                  103 + bought in past 24 hours
                </p>
              </div>
              <div className="flex flex-col items-center px-1 w-full">
                <div className="flex gap-1 items-center star_section">
                  <MdOutlineStar color="#ffc107" />
                  <MdOutlineStar color="#ffc107" />
                  <MdOutlineStar color="#ffc107" />
                  <MdOutlineStar color="#ffc107" />
                  <MdOutlineStarBorder />
                </div>
                <p className="text-xs text-center py-1">4.0 Stars</p>
              </div>
            </div>
            <div className="my-4">
              <h1 className="text-center">
                Choose either Specific or Flexible Date:
              </h1>
              {url == true ? (
                <>
                  <div className="date_picker my-2 w-full">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        label="Choose a departure:"
                        shouldDisableDate={isAfterToday}
                        shouldDisableMonth={shouldDisableMonth}
                      />
                    </LocalizationProvider>
                  </div>
                  <div className="date_picker time_section my-2 w-full">
                    <div>
                      <Accordion
                        expanded={expanded === "panel1"}
                        onChange={handleChange("panel1")}
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1bh-content"
                          id="panel1bh-header"
                        >
                          <Typography
                            sx={{ width: "100%", flexShrink: 0 }}
                            display={"flex"}
                            alignItems={"center"}
                            gap={"12px"}
                          >
                            <FaRegClock />
                            <span> Select a Departure Time:</span>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails className="h-auto">
                          <div className="times">
                            {timeData.map((value) => {
                              return (
                                <div
                                  key={value.id}
                                  onClick={() => getIdTime(value.id)}
                                  className={`time-card ${
                                    value.id === timeid ? "time_active" : ""
                                  }`}
                                >
                                  {" "}
                                  <button type="button" className="w-full">
                                    {value.timeValue}
                                  </button>{" "}
                                </div>
                              );
                            })}
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}

              {/* <div className="flex_date">
                <div>
                  <p>Flexible Date</p>
                </div>
              </div> */}
              <p className="text-center">
                Activate anytime within 12 months of purchase.
              </p>

              {urlSection == "brooklyn-express-tour" ? (
                 <div className="btn_buyNow my-2">
                  <button type="button" onClick={handleOpen}>
                  Buy Now
                </button>
                </div>
              ) : (
                <div className="diff_pricing">
                <div className="adults flex items-center justify-between my-2">
                  <h1 className="w-full">Adults</h1>
                  <div className="flex gap-3 w-full">
                    {/* <del className="text-xs">$124</del>{" "} */}
                    <p className="text-2xl text-red-500">
                      ${realData?.adultPrice}
                    </p>
                  </div>
                  <div className="quantity w-full flex items-center justify-between px-5">
                    <div
                      onClick={() =>
                        onClickFuncAdultDecrement(realData?.adultPrice)
                      }
                      className="cursor-pointer"
                    >
                      -
                    </div>
                    <div>{adultPrice}</div>
                    <div
                      onClick={() => onClickFuncAdult(realData?.adultPrice)}
                      className="cursor-pointer"
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="adults flex items-center justify-between my-2">
                  <h1 className="w-full relative">
                    Kids <br />{" "}
                    <span className="absolute top-4 text-xs"> (age 4-12)</span>
                  </h1>
                  <div className="flex gap-3 w-full">
                    {/* <del className="text-xs">$124</del>{" "} */}
                    <p className="text-2xl text-red-500">
                      ${realData?.childPirce}
                    </p>
                  </div>
                  <div className="quantity w-full flex items-center justify-between px-5">
                    <div
                      onClick={() =>
                        onClickFuncKidDecrement(realData?.childPirce)
                      }
                      className="cursor-pointer"
                    >
                      -
                    </div>
                    <div>{kidPrice}</div>
                    <div
                      onClick={() => onClickFuncKid(realData?.childPirce)}
                      className="cursor-pointer"
                    >
                      +
                    </div>
                  </div>
                </div>
                <div className="text-base text-end my-2">
                  <p>
                    {" "}
                    Total: ${adultCost + kidCost}{" "}
                    <span className="text-xs">+ fees</span>
                  </p>
                </div>
                <div className="btn_buyNow">                  
                    <button type="button" disabled={adultCost == 0 && kidCost == 0} onClick={getTotalAmount}>
                      Buy Now
                    </button>
                </div>
              </div>
              )}




            
            </div>
          </div>

          {/* <div className="text-black p-2 other_section_holiday my-4">
            <div>
              <h1 className="text-lg text-center py-2 my-3">
                Easy Boarding Process
              </h1>
              <p className="flex items-start gap-4">
                <img src={iconDownload} alt="iconDownload" width={"40px"} />
                Board buses & cruises, access attractions, and track live bus
                arrival times with one app.
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <ModalForm open={open} handleClose={handleClose} />
    </div>
  );
};
