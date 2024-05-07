import React from "react";
import {
  BannerSection,
  DoubleDacker,
  IcoicPackages,
  Pricing,
  SingleBuspricing,
  WhyChoose,
} from "../../module/home";
import { InfoSection } from "../../module/home/infoSection";
import { Footer, Header } from "../../layout";
import { MainPageModal } from "../modal/mainpage";

export const Home = ({getnamePackages}) => {

  return (
    <div>
      <div className="fixed w-full z-50 bg-white">
        <Header getnamePackages={getnamePackages} />
      </div>
      <div className="absolute top-20 mt-6 w-full text-white">
        <BannerSection  />
        <SingleBuspricing getnamePackages={getnamePackages} />
        <DoubleDacker getnamePackages={getnamePackages} />
        <IcoicPackages getnamePackages={getnamePackages} />
        <WhyChoose />
        <Pricing />
        <InfoSection />
        <Footer />
        
        <MainPageModal/>

      </div>
      
    </div>
  );
};
