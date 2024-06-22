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
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import TagManager from "react-gtm-module";

export const HolidayTour = ({
  data,
  getnamePackages,
  setTotalAmount,
  packages,
  category,
}) => {
  console.log(data);
  let [realData, setReadlData] = useState([]);
  const location = useLocation();
 
  useEffect(() => {
    const handlePageView = () => {
      TagManager.dataLayer({
        dataLayer: {
          event: 'pageview',
          page: {
            url: window.location.pathname,
            title: document.title,
          },
        },
      });
    };

    handlePageView();
  }, [location]);
  useEffect(() => {
    if (data == null || !data) {
      console.log("inide null Data");
      let linkValue = localStorage.getItem("link");
      let foundData = null;
      let path = location.pathname;
      path = path.replace("/packages/", "");
      path = decodeURIComponent(path);
      fetch("https://api.nyiconictours.com/package/all")
        .then((response) => response.json())
        .then((data) =>
          setReadlData(
            data?.data
              ?.sort((a, b) => a.orderNumber - b.orderNumber)
              .filter(
                (pack) =>
                  pack?.packageLabel.replace(/\s+/g, "-").toLowerCase() ==
                  path.replace(/\s+/g, "-").toLowerCase()
              )[0]
          )
        );
    } else {
      let foundData = null;
      foundData = packages.filter(
        (pack) =>
          pack?.packageLabel.replace(/\s+/g, "-").toLowerCase() ==
          data.replace(/\s+/g, "-").toLowerCase()
      );
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
      <Helmet>
        <title>{realData?.packageLabel}</title>
        <meta name="description" content={realData?.description} />
        <meta name="keywords" content={realData?.packageLabel} />
        <meta property="og:title" content={realData?.packageLabel} />
        <meta property="og:description" content={realData?.description} />
      </Helmet>
      <div className="fixed w-full z-50 bg-white">
        <Header
          getnamePackages={getnamePackages}
          packages={packages}
          category={category}
        />
      </div>
      <div className="absolute top-20 mt-6 w-full text-white">
        <HolidayTourGallery realData={realData} />
        <div className="w-4/5 mx-auto flex gap-5 justify-between two_section_data">
          <HolidayInfoSection realData={realData} />
          <HolidayPricingSection
            realData={realData}
            setTotalAmount={setTotalAmount}
          />
        </div>
        <Footer getnamePackages={getnamePackages} packages={packages} />
      </div>
    </div>
  );
};
