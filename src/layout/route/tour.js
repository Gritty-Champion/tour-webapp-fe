import React from 'react'
import { Footer, Header } from "../../layout";
import { TourSection } from '../../module/tour';

export const Tour = ({getnamePackages,packages,category}) => {
  return (
    <div>
       <div className="">
      <div className="fixed w-full z-50 bg-white">
      <Header getnamePackages={getnamePackages} packages={packages} category={category}/>

      </div>
      <div className="absolute top-20 mt-6 w-full text-white">
       <TourSection  getnamePackages={getnamePackages} packages={packages}/>
      <Footer />
    </div>
      </div> 
    </div>
  )
}

