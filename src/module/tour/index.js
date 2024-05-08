import React from "react";
import "./index.css";
import radiocity from "../../assest/images/WhatsApp-Image-2023-11-04-at-22.43.32-e1699135721578.jpeg";
import hopoffhopon from "../../assest/images/Hop-on-off-buses-new-york-iconic-cruises-2.jpg";
import musicPlayer from "../../assest/images/shutterstock_1432795235-scaled.jpg";
import hopeonHopeoff from "../../assest/images/Hop-on-Hop-off-3 (1).jpg";
import hopeonhopeoffTourTown from "../../assest/images/Hop-on-Hop-off-2.jpg";
import lastImg from "../../assest/images/last-Icon.jpg";
import img3 from "../../assest/images/img3.jpg";
import img2 from "../../assest/images/img2.jpg";
import shipoverview from "../../assest/images/ship/shipoverview.jpg";

import hopOnHopOff from "../../assest/images/Hop-on-Hop-off-3.jpg";
import hoponHopOff from "../../assest/images/Hop-on-Hop-off.jpg";
import hopOnHopOffDown from "../../assest/images/Hop-on-hop-off-downtown-tour-t.jpg";
import shutterMusic from "../../assest/images/shutterstock_1432795235-scaled.jpg";
import { FaLocationDot } from "react-icons/fa6";

let data = [
  {
    id: 1,
    heading: `Hop-on Hop-off All City Tour (Red Line)`,
    location: `New York`,
    desc: ` See the best of Downtown NYC in a fun and convenient way with our Hop on Hop off tour. Our open top buses offer stunning views of the city, and you can hop on a....`,
    amount: "64",
    img: hopOnHopOffDown,
    link: "Hop-on-Hop-off-downtown-tour",
  },
 
  {
    id: 2,
    heading: `All City Iconic Express Tour`,
    location: `New York`,
    desc: `The All City Iconic Express Tour is a great way to see the most popular tourist attractions in a city in a short amount of time. The tour typically takes about ...`,
    amount: "49.99",
    img: lastImg,
    link: "all-city-iconic-express-tour",
  },
  {
    id: 3,
    heading: `48 Hrs Hop On Hop Off Iconic Pass`,
    location: `New York`,
    desc: `Immerse yourself in the vibrant energy and explore the iconic landmarks, neighborhoods, and cultural attractions that make this city truly unique. With the 4...`,
    amount: "123",
    img: img3,
    link: "48Hours-iconic-access-pass",
  },
  {
    id: 4,
    heading: `Ultimate Unlimited Access Pass`,
    location: `West 47th Street & 7th Avenue New York 10036`,
    desc: `An Ultimate Unlimited Iconic Access Pass is a ticket that gives you access to a city's most popular attractions for a set period of time (5 days). The pass typi...`,
    amount: "206",
    img: hoponHopOff,
    link: "5day-ultimate-unlimited-access-pass",
  },
  {
    id: 5,
    heading: `Night Tour (Black Line)`,
    location: `New York`,
    desc: `Discover the enchanting allure of the city lights with our captivating Night Tour. Immerse yourself in the vibrant energy of the urban landscape as New York Cit...`,
    amount: "64",
    img: lastImg,
    link: "night-tour",
  },
  {
    id: 6,
    heading: `Times Square Live Comedy Show`,
    location: `New York City`,
    desc: `Get ready for a night of laughter and entertainment in the heart of New York City with our Times Square Live Comedy Show. Step into a world of humor, wit, and u...`,
    amount: "39.99",
    img: shutterMusic,
    link: "times-square-live-commedy-show",
  },
  {
    id: 7,
    heading: `Liberty boat Cruises`,
    location: `New York`,
    desc: `Experience incredible views of the Statue of Liberty on our cruise, offering unparalleled photo
    opportunities and a celebratory toast to New York City. As you embark on this journey, witness iconic
    landmarks like the Brooklyn Bridge and more while cruising the waterways, all while taking in the
    breathtaking skyline of lower Manhattan.`,
    amount: "39.99",
    img: shipoverview,
    link: "liberty-boat-cruises",
  },

  // {
  //   id: 4,
  //   heading: `Hop-on Hop-off Harlem Tour (Orange Line)`,
  //   location: `New York`,
  //   desc: `Experience the vibrant culture and history of Harlem with our Hop-on Hop-off tour. Our open-top buses offer stunning views of the neighborhood, and you can hop ... `,
  //   amount: "59",
  //   img: img3,
  //   link: "hop-on-hop-off-harlem-tour",
  // },
  
  // {
  //   id: 5,
  //   heading: `Hop-on Hop-off Uptown Tour (Purple Line)`,
  //   location: `New York`,
  //   desc: `The Hop on Hop off Uptown Tour is a great way to see the best of New York City. The tour takes you pass some of the city's most iconic landmarks, including Time...`,
  //   amount: "59",
  //   img: img2,
  //   link: "/packages/Hop-on-Hop-off-downtown-tour",
  // },
  // {
  //   id: 6,
  //   heading: `Holiday Lights Christmas New York City Sightseeing Tour: Gifts, Warmth, and Iconic Sights!`,
  //   location: `West 42nd Street & 7th Avenue New York NY Beside Red Lobster.`,
  //   desc: ` Step into a winter wonderland with our extraordinary "Magical
  //   Christmas Tour of New York City!" Immerse yourself in the
  //   enchanting holiday spirit as you explore...`,
  //   amount: "124",
  //   img: radiocity,
  //   link: "Holiday-Lights-Christmas",
  // },
 
 
  // {
  //   id: 9,
  //   heading: `1 Day Iconic Access Pass`,
  //   location: `New York`,
  //   desc: `Experience the iconic sights of New York City with our 1 Day Iconic Access Pass. Immerse yourself in the vibrant energy and rich history of the city as you emba...`,
  //   amount: "89",
  //   img: img2,
  //   link: "1-day-iconic-access-pass",
  // },


];

export const TourSection = ({ getnamePackages }) => {
  return (
    <div className="tour_card w-full text-black">
      <div className="nested_tour_card w-4/5 mx-auto my-5">
        <div className="">
          <h5>Total</h5>

          {data.map((value) => {
            return (
              <div className="card_tour relative" key={value.id}>
                {value.id === 1 && (
                  <div className="badge_card">
                    <span className="z-50">Featured</span>
                  </div>
                )}
                <div className="card_desc flex gap-3 items-start">
                  <div className="img_tour">
                    <img src={value.img} alt={value.img} />
                  </div>
                  <div className="">
                    <h1>{value.heading}</h1>
                    <div className="my-2">
                      {" "}
                      <span className="flex gap-2 text-xs">
                        <FaLocationDot />
                        {value.location}
                      </span>{" "}
                    </div>
                    <p className="text-base text_desc">{value.desc}</p>
                    <div className="flex justify-end items-end flex-col">
                      <button
                        className="btn_details"
                        onClick={() => getnamePackages(value.link)}
                      >
                        View Details
                      </button>
                      <p className="totalValue text-sm">
                        From ${value.amount}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

