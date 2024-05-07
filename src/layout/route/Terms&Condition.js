import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { TermsAndConditions } from "../../module/terms&Cond/termsContent";


export const Terms_Condition = ({getnamePackages}) => {
  return (
    <div>
      <div className="fixed w-full z-50 bg-white">
        <Header getnamePackages={getnamePackages} />
      </div>
      <div className="absolute top-20 mt-6 w-full text-white bg-white">
        <TermsAndConditions />
        <Footer />
      </div>
    </div>
  );
};
