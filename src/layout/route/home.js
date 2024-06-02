import React, { useEffect, useState } from "react";
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

export const Home = ({getnamePackages,packages,category}) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://api.nyiconictours.com/homepage/all').then(
     response=>response.json()).then(data=>setData(data?.data));
 }, []); 

  return (
    <div>
      <div className="fixed w-full z-50 bg-white">
        <Header getnamePackages={getnamePackages} packages={packages} category={category} />
      </div>
      <div className="absolute top-20 mt-6 w-full text-white">
        <BannerSection  homeData={data}/>
        <SingleBuspricing getnamePackages={getnamePackages} packages={packages} category={category}/>
        {/* <DoubleDacker getnamePackages={getnamePackages} />
        <IcoicPackages getnamePackages={getnamePackages} /> */}
        <WhyChoose homeData={data}/>
        <Pricing homeData={data} packages={packages}/>
        <InfoSection homeData={data}/>
        <Footer getnamePackages={getnamePackages} packages={packages}/>
        
        <MainPageModal/>

      </div>
      
    </div>
  );
};
