import React from "react";
import "./index.css";
import { FaCheckCircle } from "react-icons/fa";
import img1 from "../../../assest/images/img1.jpeg";

export const EventsCards = () => {
  return (
    <div className="event_section w-full my-8">
      <div className="nested_event_section text-black w-4/5 mx-auto">
        <h1 className="text-4xl text-center my-2">Event Cruises</h1>
        <p className="text-lg text-center my-2 w-3/5 mx-auto heading_para">
          Have a phenomenal holiday experience on our event cruises. Enjoy
          delicious food, delightful tunes, spectacular sights, great company,
          and more.
        </p>
        <div>
          <h1 className="text-xl text-center my-5">Sunset Cruise</h1>
          <div className="nested_cards_events justify-center items-center hidden my-2">
            <div className="box">
              <img src={img1} alt="img1" />
              <div className="card_content m-2">
                <h1 className="text-lg text-center font-medium mx-3">
                  Holiday Lights Christmas New York City Sightseeing Tour
                </h1>
                <div className="price-package flex text-sm my-2 justify-center items-center gap-3">
                  <div className="amount_section flex flex-col justify-center items-center pl-5">
                    <h5>Adult</h5>
                    <p className="text-lg">$109.00</p>
                  </div>
                  <div className="line"></div>
                  <div className="flex flex-col justify-center items-center">
                    <h5>Adult</h5>
                    <p className="text-lg">$109.00</p>
                  </div>
                </div>
                <div>
                  <ul className="list_section text-sm pl-5 my-2">
                    <li>
                      <FaCheckCircle /> Exclusive Gifts
                    </li>
                    <li>
                      <FaCheckCircle />
                      Cozy Blankets and Warm Hats
                    </li>
                    <li>
                      <FaCheckCircle />
                      Chocholate Tea Delight
                    </li>
                    <li>
                      <FaCheckCircle />
                      Iconic Landmarks
                    </li>
                    <li>
                      <FaCheckCircle />
                      Experts Guides and Narration
                    </li>
                    <li>
                      <FaCheckCircle />
                      Festive Atmosphere
                    </li>
                    <li>
                      <FaCheckCircle />
                      Awe-Inspiring Decorations
                    </li>
                  </ul>
                </div>
                <div className="btn_buy px-4 ">
                  <button className="w-full bg-primary py-1 rounded-xl text-base text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="box">
              <img src={img1} alt="img1" />
              <div className="card_content m-2">
                <h1 className="text-lg text-center font-medium mx-3">
                  Holiday Lights Christmas New York City Sightseeing Tour
                </h1>
                <div className="price-package flex text-sm my-2 justify-center items-center gap-3">
                  <div className="amount_section flex flex-col justify-center items-center pl-5">
                    <h5>Adult</h5>
                    <p className="text-lg">$109.00</p>
                  </div>
                  <div className="line"></div>
                  <div className="flex flex-col justify-center items-center">
                    <h5>Adult</h5>
                    <p className="text-lg">$109.00</p>
                  </div>
                </div>
                <div>
                  <ul className="list_section text-sm pl-5 my-2">
                    <li>
                      <FaCheckCircle /> Exclusive Gifts
                    </li>
                    <li>
                      <FaCheckCircle />
                      Cozy Blankets and Warm Hats
                    </li>
                    <li>
                      <FaCheckCircle />
                      Chocholate Tea Delight
                    </li>
                    <li>
                      <FaCheckCircle />
                      Iconic Landmarks
                    </li>
                    <li>
                      <FaCheckCircle />
                      Experts Guides and Narration
                    </li>
                    <li>
                      <FaCheckCircle />
                      Festive Atmosphere
                    </li>
                    <li>
                      <FaCheckCircle />
                      Awe-Inspiring Decorations
                    </li>
                  </ul>
                </div>
                <div className="btn_buy px-4 ">
                  <button className="w-full bg-primary py-1 rounded-xl text-base text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl text-center my-5">City Lights Cruise</h1>
          <div className="nested_cards_events justify-center items-center hidden my-2">
            <div className="box">
              <img src={img1} alt="img1" />
              <div className="card_content m-2">
                <h1 className="text-lg text-center font-medium mx-3">
                  Holiday Lights Christmas New York City Sightseeing Tour
                </h1>
                <div className="price-package flex text-sm my-2 justify-center items-center gap-3">
                  <div className="amount_section flex flex-col justify-center items-center pl-5">
                    <h5>Adult</h5>
                    <p className="text-lg">$109.00</p>
                  </div>
                  <div className="line"></div>
                  <div className="flex flex-col justify-center items-center">
                    <h5>Adult</h5>
                    <p className="text-lg">$109.00</p>
                  </div>
                </div>
                <div>
                  <ul className="list_section text-sm pl-5 my-2">
                    <li>
                      <FaCheckCircle /> Exclusive Gifts
                    </li>
                    <li>
                      <FaCheckCircle />
                      Cozy Blankets and Warm Hats
                    </li>
                    <li>
                      <FaCheckCircle />
                      Chocholate Tea Delight
                    </li>
                    <li>
                      <FaCheckCircle />
                      Iconic Landmarks
                    </li>
                    <li>
                      <FaCheckCircle />
                      Experts Guides and Narration
                    </li>
                    <li>
                      <FaCheckCircle />
                      Festive Atmosphere
                    </li>
                    <li>
                      <FaCheckCircle />
                      Awe-Inspiring Decorations
                    </li>
                  </ul>
                </div>
                <div className="btn_buy px-4 ">
                  <button className="w-full bg-primary py-1 rounded-xl text-base text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
            <div className="box">
              <img src={img1} alt="img1" />
              <div className="card_content m-2">
                <h1 className="text-lg text-center font-medium mx-3">
                  Holiday Lights Christmas New York City Sightseeing Tour
                </h1>
                <div className="price-package flex text-sm my-2 justify-center items-center gap-3">
                  <div className="amount_section flex flex-col justify-center items-center pl-5">
                    <h5>Adult</h5>
                    <p className="text-lg">$109.00</p>
                  </div>
                  <div className="line"></div>
                  <div className="flex flex-col justify-center items-center">
                    <h5>Adult</h5>
                    <p className="text-lg">$109.00</p>
                  </div>
                </div>
                <div>
                  <ul className="list_section text-sm pl-5 my-2">
                    <li>
                      <FaCheckCircle /> Exclusive Gifts
                    </li>
                    <li>
                      <FaCheckCircle />
                      Cozy Blankets and Warm Hats
                    </li>
                    <li>
                      <FaCheckCircle />
                      Chocholate Tea Delight
                    </li>
                    <li>
                      <FaCheckCircle />
                      Iconic Landmarks
                    </li>
                    <li>
                      <FaCheckCircle />
                      Experts Guides and Narration
                    </li>
                    <li>
                      <FaCheckCircle />
                      Festive Atmosphere
                    </li>
                    <li>
                      <FaCheckCircle />
                      Awe-Inspiring Decorations
                    </li>
                  </ul>
                </div>
                <div className="btn_buy px-4 ">
                  <button className="w-full bg-primary py-1 rounded-xl text-base text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <h1 className="text-xl text-center my-5">
            NYC July 4th Fireworks Cruise 2023
          </h1>
          <div className="nested_cards_events single_card justify-center items-center hidden my-2">
            <div className="box">
              <img src={img1} alt="img1" />
              <div className="card_content m-2">
                <h1 className="text-lg text-center font-medium mx-3">
                  Holiday Lights Christmas New York City Sightseeing Tour
                </h1>
                <div className="price-package flex text-sm my-2 justify-center items-center gap-3">
                  <div className="amount_section flex flex-col justify-center items-center pl-5">
                    <h5>Adult</h5>
                    <p className="text-lg">$109.00</p>
                  </div>
                  <div className="line"></div>
                  <div className="flex flex-col justify-center items-center">
                    <h5>Adult</h5>
                    <p className="text-lg">$109.00</p>
                  </div>
                </div>
                <div>
                  <ul className="list_section text-sm pl-5 my-2">
                    <li>
                      <FaCheckCircle /> Exclusive Gifts
                    </li>
                    <li>
                      <FaCheckCircle />
                      Cozy Blankets and Warm Hats
                    </li>
                    <li>
                      <FaCheckCircle />
                      Chocholate Tea Delight
                    </li>
                    <li>
                      <FaCheckCircle />
                      Iconic Landmarks
                    </li>
                    <li>
                      <FaCheckCircle />
                      Experts Guides and Narration
                    </li>
                    <li>
                      <FaCheckCircle />
                      Festive Atmosphere
                    </li>
                    <li>
                      <FaCheckCircle />
                      Awe-Inspiring Decorations
                    </li>
                  </ul>
                </div>
                <div className="btn_buy px-4 ">
                  <button className="w-full bg-primary py-1 rounded-xl text-base text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
