import React from "react";
import "./index.css";
import Appstore from "../../../assest/images/Appstore.png";
import googleplay from "../../../assest/images/googleplay.png"
import happyCustomer from "../../../assest/images/happyCustomer.jpeg";

export const InfoSection = () => {
  return (
    <div className="w-full bg-sectionColor py-4">
      <div className="w-4/5 mx-auto flex gap-10 my-6 items-center">
        <div className="img_section_info">
           <img src={happyCustomer} alt="happyCustomer" className="w-full rounded-xl" />
        </div>
        <div className="content_info text-black">
          <h1 className="text-4xl font-medium my-3">
            Make Your Adventure <span> Easier</span>{" "}
          </h1>
          <p className="py-4 pb-6 text-base">
            Our Hop-on Hop-off service is here to make your adventure easier and
            more enjoyable than ever before. With our convenient and flexible
            transportation system, you can navigate the city with ease and
            customize your itinerary to suit your preferences with our app.
          </p>
          <div className="flex gap-4 items-center justify-start">
              <img src={googleplay} alt="googleplay" className="w-32"/> 
              <img src={Appstore} alt="appStore" className="w-32"/> 
          </div>
        </div>
      </div>
    </div>
  );
};