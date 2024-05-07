import React from "react";
import "./index.css";
import { BiWorld } from "react-icons/bi";
import { SiFireship } from "react-icons/si";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import northpool from "../../../../assest/images/north_pool.jpg";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaTrainSubway } from "react-icons/fa6";
import { GoShieldCheck } from "react-icons/go";

export const PricingSection = () => {
  return (
    <div className="card_pricing w-2/5 relative">
      <div className="sticky top-0 mb-4">
      <div className="nested_card_pricing text-black ">
        <h1 className="text-center">
          Hop-On Hop-Off Pass 24 Hours + Liberty Cruise
        </h1>
        <div className="extra_feature flex gap-3 items-center justify-between my-3">
          <div className="flex flex-col items-center px-1 w-full">
            <BiWorld />
            <p className="text-xs text-center py-1">Most Iconic Tour</p>
          </div>

          <div className="flex flex-col items-center px-1 w-full">
            <SiFireship />
            <p className="text-xs text-center py-1">
              16 + bought in past 24 hours
            </p>
          </div>
          <div className="flex flex-col items-center px-1 w-full">
            <div className="flex gap-1 items-center star_section">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStarBorder />
            </div>
            <p className="text-xs text-center py-1">4.0 Stars</p>
          </div>
        </div>
        <div className="my-4">
          <h1 className="text-center">
            Choose either Specific or Flexible Date:
          </h1>
          <div className="flex_date">
            <div>
              <p>Flexible Date</p>
            </div>
          </div>
          <p className="text-center">
            Activate anytime within 12 months of purchase.
          </p>
          <div className="diff_pricing">
            <div className="adults flex items-center justify-between my-2">
              <h1 className="w-full">Adults</h1>
              <div className="flex gap-3 w-full">
               <del className="text-xs">$95</del> <p className="text-2xl text-red-500">$88</p>
              </div>
              <div className="quantity w-full flex items-center justify-between px-5">
                <div>-</div>
                <div>0</div>
                <div>+</div>
              </div>
            </div>
            <div className="adults flex items-center justify-between my-2">
              <h1 className="w-full relative">Kids <br/> <span className="absolute top-4 text-xs">  (age 4-12)</span>
</h1>
              <div className="flex gap-3 w-full">
               <del className="text-xs">$95</del> <p className="text-2xl text-red-500">$88</p>
              </div>
              <div className="quantity w-full flex items-center justify-between px-5">
                <div>-</div>
                <div>0</div>
                <div>+</div>
              </div>
              
            </div>
            <div className="text-base text-end my-2">
              <p> Total: $0.00 <span className="text-xs">+ fees</span></p>
              </div>
              <div className="btn_buyNow">
              <button>Buy Now</button>
              </div>
          </div>
        </div>
      </div>
      <div className="info_section_data my-3 py-2 text-black">
        <h1 className="text-lg text-center my-2">Worry Free Purchase</h1>
        <div className="">
           <div className="flex justify-between items-center mx-2 my-3">
             <p className="flex flex-col text-center items-center gap-1 text-xs">
              <FaRegThumbsUp className="text-2xl"/>
             Two start date options to suit your needs.
             </p>
             <p className="flex flex-col items-center text-center gap-1 text-xs">
              <FaLocationDot className="text-2xl"/>
              40+ stops by all major attractions. Unlimited
hop-on hop-off.

             </p>
           </div>
           <div className="flex justify-between items-center mx-2">
             <p className="flex flex-col text-center items-center gap-1 text-xs">
              <FaTrainSubway className="text-2xl"/>
              Most frequent bus arrivals

             </p>
             <p className="flex flex-col items-center text-center gap-1 text-xs">
              <GoShieldCheck className="text-2xl"/>
              Low price guarantee. 

             </p>
           </div>
        </div>
      </div>
      <div className="text-black p-2 other_section">
         <div>
         <h1 className="text-lg text-center py-2">
         Easy Boarding Process
         </h1>
         <p>
         Board buses & cruises, access attractions, and track live bus arrival times with one app.
         </p>
         </div>
      </div>
      <div className="events_better text-black my-1">
         <h1 className="text-center my-2">Even Better</h1>
         <div className="p-4">
            <img src={northpool} alt="northpool" className=""/>
            <div className="">
                <p className="py-2 text-sm">
                  
              Get 2 extra days &amp; 7 extra  tours for only <br/> <span>$26 more with</span> 
                </p>
                <p className="font-semibold">
                NYC Sightseeing Pass 72 Hours
                </p>
                <div className="flex justify-between items-center my-2">
                  <div className="flex items-center gap-1">
                <del className="text-xs">$95</del> <p className="text-base text-red-500">$88</p>
                </div>
                <button className="save_more text-xs">Save Even More</button>
                </div>
            </div>
         </div>
      </div>
    </div>
    </div>
  );
};
