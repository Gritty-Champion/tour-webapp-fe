import React from 'react'
import { Header } from "../header";
import { Footer } from "../footer";
import { CardAttractions } from '../../module/attraction/card';

export const Attraction = ({getnamePackages}) => {
  return (
    <div>
          <div className="fixed w-full z-50 bg-white">
        <Header getnamePackages={getnamePackages} />
      </div>
      <div className="absolute top-20 mt-6 w-full text-white bg-white">
          <h1 className="text-5xl text-center my-4 text-black">Attractions</h1>
        <div className="w-4/5 mx-auto my-8 flex justify-between gap-8">
              <CardAttractions/>
              {/* <div className='w-full text-black'>
                <h1 className='text-2xl'>Map Section</h1>
              </div> */}
        </div>
        <Footer />
        
      </div>
    </div>
  )
}

