import React from "react";
import "./index.css";
import { FaBell } from "react-icons/fa";
import img1 from "../../../assest/images/img1.jpeg";
import { FaCheckCircle } from "react-icons/fa";
import Slider from "react-slick";
import leaning_chrimtas from "../../../assest/images/output-onlinegiftools.gif";


export const PackageSection = () => {
    let settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
  return (
    <div className="single_Bus_pricing w-full bg-sectionColor text-black">
      <div className="nested_section w-4/5 mx-auto flex flex-col justify-center items-center gap-4 py-8 text-2xl">
        {/* <img src={leaning_chrimtas} alt="leaning_chrimtas"/> */}
        <h1>Choose from our amazing Tours below</h1>
       
        <div className="cards w-full my-4">
           <div className="nested_cards">

           <Slider {...settings}>
               <div className="box">
                <img src={img1} alt="img1"/>
              <div className="card_content m-2">
                <h1 className="text-lg text-center font-medium mx-3">Holiday Lights Enhanced Experience
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
                    <li><FaCheckCircle /> Exclusive Gifts</li>
                    <li><FaCheckCircle />Cozy Blankets and Warm Hats</li>
                    <li><FaCheckCircle />Chocholate Tea Delight</li>
                    <li><FaCheckCircle />Iconic Landmarks</li>
                    <li><FaCheckCircle />Experts Guides and Narration</li>
                    <li><FaCheckCircle />Festive Atmosphere</li>
                    <li><FaCheckCircle />Awe-Inspiring Decorations</li>
                 </ul>
                </div>
                <div className="btn_buy px-4 ">
              <button className="w-full bg-primary py-1 rounded-xl text-base text-white">Book Now</button>
                </div>
              </div>
              </div>
              <div className="box">
                <img src={img1} alt="img1"/>
              <div className="card_content m-2">
                <h1 className="text-lg text-center font-medium mx-3">Holiday Lights Standard Experience</h1>
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
                    <li><FaCheckCircle /> Exclusive Gifts</li>
                    <li><FaCheckCircle />Cozy Blankets and Warm Hats</li>
                    <li><FaCheckCircle />Chocholate Tea Delight</li>
                    <li><FaCheckCircle />Iconic Landmarks</li>
                    <li><FaCheckCircle />Experts Guides and Narration</li>
                    <li><FaCheckCircle />Festive Atmosphere</li>
                    <li><FaCheckCircle />Awe-Inspiring Decorations</li>
                 </ul>
                </div>
                <div className="btn_buy px-4 ">
              <button className="w-full bg-primary py-1 rounded-xl text-base text-white">Buy Now</button>
                </div>
              </div>
              </div>
              <div className="box">
                <img src={img1} alt="img1"/>
              <div className="card_content m-2">
                <h1 className="text-lg text-center font-medium mx-3">Holiday Lights Tour On The North Pole Express</h1>
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
                    <li><FaCheckCircle /> Exclusive Gifts</li>
                    <li><FaCheckCircle />Cozy Blankets and Warm Hats</li>
                    <li><FaCheckCircle />Chocholate Tea Delight</li>
                    <li><FaCheckCircle />Iconic Landmarks</li>
                    <li><FaCheckCircle />Experts Guides and Narration</li>
                    <li><FaCheckCircle />Festive Atmosphere</li>
                    <li><FaCheckCircle />Awe-Inspiring Decorations</li>
                 </ul>
                </div>
                <div className="btn_buy px-4 ">
              <button className="w-full bg-primary py-1 rounded-xl text-base text-white">Book Now</button>
                </div>
              </div>
              </div>
              <div className="box">
                <img src={img1} alt="img1"/>
              <div className="card_content m-2">
                <h1 className="text-lg text-center font-medium mx-3">Holiday Lights Enhanced Experience</h1>
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
                    <li><FaCheckCircle /> Exclusive Gifts</li>
                    <li><FaCheckCircle />Cozy Blankets and Warm Hats</li>
                    <li><FaCheckCircle />Chocholate Tea Delight</li>
                    <li><FaCheckCircle />Iconic Landmarks</li>
                    <li><FaCheckCircle />Experts Guides and Narration</li>
                    <li><FaCheckCircle />Festive Atmosphere</li>
                    <li><FaCheckCircle />Awe-Inspiring Decorations</li>
                 </ul>
                </div>
                <div className="btn_buy px-4 ">
              <button className="w-full bg-primary py-1 rounded-xl text-base text-white">Buy Now</button>
                </div>
              </div>
              </div>
           </Slider>

           </div>
        </div>
        <p className="text-center text-primary rounded-3xl border-2 text-base border-primary border-solid flex justify-center items-center p-2 gap-2">
          <FaBell /> Buy Online for the Best Deal!

        </p>
      </div>
    </div>
  );
};
