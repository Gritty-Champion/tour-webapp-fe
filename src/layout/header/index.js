import React, { useState } from "react";
import "./index.css";
import { NY_Logo } from "../../assest";
import Menu from "@mui/material/Menu";
import { MdArrowDropDown } from "react-icons/md";

import Fade from "@mui/material/Fade";
import { ToggleSidebars } from "../sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, IconButton, Tooltip } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

export const Header = ({ getnamePackages }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElMoreOptions, setAnchorElMoreOptions] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // more optiosn menu bar
  const openMoreOptions = Boolean(anchorElMoreOptions);
  const handleClickMoreOptions = (event) => {
    setAnchorElMoreOptions(event.currentTarget);
  };
  const handleCloseMoreOptions = () => {
    setAnchorElMoreOptions(null);
  };
  
  // const handleLoginClick = () => {
  //   navigate("/signin"); 
  // };

  return (
    <div className="relative">
      {/* <div className="fixed z-50 w-full"> */}
      <div className="header_section w-full h-16">
        <div className="nested_header_section w-4/5 mx-auto py-2 h-full flex justify-between items-center">
          <div className="sidebar_section">
            <ToggleSidebars getnamePackages={getnamePackages} />
          </div>
          <div className="header_img">
            <NavLink to={"/"}>
              <img src={NY_Logo} alt="NY_Logo" className="w-36" />
            </NavLink>
          </div>
          <div className="links flex items-center gap-2">
            <ul className="flex items-center  gap-6">
              <li
                onClick={handleClick}
                onMouseOver={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                className="flex items-center cursor-pointer"
              >
                Tickets & Packages <MdArrowDropDown className="text-2xl" />
              </li>
              <li onClick={() => getnamePackages("night-tour")}>Night Tour</li>
              {/* <li>
                {" "}
                <NavLink to="/iconic-holiday-lights"> Holiday Lights</NavLink>
              </li> */}
              <li
                className="py-1 cursor-pointer"
                onClick={() => getnamePackages("Hop-on-Hop-off-downtown-tour")}
              >
                Hop-on Hop-off All City Tour (Red Line)
              </li>
              {/* <li>How To Use My Tour Ticket</li> */}
              <li
                id="fade-button"
                aria-controls={openMoreOptions ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openMoreOptions ? "true" : undefined}
                onClick={handleClickMoreOptions}
                className="flex items-center cursor-pointer"
              >
                More Options <MdArrowDropDown className="text-2xl" />
              </li>
            </ul>
            <button className="py-2 px-4  bg-primary text-white rounded-3xl">
              <NavLink to={"/tour"}> Buy Tickets</NavLink>
            </button>

            {/* <Box sx={{ display: "flex", flex: 1,alignItems: "center" , backgroundColor:"red" }}> */}
            {/* <Tooltip title="Login" arrow>
              <IconButton sx={{color : "black"}} onClick={handleLoginClick}>
              <LoginIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
              </Tooltip> */}
            {/* </Box> */}

          </div>
        </div>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          className="first_menu_section"
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                left: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "left", vertical: "top" }}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        >
          <div className="flex justify-between items-center value_section">
            <div className="flex flex-col p-4">
              <h1>Hop-On Hop-off Tour</h1>
              <ul className="text-xs my-2">
                <li
                  className="py-1 cursor-pointer"
                  onClick={() =>
                    getnamePackages("Hop-on-Hop-off-downtown-tour")
                  }
                >
                  Hop-on Hop-off All City Tour (Red Line)
                </li>
                {/* <li className="py-1 cursor-pointer">
                  <NavLink to="/downtown-liberty-cruise-same-day">
                    Downtown Liberty Cruise
                  </NavLink>
                </li> */}
                {/* <li
                  className="py-1 cursor-pointer"
                  onClick={() => getnamePackages("hop-on-hop-off-harlem-tour")}
                >
                   Harlem Tour
                </li> */}
              </ul>
              <div>
                {/* <h1 style={{ fontSize: "24px" }}>Hop-On Hop-off Tour</h1> */}
                <ul>
                  <li
                    className="py-1 cursor-pointer !text-xs"
                    onClick={() => getnamePackages("liberty-boat-cruises")}
                  >
                    Liberty boat Cruises
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col p-4">
              <h1> Iconic Access Passes </h1>
              <ul className="text-xs my-2">
                {/* <li
                  className="py-1 cursor-pointer"
                  onClick={() => getnamePackages("1-day-iconic-access-pass")}
                >
                  1 day Iconic Access Pass
                </li> */}
                <li
                  className="py-1 cursor-pointer"
                  onClick={() => getnamePackages("48Hours-iconic-access-pass")}
                >
                  48 Hour Iconic Access Pass
                </li>
                <li
                  className="py-1 cursor-pointer"
                  onClick={() =>
                    getnamePackages("5day-ultimate-unlimited-access-pass")
                  }
                >
                  5 Day Ultimate Unlimited Iconic Access Pass
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col p-4">
              <h1> Express Tours </h1>
              <ul className="text-xs my-2">
                {/* <li
                  className="py-1 cursor-pointer"
                  onClick={() => getnamePackages("brooklyn-express-tour")}
                >
                  Brooklyn Express Tour
                </li> */}
                <li
                  className="py-1 cursor-pointer"
                  onClick={() =>
                    getnamePackages("all-city-iconic-express-tour")
                  }
                >
                  All City Express Tour
                </li>
                <li
                  className="py-1 cursor-pointer"
                  onClick={() => getnamePackages("night-tour")}
                >
                  Night Tour
                </li>
              </ul>
            </div>
          </div>
        </Menu>

        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorElMoreOptions}
          open={openMoreOptions}
          onClose={handleCloseMoreOptions}
          TransitionComponent={Fade}
          className="more_options_section"
        >
          <ul className="text-sm m-2">
            <li className="py-1">
              {" "}
              <NavLink to="/private-hire">Private Charters</NavLink>{" "}
            </li>
            {/* <li className="py-1">
              <NavLink to={"/events"}>
              Sunset & City Lights Cruise
              </NavLink>
              </li> */}
            <li className="py-1">
              {" "}
              <NavLink to={"/contact"}>Contact Us</NavLink>{" "}
            </li>
            <li className="py-1">
              {" "}
              <NavLink to={"/private-hire"}>Group & Charters</NavLink>{" "}
            </li>
            {/* <li className="py-1">
              {" "}
              <NavLink to={"/attraction"}>Things to do in NYC</NavLink>{" "}
            </li> */}
            <li className="py-1">
              {" "}
              <NavLink to={"/faq"}> Frequently Asked Questions</NavLink>
            </li>
            <li className="py-1">
              {" "}
              {/* <NavLink to={"/about-us"}> About Us</NavLink> */}
              <a href="https://newyorkiconiccruises.com/about/" >About Us</a>

            </li>
            <li className="py-1">Live Map</li>
          </ul>
        </Menu>
      </div>
      <div className="w-full h-10 bg-primary text-white">
        <div className="w-4/5 mx-auto py-2 h-full">
          <marquee
            behavior="scroll"
            direction="left"
            className="text-xl font-bold"
          >
            Online Ticket Sales Now On:{" "}
            <a href="#" className="text-yellow-400">
              Online Ticket Sales Now On: Book Now For 20% Discount Using the
              Code SPRING
            </a>{" "}
          </marquee>
        </div>
      </div>
    </div>
    // </div>
  );
};
