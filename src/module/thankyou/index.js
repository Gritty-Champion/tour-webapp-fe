import React from 'react'
import NY_Logo from "../../assest/images/NY-Logo.png";
import thank_you from "../../assest/images/thank-you.png"
import { NavLink } from 'react-router-dom';
export  const ThankYou = () => {
  return (
    <div className='w-full bg-white h-screen'>
       <div className='shadow-boxShadowHeader bgColor'>
       <header className='w-4/5 mx-auto'>
        <img src={NY_Logo} alt='ny_logo' className='w-40'/> 
       </header> 
       </div>
       <div className='flex justify-center items-center flex-col mt-10'>
          <div className="">
            <img src={thank_you} alt='thank_you'/>
          </div>
        
          <div className='w-6/12  mx-auto'>
            <p className='text-center text-xl'>
            Awesome! Thanks for submitting the form 🙌. Your payment has been successfully processed. Please check your email for the ticket number and ticket ID. These details will be crucial for any future correspondence.
            </p>
          </div>
          <div className='py-2'>
            <NavLink to="/" className="underline"> Go Back</NavLink>
          </div>
       </div>
    </div>
  )
}

