import React from 'react'
import { Footer, Header } from "../../layout";
import { BannerSectionHoliday, Benefits, GallerySection, PackageSection } from '../../module/holiday';

export const NorthPoleExpress = ({getnamePackages}) => {
  return (
    <div>
       <div className="fixed w-full z-50 bg-white">
        <Header getnamePackages={getnamePackages} />
      </div>
      <div className="absolute top-20 mt-6 w-full text-white">
        <BannerSectionHoliday/>     
        <GallerySection/>
        <PackageSection/>
        <Benefits/>
        <Footer/>
      </div>
    </div>
  )
}

