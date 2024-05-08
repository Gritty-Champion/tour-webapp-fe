import React from "react";
import "./index.css";
import paypal from "../../assest/images/paypal.png";
import paymaster from "../../assest/images/pay_master.png";
import payDiscover from "../../assest/images/pay_discover.png";
import americanExpress from "../../assest/images/american_express.png";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="w-full bg-bgBlue text-white">
      <div className="w-4/5 mx-auto py-4">
        <div className="link_section my-5">
          <div className="suscribe_section">
            <h1 className="text-2xl">Join Our NewsLetter</h1>
            <p className="text-sm my-2">
              Subscribe to our newsletters to receive prompt updates and
              exciting offers.
            </p>
            <form className="my-2 form_section">
              <div className="flex gap-4 items-center">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
              </div>
              <button className="btn_subscribe">Subscribe</button>
            </form>
          </div>
          <div className="link_section_one">
            <h1 className="text-lg">New York Iconic</h1>
            <ul>
              <li>
                {/* <NavLink to={"/about-us"}>About Us</NavLink> */}
                <a href="https://newyorkiconiccruises.com/about/" >About Us</a>

              </li>
              <li>
                <NavLink to={"/contact"}>Contact Us</NavLink>{" "}
              </li>
              <li>
                <NavLink to={"/faq"}>FAQ</NavLink>{" "}
              </li>
              {/* <li>
                <NavLink to={"/attraction"}>Things To Do In NYC</NavLink>
              </li> */}
            </ul>
          </div>
          <div className="link_section_two">
            <h1 className="text-lg">Helpful Links</h1>
            <ul>
            <li className="py-1"> <NavLink to="/private-hire">Private Hire</NavLink>  </li>
            <li className="py-1">
              {" "}
              <NavLink to={"/iconic-holiday-lights"}>Holiday Lights</NavLink>{" "}
            </li>
            </ul>
          </div>
        </div>

        <div className="bottom_card py-2 flex items-center justify-between">
          <div className="card_icon flex items-center gap-1">
            <img src={paypal} alt="paypal" />
            <img src={paymaster} alt="paymaster" />
            <img src={payDiscover} alt="payDiscover" />
            <img src={americanExpress} alt="americanExpress" />
          </div>
          <div className="link_tab">
            <ul className="flex items-center gap-6">
              <li> <NavLink to="/terms&Condition">  Terms & Conditions</NavLink></li>
              <li> <NavLink to="/privacy-policy"> Privacy Policy</NavLink>  </li>
            </ul>
          </div>
          <div className="socila_icon flex items-center gap-2">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};


