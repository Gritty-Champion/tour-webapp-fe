import React, { useEffect, useState } from "react";
import { Footer, Header } from "../../layout";
import { HolidayTourGallery } from "../../module/holidayLight/galleryHoliday";
import { HolidayInfoSection } from "../../module/holidayLight/holidayInfo";
import { HolidayPricingSection } from "../../module/holidayLight/pricingSection";
import {
  dammyDataSingleBus,
  dammyDataDoubleBus,
  dammyDataIconic,
} from "../../data/packages";

export const HolidayTour = ({ data, getnamePackages, setTotalAmount,packages,category }) => {
  console.log(data);
  let [realData, setReadlData] = useState([]);

  useEffect(() => {
    if (data == null || !data) {
      console.log("inide null Data");
      let linkValue = localStorage.getItem("link");
      // let filterData=dammyDataSingleBus.filter(value => value.uniqueId === linkValue);
      // console.log(filterData, linkValue);
      // setReadlData(filterData);

      let foundData = null;

      // // Check if uniqueValue exists in dammyDataSingleBus
      // foundData = dammyDataSingleBus.find(
      //   (item) => item.uniqueId === linkValue
      // );

      // // If not found in dammyDataSingleBus, check in doublePackages
      // if (!foundData) {
      //   foundData = dammyDataDoubleBus.find(
      //     (item) => item.uniqueId === linkValue
      //   );
      // }

      // // If still not found, check in iconicPackages
      // if (!foundData) {
      //   foundData = dammyDataIconic.find((item) => item.uniqueId === linkValue);
      // }
      console.log("Link Value---->",linkValue);
      
      foundData= packages.filter((pack) => pack?.packageLabel==linkValue)
      console.log("Found Data",foundData);
      if (foundData) {
        // If found, set the data
        setReadlData(foundData[0]);
        // Optionally, perform other actions based on the found data
      } else {
        // Handle the case where the uniqueValue is not found in any array
        console.log("Unique value not found in any array");
      }
    } 
    else {

      let foundData = null;
      foundData= packages.filter((pack) => pack?.packageLabel==data)
      console.log("Found Data",foundData);
      if (foundData) {
        // If found, set the data
        setReadlData(foundData[0]);
        // Optionally, perform other actions based on the found data
      } else {
        // Handle the case where the uniqueValue is not found in any array
        console.log("Unique value not found in any array");
      }
    }
  }, [data]);
  console.log(realData, "realData");

  return (
    <div className="">
      <div className="fixed w-full z-50 bg-white">
      <Header getnamePackages={getnamePackages} packages={packages} category={category}/>
      </div>
      <div className="absolute top-20 mt-6 w-full text-white">
        <HolidayTourGallery realData={realData} />
        <div className="w-4/5 mx-auto flex gap-5 justify-between two_section_data">
          <HolidayInfoSection realData={realData} />
          <HolidayPricingSection realData={realData} setTotalAmount={setTotalAmount} />
        </div>
        <Footer getnamePackages={getnamePackages} packages={packages}/>
      </div>
    </div>
  );
};
