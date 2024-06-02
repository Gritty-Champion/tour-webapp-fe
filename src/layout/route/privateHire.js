import React, { useEffect, useState } from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { ContactInfo } from "../../module/contactus/contactInfo";
import { Form } from "../../module/contactus/form";
import { ContactInfoPrivateHire } from "../../module/private-hire/contectSection";
import { FormSection } from "../../module/private-hire/formSection";

export const PrivateHire = ({getnamePackages,packages,category}) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://api.nyiconictours.com/privatehire/all').then(
     response=>response.json()).then(data=>setData(data?.data));
 }, []); 
  return (
    <div>
      <div className="fixed w-full z-50 bg-white">
      <Header getnamePackages={getnamePackages} packages={packages} category={category} />
      </div>
        <div className="absolute top-20 mt-6 w-full text-white bg-white">
          <h1 className="text-5xl text-center my-4 text-black">Private Hire</h1>
        <div className="w-4/5 mx-auto my-6 flex justify-between gap-8 private_chapter_section">
        <ContactInfoPrivateHire data={data}/>
        <FormSection/>
        </div>
        <Footer getnamePackages={getnamePackages} packages={packages}/>
        
      </div>
    </div>
  );
};
