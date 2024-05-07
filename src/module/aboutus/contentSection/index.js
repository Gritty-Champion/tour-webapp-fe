import React from "react";
import "./index.css";

export const AboutContentSection = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-4/5 mx-auto py-5 text-black">
        <h1 className="text-center text-2xl text-black">
          About Hop-On Hop-off Sightseeing®
        </h1>
        <p className="py-2 text-base">
          Here at Hop-On Hop-Off®, our mission is to provide the best
          sightseeing activities and help create the most unforgettable
          experience for NYC visitors. Launched in December of 2016, Hop-On
          Hop-Off Sightseeing® have welcomed millions of tourists around the
          world.
        </p>
        <p className="py-2 text-base">
          With a large fleet of double decker buses equipped with a cutting-edge
          GPS triggered audio guiding system, Hop-On Hop-Off® tells the story of
          NYC in 11 languages. Totaling 40+ bus stops, Hop-On Hop-Off®’s double
          decker buses stop at major NYC attractions, making it convenient for
          customers to explore the city at their own pace.
        </p>
        <p className="py-2 text-base">
          Hop-On Hop-Off®’s high standards of service are reflected in
          professional drivers, friendly customer service, and top-notch
          technology: clean-air technology on buses and real-time live map to
          track hop-on hop-off buses.
        </p>
        <p className="py-2 text-base">
          Buy a ticket from Hop-On Hop-Off®, and we’ll be your ticket to the
          city. Your NYC adventure awaits!
        </p>
        <div className="flex gap-12 justify-between my-4 about_desc">
          <div className="w-full">
            <h2 className="text-center py-2 text-2xl text-black">
              Why Tour With Us?
            </h2>
            <p className="text-base">
              Our double-decker buses have become an easily recognizable sight
              on the streets of New York City. Our ambitious routes take our
              buses to neighborhoods all across town, from the Bronx to
              Brooklyn, while the size of our fleet ensures that there's always
              a bus available for our customers. Low wait times, diverse routes,
              professional drivers, and cutting edge GPS and touring technology
              guarantee that Hop-On Hop-Off® is the #1 choice for touring the
              Big Apple!
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-center py-2 text-2xl text-black">
              Over 2 Million Happy Customers
            </h2>
            <p className="text-base">
              Every year we give over half a million customers the best tour
              available in NYC! With the option to hop on and hop off at any of
              our many stops, feel free to leave the bus and experience the real
              streets and landmarks of the city. At Hop-On Hop-Off®, we're in
              love with New York City and passionate about providing you the
              best possible introduction to the Greatest City on Earth!
            </p>
          </div>
        </div>

        <div className="flex gap-12 justify-between my-4 about_desc">
          <div className="w-full">
            <h2 className="text-center py-2 text-2xl text-black">
              5 Spectacular Bus Tours
            </h2>
            <p className="text-base">
              New York City is a diverse and complex place, so we crafted a set
              of tours designed to match it. Our extensive routes deliver a
              taste of everything New York City has to offer. In addition to
              Uptown and Downtown Manhattan, visit different boroughs like the
              Bronx and Brooklyn, or distinct cultural enclaves like Chinatown
              and Little Italy. Our destinations include the most essential
              sites for entertainment, shopping, culture, and history. Our
              unique Night Tour adds an exciting twist on the City That Never
              Sleeps. Go sightseeing or plan an adventure, because in New York
              City there's always something waiting to be experienced!
            </p>
          </div>
          <div className="w-full">
            <h2 className="text-center py-2 text-2xl text-black">
              Great Customer Support
            </h2>
            <p className="text-base">
              You can reach us during our normal business hours which are Monday
              – Sunday 8am – 7pm, and we also offer limited support Monday –
              Sunday from 7pm – 9pm.
            </p>
          </div>
        </div>

        <div className="about_contact">
          <div className="p-4">
            <h1 className="text-3xl">
              Hop-On Hop-off Sightseeing® Visitor Centers
            </h1>
            <p className="text-base mt-1">
              2 East 42nd Street New York, NY 10017
            </p>
            <div className="my-5">
              <p className="text-xl">Hours of Operation</p>
              <ul>
                <li>Sales: 24 hrs</li>
                <li>
                  Customer Support: Sunday - Thursday, 8 am to 9 pm Friday &
                  Saturday, 8 am to 10 pm
                </li>
              </ul>
            </div>
            <div className="my-3">
              <h2 className="text-xl">Bike Rental Central Park Store</h2>
              <div className="list_one">
                <ul>
                  <li>
                    Central Park South, 1391 6th Ave, New York, NY 10019
                    (Between 56th and 57th St.)
                  </li>
                  <li>
                    <span className="font-semibold"> Hours of Operation:</span> Sun - Fri: 8am - 8pm Sat:
                    8am - 9pm
                  </li>
                  <li>
                    <span className="font-semibold"> Support:</span> Sun - Fri: 8am - 8pm Sat: 8am - 9pm
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
