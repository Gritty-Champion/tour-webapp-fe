import React from 'react'
import "./index.css";

export const BannerSectionHoliday = () => {
  return (
    <div className='relative w-full'>
        <div className='nested_banner'>
         <div className='py-4 banner_content flex flex-col justify-center items-center'>
           <h1 className='text-4xl font-semibold py-3'>Santa is iconic in New York</h1>
           <p className='text-3xl font-normal'>It’s Holiday lights, Iconic style</p>
           <button className='py-2 px-4  bg-primary text-white rounded-3xl'>Buy Now</button>
         </div>
        </div>

    </div>
  )
}
