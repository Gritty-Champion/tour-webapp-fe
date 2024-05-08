import React, { useState } from "react";
import "./index.css";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { NY_Logo } from "../../assest";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const ToggleSidebars = ({getnamePackages}) => {
  const [isOpen, setIsopen] = useState(false);
  const [isDropOpen, setIsDropOpen] = useState(false);
  const [isMoreOpen, setMoreOpen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const toggleDropdown = () => {
    setIsDropOpen(!isDropOpen);
  };
  const toggleDropdownMore = () => {
    setMoreOpen(!isMoreOpen);
  };

  return (
    <>
      <div className="container-fluid mt-3">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid p-2">
            <div className="form-inline ml-auto">
              <div className="cursor-pointer" onClick={ToggleSidebar}>
                <GiHamburgerMenu className="text-2xl" />
              </div>
            </div>
          </div>
        </nav>
        <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
          <div className="sd-header">
            {/* <h4 className="mb-0">Sidebar Header</h4> */}
            <img src={NY_Logo} alt="NY_Logo" className="w-36" />
            <div className="cursor-pointer" onClick={ToggleSidebar}>
              <RxCross2 className="text-2xl" />
            </div>
          </div>
          <div className="sd-body">
            <ul>
              <li>
                <a className="sd-link" onClick={() =>
                    getnamePackages("Hop-on-Hop-off-downtown-tour")
                  }>Hop-on Hop-off All city tour Pass (Red Line)</a>
              </li>
              <li>
                <a className="sd-link" onClick={() =>
                    getnamePackages("all-city-iconic-express-tour")
                  }>All city Iconic Express Tour</a>
              </li>
              <div className="pl-0">
              <li>
                <a className="sd-link" onClick={() =>
                    getnamePackages("48Hours-iconic-access-pass")
                  }>48 Hrs Hop on Hop off Iconic Pass</a>
              </li>

              <li>
                <a className="sd-link" onClick={() =>
                    getnamePackages("5day-ultimate-unlimited-access-pass")
                  }>Ultimate Unlimited Access Pass</a>
              </li>
              </div>

              <div className="pl-0">
              <li>
                <a className="sd-link" onClick={() =>
                    getnamePackages("night-tour")
                  }>Night Tour (Black Line)</a>
              </li>

              <li>
                <a className="sd-link" onClick={() =>
                    getnamePackages("times-square-live-commedy-show")
                  }>Time Square Live Comedy Show</a>
              </li>
              </div>

              {/* <div className="pl-0">
              <li>
                <a className="sd-link" onClick={() => getnamePackages("brooklyn-express-tour")}>Brooklyn Express Tour</a>
              </li>
              <li>
                <a className="sd-link" onClick={() => getnamePackages("1-day-iconic-access-pass")}>1 day Iconic Access Pass</a>
              </li>
              </div>
              <li>
              <NavLink className="sd-link" to="/iconic-holiday-lights"> Holiday Lights</NavLink>
              </li>
              <li>
                <a className="sd-link"  onClick={() => getnamePackages("night-tour")}>Night Tours</a>
              </li> */}
              {/* <div className="dropdown">
                <li
                  className="sd-link justify-between items-center"
                  onClick={toggleDropdown}
                >
                  {" "}
                  <div> Holidays Tour</div>{" "}
                  <div>{isDropOpen ? <FaAngleDown /> : <FaAngleRight />}</div>{" "}
                </li>
                {isDropOpen && (
                  <div className="dropdown-content w-full z-50">
                    <li>Iconic Tours</li>
                    <li>Holiday Light Tour</li>
                  </div>
                )}
              </div> */}
              <div className="dropdown">
                <li
                  className="sd-link justify-between items-center"
                  onClick={toggleDropdownMore}
                >
                  More{" "}
                  <div>{isMoreOpen ? <FaAngleDown /> : <FaAngleRight />}</div>
                </li>
                {isMoreOpen && (
                  <div className="dropdown-content w-full">
                    <li>
                      <NavLink to={"/private-hire"}>
                      Group Charters
                      </NavLink>
                      </li>
                    {/* <li>Maps</li> */}
                    {/* <li>
                      <NavLink to="/iconic-holiday-lights">
                      Holiday Lights
                      </NavLink>
                      </li> */}

                    {/* <li>
                    <NavLink to="/attraction">

                      Things to do in NYC
                      </NavLink>
                      </li> */}
                    <li>
                    <NavLink to={"/about-us"}>

                      About Us
                      </NavLink>
                      </li>
                    <li>
                    <NavLink to={"/contact"}>
                      Contact Us
                      </NavLink>

                      </li>
                      <li className="py-1">
              <NavLink to={"/faq"}> Frequently Asked Questions</NavLink>
            </li>
                  </div>
                )}
              </div>
           
              <ul className="social_icons gap-3 my-2">
                <li><FaFacebookF className="text-2xl"/></li>
                <li><FaTwitter className="text-2xl" /></li>
                <li><FaInstagram className="text-2xl" /></li>
              </ul>
            </ul>
          </div>
        </div>
        <div
          className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </>
  );
};


