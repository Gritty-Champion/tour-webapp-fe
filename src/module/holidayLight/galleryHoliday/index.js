import React, { useEffect, useState } from "react";
import enjoyment from "../../../assest/images/brooklen/48ht.jpg";
import chrimtas1 from "../../../assest/images/brooklen/empire state3.jpg";
import selling_img from "../../../assest/images/brooklen/madame tussads 2.jpg";
import northpool from "../../../assest/images/brooklen/new year ball drop 2.jpg";
import children from "../../../assest/images/brooklen/s1.jpg";
import "./index.css";
import {
  dammyDataSingleBus,
  dammyDataDoubleBus,
  dammyDataIconic,
} from "../../../data/packages";
import { baseFileUrl } from "../../../config/constant";
export const HolidayTourGallery = ({ realData }) => {
  console.log(realData, "realData");
  const url = `${baseFileUrl}${realData?.mainUrl}`;
  let image1 = null;
  let image2 = null;
  let image3 = null;
  let image4 = null;
  console.log("RealData Packages",realData);
  if (realData?.packageImage1) {
    image1 = `${baseFileUrl}${realData?.packageImage1}`;
  }
  if (realData?.packageImage2) {
    image2 = `${baseFileUrl}${realData?.packageImage2}`;
  }
  if (realData?.packageImage3) {
    image3 = `${baseFileUrl}${realData?.packageImage3}`;
  }
  if (realData?.packageImage4) {
    image4 = `${baseFileUrl}${realData?.packageImage4}`;
  }

  return (
    <div className="holiday_tour">
      <div className="w-full">
        <div className="w-4/5 mx-auto my-4 galler-section">
          <div className="content_imge">
            <h1 className="text-left text-black text-2xl">
              {" "}
              {realData?.packageLabel}
            </h1>
            <div className="img_gallery_holiday my-2 has_video">
              <div className="w-full h-full">
                {" "}
                {realData?.video && (
                  <video
                    src={realData?.video}
                    className="fixed1_img"
                    autoPlay
                    loop
                    muted
                  />
                )}
              </div>
            </div>
            <div className="img_gallery_holiday my-2">
              <div className="w-full h-full">
                <img
                  src={url}
                  alt="enjoyment"
                  className="w-full rounded-l-xl"
                />
                )
              </div>
              <div className="flex flex-col gap-2 h-full gallery_two">
                {realData?.packageUrls ? (
                  <img src={image1} alt="chrimtas1" />
                ) : (
                  <img
                    src={children}
                    alt="children"
                    className="fixed_img rounded-l-xl"
                  />
                )}
                {realData?.packageUrls ? (
                  <img src={image2} alt="selling_img" />
                ) : (
                  <img
                    src={northpool}
                    alt="northpool"
                    className="fixed_img rounded-l-xl"
                  />
                )}
              </div>
              <div className="flex flex-col gap-2 h-full gallery_three">
                {realData?.packageUrls ? (
                  <img src={image3} alt="northpool" className="rounded-tr-xl" />
                ) : (
                  <img
                    src={selling_img}
                    alt="selling_img"
                    className="rounded-l-xl"
                  />
                )}

                {realData?.packageUrls ? (
                  <img src={image4} alt="children" className="rounded-br-xl" />
                ) : (
                  <img
                    src={chrimtas1}
                    alt="chrimtas1"
                    className="w-full rounded-l-xl"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
