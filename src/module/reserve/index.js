import React, { useEffect, useState } from "react";
import NY_Logo from "../../assest/images/NY-Logo.png";
import { Checkout } from "../checkout";
import northpool from "../../assest/images/northPool.jpg";
import { BiWorld } from "react-icons/bi";
import { SiFireship } from "react-icons/si";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { FaRegClock, FaRegThumbsUp } from "react-icons/fa";
import "./index.css";
import { ModalForm } from "../../layout/modal/inddex";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
export const ConfirmationForm = ({ data, totalAmount }) => {
  let realData = JSON.parse(localStorage.getItem("realData"));
  let AllPrice = JSON.parse(localStorage.getItem("totalAmount"));
  let [formdata, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    amount: "",
    packageName: "",
  });

  const onChangeFunc = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitFunc = (e) => {
    e.preventDefault();
    if(formdata.firstName.length>0 && formdata.lastName.length>0 && formdata.email.length>0){
      localStorage.setItem("totalAmount",(adultCost + kidCost -couponCost))
      localStorage.setItem("kids",kidPrice)
      localStorage.setItem("formData",JSON.stringify(formdata))
      localStorage.setItem("adults",adultPrice)
      if(couponCost>0){
        localStorage.setItem("coupon","true")
      }
      else{
        localStorage.setItem("coupon","false")
      }
      navigate('/checkout/payment')
    }
  };


  const [discount, setDiscount] = useState(0); // State to hold the discount amount
  const [totalPrice, setTotalPrice] = useState(() => {
    return AllPrice || 0; // Default to 0 if AllPrice is null
  });; // State to hold the total price
  const [isCouponApplied, setIsCouponApplied] = useState(false);

 
  const [couponCode, setCouponCode] = useState('');
  const [couponCost,setCouponCost] = useState(0);
  const handleCouponChange = (event) => {
    setCouponCode(event.target.value);
    console.log("Handle Coupon Code",event.target.value);
  };

  // Function to handle coupon code input change
 
  let [adultPrice, setAdultPrice] = useState(0);
  let [kidPrice, setkidPrice] = useState(0);
  const [adultCost, setAdultCost] = useState(0); // Initial price for adults
  const [kidCost, setKidCost] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [expanded, setExpanded] = useState(false);
  let [timeid, setTimeId] = useState(1);
  let [weekDay, setWeekDay] = useState("");
  let [url, setURl] = useState(false);
  let [sectionUrl, setSectionUrl] = useState(false);

  let navigate = useNavigate();

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


  useEffect(() => {
    let urlData = ["hop-on-hop-off-harlem-tour", "hop-on-hop-off-uptown-tour"];
    const currentPath = window.location.pathname.split("/").pop();
    console.log("currentPath", currentPath);
    let resp = urlData.includes(currentPath);
    console.log("resp", resp);
    setURl(resp);
    applyCoupon()
  });
  useEffect(()=>{
    if(localStorage.getItem("kids")){ 
    let kidsNum = Number(localStorage.getItem("kids"))
    setkidPrice(kidsNum) 
    setKidCost(kidsNum*Number(realData.childPirce))
    localStorage.removeItem("kids")
    }
    if(localStorage.getItem("adults")){
     let adultsNum = Number(localStorage.getItem("adults"))
     setAdultPrice(adultsNum)
     setAdultCost(adultsNum*Number(realData?.adultPrice))
     localStorage.removeItem("adults")
    }
  })

  let urlSection = window.location.pathname.split("/").pop();
  console.log("urlSection", urlSection);
  // setSectionUrl(urlSection);

  // Function to apply coupon and fetch discount from API
  const applyCoupon = () => {
    if(couponCode=="WINTER"){
      setCouponCost((((kidCost+adultCost)*20)/100).toFixed(2));
    }
    else{
      setCouponCost(0)
    }
  };
  return (
    <div className="confirmation_section w-full bg-white h-full h-screen">
      <div className="shadow-boxShadowHeader bgColor">
        <header className="w-4/5 mx-auto">
          <img src={NY_Logo} alt="ny_logo" className="w-40" />
        </header>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="">
          {" "}
          <div className="nested_section_confirm w-4/5 mx-auto my-10">
            <div className="form-section shadow-boxShadowHeader p-8 rounded-2xl">
              <h2 className="text-center text-xl py-4">
                Enter Your Info to Proceed
              </h2>
              <form
                className="flex flex-col w-full gap-4"
                onClick={onSubmitFunc}
              >
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={onChangeFunc}
                  className="bg-transparent h-12 max-h-12 rounded-md p-4 border-gray-400 border-border_width	border-solid"
                  required
                />
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={onChangeFunc}
                  className="bg-transparent h-12 max-h-12 rounded-md p-4 border-gray-400 border-border_width	border-solid"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={onChangeFunc}
                  className="bg-transparent h-12 max-h-12 rounded-md p-4 border-gray-400 border-border_width	border-solid"
                  required
                />
                {/* <Checkout formdata={formdata} setFormData={setFormData} /> */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-primary text-white border-primary outline-none text-lg text-center h-12"
                >
                  Proceed To Checkout
                </button>
              </form>
            </div>
          </div>
        </div>

        <div class="">
          <div className="nested_section_confirm my-10 pb-5">
            <div className="form-section shadow-boxShadowHeader px-4 rounded-2xl">
              <h2 class="text-center text-xl font-normal font-weight-600 text-gray-600 text-base md:text-xl lg:text-xl py-4">
                Order Details
              </h2>
              <div className=" pricing_info py-5">
                <div className="card_pricing w-full relative">
                  <div className="sticky top-0 mb-4">
                    <div className="nested_card_pricing text-black ">
                      <h1 className="text-center">{realData?.heading}</h1>
                      <div className="extra_feature flex gap-3 items-center justify-between my-3">
                        <div className="flex flex-col items-center px-1 w-full">
                          <BiWorld color="blue" />
                          <p className="text-xs text-center py-1">
                            Most Iconic Tour
                          </p>
                        </div>

                        <div className="text-primary flex flex-col items-center px-1 w-full">
                          <SiFireship />
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
                            <div className="date_picker my-2 w-full"></div>
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
                                              value.id === timeid
                                                ? "time_active"
                                                : ""
                                            }`}
                                          >
                                            {" "}
                                            <button
                                              type="button"
                                              className="w-full"
                                            >
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
                                    onClickFuncAdultDecrement(
                                      realData?.adultPrice
                                    )
                                  }
                                  className="cursor-pointer"
                                >
                                  -
                                </div>
                                <div>{adultPrice}</div>
                                <div
                                  onClick={() =>
                                    onClickFuncAdult(realData?.adultPrice)
                                  }
                                  className="cursor-pointer"
                                >
                                  +
                                </div>
                              </div>
                            </div>
                            <div className="adults flex items-center justify-between my-2">
                              <h1 className="w-full relative">
                                Kids <br />{" "}
                                <span className="absolute top-4 text-xs">
                                  {" "}
                                  (age 4-12)
                                </span>
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
                                    onClickFuncKidDecrement(
                                      realData?.childPirce
                                    )
                                  }
                                  className="cursor-pointer"
                                >
                                  -
                                </div>
                                <div>{kidPrice}</div>
                                <div
                                  onClick={() =>
                                    onClickFuncKid(realData?.childPirce)
                                  }
                                  className="cursor-pointer"
                                >
                                  +
                                </div>
                              </div>
                            </div>
                           
                             
                              <div className="flex m-5">
                                <div>
                                  <label htmlFor="couponCode">
                                    Coupon Code:
                                  </label>
                                  <input
                                    type="text"
                                    id="couponCode"
                                    value={couponCode}
                                    className="bg-transparent h-8 max-h-12 rounded-md p-4 border-gray-400 border-border_width	border-solid"
                                    onChange={handleCouponChange}
                                  />
                                </div>
                               
                                </div>
                            
                            <div className="text-base text-end my-2">
                              <p>
                                {" "}
                                Total: ${adultCost + kidCost -couponCost}{" "}
                                <span className="text-xs">+ fees</span>
                              </p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
