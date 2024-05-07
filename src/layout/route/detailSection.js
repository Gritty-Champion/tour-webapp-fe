import React from 'react'
import { Header } from "../header";
import { Footer } from "../footer";
import { DetailSection } from '../../module/attraction/detailSection';



export const DetailSectionPage = ({getnamePackages}) => {
  return (
    <div>
       <div className="fixed w-full z-50 bg-white">
        <Header getnamePackages={getnamePackages} />
      </div>
      <div className="absolute top-20 mt-6 w-full text-white bg-white">
        <div className="w-full px-4 mx-auto my-8 flex justify-between gap-8">
            <DetailSection/>
        </div>
        <Footer />
        
      </div>
    </div>
  )
}

