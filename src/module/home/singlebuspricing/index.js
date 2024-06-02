import React from "react";
import "./index.css";
import { FaBell } from "react-icons/fa";
import img1 from "../../../assest/images/img1.jpeg";
import img2 from "../../../assest/images/img2.jpg";
import img3 from "../../../assest/images/img3.jpeg";
import img4 from "../../../assest/images/img3.jpg";
import { FaCheckCircle } from "react-icons/fa";
import Slider from "react-slick";
import { dammyDataSingleBus } from "../../../data/packages";
import { baseFileUrl } from "../../../config/constant";


export const SingleBuspricing = ({getnamePackages,packages,category}) => {
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
    <div>
      {category?.map(cat=>
        (<div className="single_Bus_pricing w-full bg-sectionColor text-black">
        <div className="nested_section_home w-4/5 mx-auto flex flex-col justify-center items-center gap-4 py-8 text-2xl">
          <h1>{cat?.categoryLabel}</h1>
          <p className="text-center text-primary rounded-3xl border-2 text-base border-primary border-solid flex justify-center items-center p-2 gap-2">
            <FaBell /> {cat?.categoryName}
          </p>
          <div className="cards w-full my-4">
             <div className="nested_cards">
  
             <Slider {...settings}>
                 {packages.filter(pack=>pack?.category?.categoryName===cat?.categoryName).map(value =>{
                  let percentage = (100-Number(value?.dealFrom)*100/Number(value?.regular)).toFixed(0);
                  let imageUrl = `${baseFileUrl}${value?.mainUrl}`
                  return(
                    <div className="box">
                    <img src={imageUrl} alt="img1" className="h-52 w-full"/>
                  <div className="card_content m-2">
                    <h1 className="text-lg text-center font-medium mx-3">{value.packageLabel}</h1>
                    <p className="text-center text-xs text-primary rounded-3xl border-2 w-44 my-2 mx-auto border-primary border-solid p-2">
                    Online Deal Save {percentage}%
            </p>
                    <div className="price-package flex text-sm my-2 justify-center items-center gap-3">
                      <div className="amount_section flex flex-col justify-center items-center pl-5">
                         <h5>Regular</h5>
    
                          <del className="text-lg"><span> ${value?.regular}</span></del>    
                      </div>
                      <div className="line"></div>
                      <div className="flex flex-col justify-center items-center text-primary">
                         <h5>Deal from</h5>
                          <p className="text-lg">${value?.dealFrom}</p>    
                      </div>
                    </div>
                    <div>
                     <ul className="list_section text-sm pl-5 my-2">
                     <li className="pl-6 text-base font-medium">{value?.sites}</li>
                     <div className="clipped-content" dangerouslySetInnerHTML={{ __html: value?.inclusionInfo }} />
                     </ul>
                    </div>
                    <div className="btn_buy px-4 ">
                  <button className="w-full bg-primary py-1 rounded-xl text-base text-white" onClick={() => getnamePackages(value?.packageLabel)}>Book Now</button>
                    </div>
                  </div>
                  </div>                  
                  )
                 })}
             </Slider>
  
             </div>
          </div>
        </div>
      </div>)
        )}
    </div>
  );
};


