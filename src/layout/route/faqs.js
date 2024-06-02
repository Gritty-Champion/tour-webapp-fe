import React from 'react';
import { Header } from "../header";
import { Footer } from "../footer";
import { FaqSection } from '../../module/faqs';

export  const Faqs = ({getnamePackages,packages,category}) => {
  return (
    <div>
      <div>
      <div className="fixed w-full z-50 bg-white">
      <Header getnamePackages={getnamePackages} packages={packages} category={category}/>

      </div>
      <div className="absolute top-20 mt-6 w-full text-white bg-white">
          <h1 className="text-3xl text-center my-4 text-black">Frequently Asked Questions
</h1> 
       <FaqSection/>
       <Footer getnamePackages={getnamePackages} packages={packages}/>
        
      </div>
    </div>
    </div>
  )
}

