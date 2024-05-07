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
export const HolidayTourGallery = ({ realData }) => {
  console.log(realData, "realData");
  return (
    <div className="holiday_tour">
      <div className="w-full">
        <div className="w-4/5 mx-auto my-4 galler-section">
          <div className="content_imge">
            <h1 className="text-left text-black text-2xl">
              {" "}
              {realData?.heading}
            </h1>
            <div className="img_gallery_holiday my-2">
              <div className="w-full h-full">
                {realData?.galleryImg ? (
                  <img
                    src={realData?.galleryImg && realData?.galleryImg[0]}
                    alt="enjoyment"
                    className="w-full rounded-l-xl"
                  />
                ) : (
                  <img
                    src={enjoyment}
                    alt="enjoyment"
                    className="w-full rounded-l-xl"
                  />
                )}
              </div>
              <div className="flex flex-col gap-2 h-full gallery_two">
                {realData?.galleryImg ? (
                  <img
                    src={realData?.galleryImg && realData?.galleryImg[1]}
                    alt="chrimtas1"
                  />
                ) : (
                  <img
                    src={children}
                    alt="children"
                    className="fixed_img rounded-l-xl"
                  />
                )}
                {realData?.galleryImg ? (
                  <img
                    src={realData?.galleryImg && realData?.galleryImg[2]}
                    alt="selling_img"
                  />
                ) : (
                  <img
                    src={northpool}
                    alt="northpool"
                    className="fixed_img rounded-l-xl"
                  />
                )}
              </div>
              <div className="flex flex-col gap-2 h-full gallery_three">
                {realData?.galleryImg ? (
                  <img
                    src={realData?.galleryImg && realData?.galleryImg[3]}
                    alt="northpool"
                    className="rounded-tr-xl"
                  />
                ) : (
                  <img
                    src={selling_img}
                    alt="selling_img"
                    className="rounded-l-xl"
                  />
                )}

                {realData?.galleryImg ? (
                  <img
                    src={realData?.galleryImg && realData?.galleryImg[4]}
                    alt="children"
                    className="rounded-br-xl"
                  />
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
