import React, { useEffect, useState } from 'react'
import { AboutUsSection } from '../../module/aboutus'
import { Header } from '../header'
import { Footer } from '../footer'
import { AboutContentSection } from '../../module/aboutus/contentSection'

export const Aboutus = ({getnamePackages,packages,category}) => {
  
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://api.nyiconictours.com/about/all').then(
     response=>response.json()).then(data=>setData(data?.data));
 }, []); 
  return (
    <div>
         <div className="fixed w-full z-50 bg-white">
         <Header getnamePackages={getnamePackages} packages={packages} category={category} />

      </div>
      <div className="absolute top-20 mt-6 w-full text-white bg-white">
      <AboutUsSection data={data}/>
      <AboutContentSection data={data}/>
      <Footer getnamePackages={getnamePackages} packages={packages}/>
      </div>
    </div>
  )
}

