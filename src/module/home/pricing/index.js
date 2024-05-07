import React from 'react'
import "./index.css";
import downTown from "../../../assest/images/img2.jpg"
export const Pricing = () => {
  return (
    <div className='pricing_section w-full py-4 bg-sectionColor'>
      <div className='nested_pricing_section text-black w-4/5 mx-auto'>
         <h1 className='text-4xl text-center py-2'>Start Your Iconic NYC Sightseeing Adventure Here</h1>
         <p className='text-center py-2 pb-4'>New York Bus City Tours and Manhattan Sightseeing Guided by Local Experts</p>
         <div className='desc_packages flex justify-between flex-row gap-10'>
         <div className='actual_pricing w-4/5  mx-auto'>
          <div className='flex justify-between items-center text-black heading_pricing'>
            <h5 className='text-lg'>Tour/Packages</h5>
            <p className='text-lg'>Price</p>
         </div>        
         <div className='flex flex-col mt-6 pricing_value'>
          <div className='flex justify-between items-center'>
             <p>NYC Iconic Access Pass 24 Hours</p>  
             <p>$99</p>
          </div>
          <div className='flex justify-between items-center'>
             <p>NYC Iconic Access Pass 48 Hours</p>  
             <p>$119</p>
          </div>
          <div className='flex justify-between items-center'>
             <p>NYC Iconic Access Pass 5 Days (120 hours)	</p>  
             <p>$129</p>
          </div>
          <div className='flex justify-between items-center'>
             <p>Hop-On Hop-Off Downtown same day pass</p>  
             <p>$59</p>
          </div>
          <div className='flex justify-between items-center'>
             <p>Iconic Brooklyn Express Tour	</p>  
             <p>$49</p>
          </div>
          <div className='flex justify-between items-center'>
             <p>All city Express Tour same Day</p>  
             <p>$49</p>
          </div>
          <div className='flex justify-between items-center'>
             <p>Iconic Night Tour	</p>  
             <p>$49</p>
          </div>
          <div className='flex justify-between items-center'>
             <p>Live comedy Show	</p>  
             <p>$39</p>
          </div>
          <div className='flex justify-between items-center'>
             <p>Holiday Lights Tour</p>  
             <p>$124</p>
          </div>
          <div className='flex justify-between items-center'>
             <p>Iconic Harlem Tour</p>  
             <p>$59</p>
          </div>
         </div>
        </div>
            <div className='img_tubmail'>
                <img src={downTown} alt='downTown'/>
            </div>
           
         </div>
      </div>
    </div>
  )
}

