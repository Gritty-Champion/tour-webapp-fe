import React from "react";
import { Footer, Header } from "../../layout";
import { EventsCards } from "../../module/events";

export const Event = ({getnamePackages}) => {
  return (
    <div>
      <div className="fixed w-full z-50 bg-white">
        <Header getnamePackages={getnamePackages} />
      </div>
      <div className="absolute top-20 mt-6 w-full text-white">
        <EventsCards />
        <Footer />
      </div>
    </div>
  );
};
