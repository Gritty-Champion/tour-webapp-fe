import React, { useEffect, useState } from "react";
import "./index.css";
import BannerVideo from "../../../assest/images/banner.mp4";
import bannerImg from "../../../assest/images/img3.jpg";
import { NavLink } from "react-router-dom";
import { baseFileUrl } from "../../../config/constant";
export const BannerSection = ({homeData}) => {
  const imageUrl = `${baseFileUrl}${homeData?.bannerImageUrl}`;
  const [videoURL, setVideoURL] = useState('');

  useEffect(() => {
    // Ensure homeData and baseFileUrl are defined and log the constructed URL
    if (baseFileUrl && homeData?.bannerVideoUrl) {
      const url = `${baseFileUrl}${homeData.bannerVideoUrl}`;
      console.log("Constructed Video URL:", url);
      setVideoURL(url);
    }
  }, [baseFileUrl, homeData]);
  return (
    <div className="banner_section relative w-full">
      <div className="img_section">
        <img src={imageUrl} alt="img_section" />
      </div>
      <div className="nested_banner_section">
        <video width="100%" autoplay="true" loop muted src={videoURL} type="video/mp4">
        </video>
        <div className="banner_heading flex justify-center flex-col gap-4 items-center h-full absolute w-full top-0 text-black">
          <h1 className="text-white text-4xl font-bold w-4/5 mx-auto text-center">
            {homeData?.bannerWhiteText1} 
            <span className="text-primary"> {homeData?.bannerOrangeText}</span> {homeData?.bannerWhieText2}
          </h1>
          <NavLink to={"/tour"}   className="py-2 px-4  bg-primary text-white rounded-md">
           {homeData?.bannerButton}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
