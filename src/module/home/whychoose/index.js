import React from "react";
import "./index.css";
import package_fam from "../../../assest/images/package_fam.jpg";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaFunnelDollar } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaGlassCheers } from "react-icons/fa";

export const WhyChoose = () => {
  return (
    <div className="w-full flex">
      <div className="content_section bg-bgBlue  p-6 px-10  w-full">
        <h1 className="text-4xl font-medium">
          Why Book A <span className="text-primary"> New York City</span> Bus
          Tour With Us?
        </h1>
        <p className="py-3 text-base">
          With New York Iconic Cruises, you’re sure to find the perfect tour for
          exploring during your time in New York City. Buy your ticket and plan
          your adventure today! At New York Iconic Cruis2s, we also offer the
          ultimate charter experience for groups of any size for a variety of
          events.
        </p>
        <div className="info_section my-2">
          <div className="child_section flex gap-3">
          <div className="bg-primary rounded-full  w-12 h-12">
            <FaMapMarkedAlt className="text-5xl p-2" />
            </div>
            <div>
              <h2 className="font-bold">Expert Guides</h2>
              <p className="text-sm">
                Take advantage of our well-versed in the history, culture, and
                hidden gems of New York City.
              </p>
            </div>
          </div>
          <div className="child_section flex gap-3">
          <div className="bg-primary rounded-full  w-12 h-12">
            <FaFunnelDollar className="text-5xl p-2" />
            </div>
            <div>
              <h2 className="font-bold">Best Prices</h2>
              <p className="text-sm">
                Take advantage of our well-versed in the history, culture, and
                hidden gems of New York City.
              </p>
            </div>
          </div>
          <div className="child_section flex gap-3">
          <div className="bg-primary rounded-full  w-12 h-12">
            <FaBrain className="text-5xl p-2" />
            </div>
            <div>
              <h2 className="font-bold">Memorable Experiences</h2>
              <p className="text-sm">
                Take advantage of our well-versed in the history, culture, and
                hidden gems of New York City.
              </p>
            </div>
          </div>
          <div className="child_section flex gap-3">
            <div className="bg-primary rounded-full  w-12 h-12">
            <FaGlassCheers className="text-5xl p-2" />
            </div>
            <div>
              <h2 className="font-bold">Comprehensive Itineraries</h2>
              <p className="text-sm">
                Take advantage of our well-versed in the history, culture, and
                hidden gems of New York City.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="img_section_fam w-full">
        <img src={package_fam} alt="package_fam" />
      </div>
    </div>
  );
};
