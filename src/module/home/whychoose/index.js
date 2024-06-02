import React from "react";
import "./index.css";
import package_fam from "../../../assest/images/package_fam.jpg";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaFunnelDollar } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaGlassCheers } from "react-icons/fa";
import { baseFileUrl } from "../../../config/constant";

export const WhyChoose = ({homeData}) => {
  const imageUrl = `${baseFileUrl}${homeData?.whyChooseImageUrl}`
  return (
    <div className="w-full flex">
      <div className="content_section bg-bgBlue  p-6 px-10  w-full">
        <h1 className="text-4xl font-medium">
         {homeData?.whyChooseWhite1} <span className="text-primary"> {homeData?.whyChooseOrange}</span> {homeData?.whyChooseWhite2}
        </h1>
        <p className="py-3 text-base">
         {homeData?.whyChooseParagraph}
        </p>
        <div className="info_section my-2">
          <div className="child_section flex gap-3">
          <div className="bg-primary rounded-full  w-12 h-12">
            <FaMapMarkedAlt className="text-5xl p-2" />
            </div>
            <div>
              <h2 className="font-bold">{homeData?.whyChooseHeaderSection1}</h2>
              <p className="text-sm">
               {homeData?.whyChooseParagraphSection1}
              </p>
            </div>
          </div>
          <div className="child_section flex gap-3">
          <div className="bg-primary rounded-full  w-12 h-12">
            <FaFunnelDollar className="text-5xl p-2" />
            </div>
            <div>
              <h2 className="font-bold">{homeData?.whyChooseHeaderSection2}</h2>
              <p className="text-sm">
              {homeData?.whyChooseParagraphSection2}
              </p>
            </div>
          </div>
          <div className="child_section flex gap-3">
          <div className="bg-primary rounded-full  w-12 h-12">
            <FaBrain className="text-5xl p-2" />
            </div>
            <div>
              <h2 className="font-bold">{homeData?.whyChooseHeaderSection3}</h2>
              <p className="text-sm">
              {homeData?.whyChooseParagraphSection3}
              </p>
            </div>
          </div>
          <div className="child_section flex gap-3">
            <div className="bg-primary rounded-full  w-12 h-12">
            <FaGlassCheers className="text-5xl p-2" />
            </div>
            <div>
              <h2 className="font-bold">{homeData?.whyChooseHeaderSection4}</h2>
              <p className="text-sm">
              {homeData?.whyChooseParagraphSection4}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="img_section_fam w-full">
        <img src={imageUrl} alt="package_fam" />
      </div>
    </div>
  );
};
