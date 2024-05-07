import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { PrivacyContent } from "../../module/privacyPage/privacy-content";


export const PrivacyPolicy = ({getnamePackages}) => {
  return (
    <div>
      <div className="fixed w-full z-50 bg-white">
        <Header getnamePackages={getnamePackages} />
      </div>
      <div className="absolute top-20 mt-6 w-full text-white bg-white">
        <PrivacyContent />
        <Footer />
      </div>
    </div>
  );
};
