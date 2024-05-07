import React from 'react'
import { Footer, Header } from "../../layout";
import { TourSection } from '../../module/tour';

export const Tour = ({getnamePackages}) => {
  return (
    <div>
       <div className="">
      <div className="fixed w-full z-50 bg-white">
        <Header getnamePackages={getnamePackages} />
      </div>
      <div className="absolute top-20 mt-6 w-full text-white">
       <TourSection  getnamePackages={getnamePackages}/>
      <Footer />
    </div>
      </div> 
    </div>
  )
}

