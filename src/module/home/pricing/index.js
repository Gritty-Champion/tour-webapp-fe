import React from 'react'
import "./index.css";
import downTown from "../../../assest/images/img2.jpg"
import { baseFileUrl } from '../../../config/constant';
export const Pricing = ({homeData,packages}) => {
   const imageUrl = `${baseFileUrl}${homeData?.pricingImageUrl}`
  return (
    <div className='pricing_section w-full py-4 bg-sectionColor'>
      <div className='nested_pricing_section text-black w-4/5 mx-auto'>
         <h1 className='text-4xl text-center py-2'>{homeData?.pricingHeading}</h1>
         <p className='text-center py-2 pb-4'>{homeData?.pricingSubHeading}</p>
         <div className='desc_packages flex justify-between flex-row gap-10'>
         <div className='actual_pricing w-4/5  mx-auto'>
          <div className='flex justify-between items-center text-black heading_pricing'>
            <h5 className='text-lg'>{homeData?.pricingTourPackages}</h5>
            <p className='text-lg'>{homeData?.pricingPrice}</p>
         </div>        
         <div className='flex flex-col mt-6 pricing_value'>
            {packages?.map(pack=>
               (
                  <div className='flex justify-between items-center'>
                  <p>{pack?.packageLabel}</p>  
                  <p>${pack?.dealFrom}</p>
               </div>
               ))}
         
         </div>
        </div>
            <div className='img_tubmail'>
                <img src={imageUrl} alt='downTown'/>
            </div>
           
         </div>
      </div>
    </div>
  )
}

