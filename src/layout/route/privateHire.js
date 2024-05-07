import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { ContactInfo } from "../../module/contactus/contactInfo";
import { Form } from "../../module/contactus/form";
import { ContactInfoPrivateHire } from "../../module/private-hire/contectSection";
import { FormSection } from "../../module/private-hire/formSection";

export const PrivateHire = ({getnamePackages}) => {
  return (
    <div>
      <div className="fixed w-full z-50 bg-white">
        <Header getnamePackages={getnamePackages} />
      </div>
        <div className="absolute top-20 mt-6 w-full text-white bg-white">
          <h1 className="text-5xl text-center my-4 text-black">Private Hire</h1>
        <div className="w-4/5 mx-auto my-6 flex justify-between gap-8 private_chapter_section">
        <ContactInfoPrivateHire/>
        <FormSection/>
        </div>
        <Footer />
        
      </div>
    </div>
  );
};
