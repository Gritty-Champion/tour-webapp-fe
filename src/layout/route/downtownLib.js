import React from "react";
import {
  GalleryDownTownLibrary,
  InfoSectionLiberty,
  PricingSection,
} from "../../module/packages/downtownLiberty";
import { Footer, Header } from "../../layout";

export const DowntownLibertyCruise = ({getnamePackages}) => {
  return (
    <div>
      <div className="fixed w-full z-50 bg-white">
        <Header getnamePackages={getnamePackages} />
      </div>
      <div className="absolute top-20 mt-6 w-full text-white">
      <GalleryDownTownLibrary/>
        <div className="w-4/5 mx-auto flex gap-5 justify-between">
          <InfoSectionLiberty />
          <PricingSection />
        </div>
        <Footer/>
      </div>
    </div>
  );
};

