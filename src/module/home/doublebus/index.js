import React from "react";
import "./index.css";
import { FaBell } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import Slider from "react-slick";
import { dammyDataDoubleBus } from "../../../data/packages";


export const DoubleDacker = ({getnamePackages}) => {
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
      <div className="nested_section_home w-4/5 mx-auto flex flex-col justify-center items-center gap-4 py-8 text-2xl">
        <h1>Save On New York City Double-Decker Sightseeing Tour</h1>
        <p className="text-center text-primary rounded-3xl border-2 text-base border-primary border-solid flex justify-center items-center p-2 gap-2">
          <FaBell /> Express Tours
        </p>
        <div className="cards w-full my-4">
           <div className="nested_cards">

           <Slider {...settings}>
              {dammyDataDoubleBus.map(value =>{
                return(
                  <div className="box">
                  <img src={value.img} alt="img1" className="h-52 w-full"/>
                <div className="card_content m-2">
                  <h1 className="text-lg text-center font-medium mx-3">{value.heading}</h1>
                  <p className="text-center text-xs text-primary rounded-3xl border-2 w-44 my-2 mx-auto border-primary border-solid p-2">
                  {value.offpercent}
          </p>
                  <div className="price-package flex text-sm my-2 justify-center items-center gap-3">
                    <div className="amount_section flex flex-col justify-center items-center pl-5">
                       <h5>Regular</h5>
                        <del className="text-lg"> <span> ${value.regularPrice}</span></del>    
                    </div>
                    <div className="line"></div>
                    <div className="flex flex-col justify-center items-center text-primary">
                       <h5>Deal From</h5>
                        <p className="text-lg">${value.dealFrom}</p>    
                    </div>
                  </div>
                  <div>
                   <ul className="list_section text-sm pl-5 my-2">
                   <li className="pl-6 text-base font-medium">Included Tour</li>
                     {value.includes.map(data =>{
                      return(
                        <li><FaCheckCircle className="text-primary" />{data}</li>
                      )
                     })}
                   </ul>
                  </div>
                  <div className="btn_buy px-4 ">
                   <button className="w-full bg-primary py-1 rounded-xl text-base text-white" onClick={() => getnamePackages(value.uniqueId)}>Book Now</button>
                  </div>
                </div>
                </div> 
                )
              })}
              
            
           </Slider>

           </div>
        </div>
      </div>
    </div>
  );
};
