import React from 'react'
import { AboutUsSection } from '../../module/aboutus'
import { Header } from '../header'
import { Footer } from '../footer'
import { AboutContentSection } from '../../module/aboutus/contentSection'

export const Aboutus = ({getnamePackages}) => {
  
  return (
    <div>
         <div className="fixed w-full z-50 bg-white">
        <Header getnamePackages={getnamePackages} />
      </div>
      <div className="absolute top-20 mt-6 w-full text-white bg-white">
      <AboutUsSection/>
      <AboutContentSection/>
      <Footer/>
      </div>
    </div>
  )
}

