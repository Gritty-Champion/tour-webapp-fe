import React from "react";
import "./index.css";
import BannerVideo from "../../../assest/images/banner.mp4";
import bannerImg from "../../../assest/images/img3.jpg";
import { NavLink } from "react-router-dom";
export const BannerSection = () => {
  return (
    <div className="banner_section relative w-full">
      <div className="img_section">
        <img src={bannerImg} alt="img_section" />
      </div>
      <div className="nested_banner_section">
        <video width="100%" autoplay="true" loop muted>
          <source src={BannerVideo} type="video/mp4" />
        </video>
        <div className="banner_heading flex justify-center flex-col gap-4 items-center h-full absolute w-full top-0 text-black">
          <h1 className="text-white text-4xl font-bold w-4/5 mx-auto text-center">
            Discover the best of 
            <span className="text-primary"> New York City's</span> wonders at
            your own pace with our hop-on hop-off sightseeing bus tour. Explore
            iconic landmarks at your leisure.
          </h1>
          <NavLink to={"/tour"}   className="py-2 px-4  bg-primary text-white rounded-md">
            Book Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};
