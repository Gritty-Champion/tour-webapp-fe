import React from 'react'
import './index.css';

export const FormSection = () => {
  return (
    <div className='private_form w-3/4'>
       <div className='nested_private_form'>
          <form className=''>
            <h1 className='text-2xl text-center py-4'>Send A Message</h1>
            <div className='flex justify-between gap-4'>
                <input type='text' placeholder='First Name'/>
                <input type='text' placeholder='Last Name'/>
            </div>
            <div className='my-2'>
                <input type='email' placeholder='Email'/>
            </div>
            <div className='my-2'>
                <input type='number' placeholder='Phone'/>
            </div>
            <div className='my-2'>
                <input type='text' placeholder='Organization Name/Name of Company'/>
            </div>
            <div className='my-2'>
                <input type='text' placeholder='Pick Up Location'/>
            </div>
            <div className='my-2'>
                <input type='text' placeholder='Drop Of Location'/>
            </div>
            <div className='my-2'> 
                 <textarea cols={"5"} placeholder='Additonal Requests' />
            </div>
            <div className='my-2'>
                <button type='submit' className='bg-primary w-full rounded-md'>Send Message</button>
            </div>
         </form> 
       </div>
    </div>
  )
}

