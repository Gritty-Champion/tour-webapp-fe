import React from 'react'
import './index.css';

export const Form = () => {
  return (
    <div className='contact_form w-3/4'>
       <div className='nested_contact_form'>
          <form className=''>
            <h1 className='text-2xl text-center py-4'>Send A Message</h1>
            <div>
                <input type='text' placeholder='Full Name'/>
            </div>
            <div>
                <input type='email' placeholder='Email'/>
            </div>
            <div>
                <input type='number' placeholder='Phone'/>
            </div>
            <div>
                <input type='text' placeholder='Subject'/>
            </div>
            <div> 
                 <textarea cols={"5"} />
            </div>
            <div>
                <button type='submit' className='bg-primary w-full rounded-md'>Send Message</button>
            </div>
         </form> 
       </div>
    </div>
  )
}

