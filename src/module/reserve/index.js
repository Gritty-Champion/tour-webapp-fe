import React, { useState } from 'react'
import NY_Logo from "../../assest/images/NY-Logo.png";
import { Checkout } from '../checkout';

export const ConfirmationForm = ({data,totalAmount}) => {



  let [formdata, setFormData]=useState({
    email:"",
    firstName: "",
    lastName: "",
    amount: "",
    packageName: "", 
  })

  const onChangeFunc=(e) =>{
          setFormData({ ...formdata, [e.target.name]: e.target.value,  packageName: data, amount: totalAmount});
  }; 


  const onSubmitFunc=(e) =>{
     e.preventDefault();
     console.log("Runing", formdata);

  }

  return (

    <div className='confirmation_section w-full bg-white h-full h-screen'>
        <div className='shadow-boxShadowHeader bgColor'>
       <header className='w-4/5 mx-auto'>
        <img src={NY_Logo} alt='ny_logo' className='w-40'/> 
       </header> 
       </div>
      <div className='nested_section_confirm w-4/5 mx-auto my-10'>
          <div className='form-section shadow-boxShadowHeader p-8 rounded-2xl'>
            <h2 className='text-center text-xl py-4'>Enter Your Info to Proceed</h2>
            <form className='flex flex-col w-full gap-4' onClick={onSubmitFunc}>
              <input type='email' placeholder='Email' name='email'    onChange={onChangeFunc} className='bg-transparent h-12 max-h-12 rounded-md p-4 border-gray-400 border-border_width	border-solid' required />   
              <input type='text' placeholder='First Name' name='firstName'  onChange={onChangeFunc}  className='bg-transparent h-12 max-h-12 rounded-md p-4 border-gray-400 border-border_width	border-solid' required/>
              <input type='text' placeholder='Last Name' name='lastName'  onChange={onChangeFunc} className='bg-transparent h-12 max-h-12 rounded-md p-4 border-gray-400 border-border_width	border-solid' required/>
              <Checkout formdata={formdata} setFormData={setFormData} />
              {/* <button type='submit' className='w-full rounded-full bg-primary text-white border-primary outline-none text-lg text-center h-12'>Proceed To Checkout</button> */}
            </form>
          </div>
      </div>
    </div>
  )
}

