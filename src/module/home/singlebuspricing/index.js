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


export const SingleBuspricing = ({getnamePackages}) => {
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
        <h1>Best New York City Hop-On Hop-Off Sightseeing Bus Tour</h1>
        <p className="text-center text-primary rounded-3xl border-2 text-base border-primary border-solid flex justify-center items-center p-2 gap-2">
          <FaBell /> Hop-On Hop-Off Tours
        </p>
        <div className="cards w-full my-4">
           <div className="nested_cards">

           <Slider {...settings}>
               {dammyDataSingleBus.map(value =>{
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
  
                        <del className="text-lg"><span> ${value.regularPrice}</span></del>    
                    </div>
                    <div className="line"></div>
                    <div className="flex flex-col justify-center items-center text-primary">
                       <h5>Deal from</h5>
                        <p className="text-lg">${value.adultPrice}</p>    
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
               {/* <div className="box">
                <img src={img1} alt="img1"/>
              <div className="card_content m-2">
                <h1 className="text-lg text-center font-medium mx-3">Holiday Lights Christmas New York City Sightseeing Tour</h1>
                <p className="text-center text-xs text-primary rounded-3xl border-2 w-44 my-2 mx-auto border-primary border-solid p-2">
                Online Deal Save 30%
        </p>
                <div className="price-package flex text-sm my-2 justify-center items-center gap-3">
                  <div className="amount_section flex flex-col justify-center items-center pl-5">
                     <h5>Regular</h5>

                      <del className="text-lg"><span> $109.00</span></del>    
                  </div>
                  <div className="line"></div>
                  <div className="flex flex-col justify-center items-center text-primary">
                     <h5>Deal from</h5>
                      <p className="text-lg">$109.00</p>    
                  </div>
                </div>
                <div>
                 <ul className="list_section text-sm pl-5 my-2">
                 <li className="pl-6 text-base font-medium">Included Tour</li>

                    <li><FaCheckCircle className="text-primary" /> Exclusive Gifts</li>
                    <li><FaCheckCircle className="text-primary" />Cozy Blankets and Warm Hats</li>
                    <li><FaCheckCircle className="text-primary" />Chocholate Tea Delight</li>
                    <li><FaCheckCircle className="text-primary" />Iconic Landmarks</li>
                    <li><FaCheckCircle className="text-primary" />Experts Guides and Narration</li>
                    <li><FaCheckCircle className="text-primary" />Festive Atmosphere</li>
                    <li><FaCheckCircle className="text-primary" />Awe-Inspiring Decorations</li>
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
                <h1 className="text-lg text-center font-medium mx-3">Hop-on Hop Off Downtown Tour</h1>
                <p className="text-center text-xs text-primary rounded-3xl border-2 w-44 my-2 mx-auto border-primary border-solid p-2">
                Online Deal Save 31%
        </p>
                <div className="price-package flex text-sm my-2 justify-center items-center gap-3">
                  <div className="amount_section flex flex-col justify-center items-center pl-5">
                     <h5>Regular</h5>
                      <del className="text-lg"><span> $95.00</span></del>    
                  </div>
                  <div className="line"></div>
                  <div className="flex flex-col justify-center items-center text-primary">
                     <h5>Deal From</h5>
                      <p className="text-lg">$49.00</p>    
                  </div>
                </div>
                <div>
                 <ul className="list_section text-sm pl-5 my-2">
                 <li className="pl-6 text-base font-medium">Sight and connection includes</li>

                    <li><FaCheckCircle className="text-primary" /> Times Square</li>
                    <li><FaCheckCircle className="text-primary" />Broadway Theaters</li>
                    <li><FaCheckCircle className="text-primary" />Madam Tussaud</li>
                    <li><FaCheckCircle className="text-primary" />Macy's </li>
                    <li><FaCheckCircle className="text-primary" />Herald Square</li>
                    <li><FaCheckCircle className="text-primary" />Madison Square Garden Penn Station</li>
                    <li><FaCheckCircle className="text-primary" />Empire State Building</li>
                    <li><FaCheckCircle className="text-primary" />Flatiron Building </li>
                 </ul>
                </div>
                <div className="btn_buy px-4">
              <button className="w-full bg-primary py-1 rounded-xl text-base text-white">Book Now </button>
                </div>
              </div>
              </div>
              <div className="box">
                <img src={img1} alt="img1"/>
              <div className="card_content m-2">
                <h1 className="text-lg text-center font-medium mx-3">Hop-on Hop Off Uptown Tour</h1>
                <p className="text-center text-xs text-primary rounded-3xl border-2 w-44 my-2 mx-auto border-primary border-solid p-2">
                Online Deal Save 35%
        </p>
                <div className="price-package flex text-sm my-2 justify-center items-center gap-3">
                  <div className="amount_section flex flex-col justify-center items-center pl-5">
                     <h5>Regular</h5>
                      <del className="text-lg"><span> $80.00</span></del>    
                  </div>
                  <div className="line"></div>
                  <div className="flex flex-col justify-center items-center text-primary">
                     <h5>Deal From</h5>
                      <p className="text-lg">$49.00</p>    
                  </div>
                </div>
                <div>
                 <ul className="list_section text-sm pl-5 my-2">
                 <li className="pl-6 text-base font-medium">Sight and connection includes:</li>

                    <li><FaCheckCircle className="text-primary" /> The Lion King Theater District</li>
                    <li><FaCheckCircle className="text-primary" />New Years Eve Ball</li>
                    <li><FaCheckCircle className="text-primary" />American Museum of Natural History</li>
                    <li><FaCheckCircle className="text-primary" />The Museums of the City of New York</li>
                    <li><FaCheckCircle className="text-primary" />Lincoln center for Performing Arts</li>
                    <li><FaCheckCircle className="text-primary" />The Guggenheim Museum</li>
                    <li><FaCheckCircle className="text-primary" />El Museo de Barno</li>
                    <li><FaCheckCircle className="text-primary" />The Metropolitan Museum of Arts</li>
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
                <h1 className="text-lg text-center font-medium mx-3">Hop-on Hop-off Harlem Tour</h1>
                <p className="text-center text-xs text-primary rounded-3xl border-2 w-44 my-2 mx-auto border-primary border-solid p-2">
                Online Deal Save 28%
        </p>
                <div className="price-package flex text-sm my-2 justify-center items-center gap-3">
                  <div className="amount_section flex flex-col justify-center items-center pl-5">
                     <h5>Regular</h5>
                      <del className="text-lg"><span> $100.00</span></del>    
                  </div>
                  <div className="line"></div>
                  <div className="flex flex-col justify-center items-center text-primary">
                     <h5>Deal From</h5>
                      <p className="text-lg">$49.00</p>    
                  </div>
                </div>
                <div>
                 <ul className="list_section text-sm pl-5 my-2">
                    <li className="pl-6 text-base font-medium">Sight and connection includes:</li>
                    <li><FaCheckCircle className="text-primary"  /> 125th Street</li>
                    <li><FaCheckCircle className="text-primary" />Apollo Theater</li>
                    <li><FaCheckCircle className="text-primary" />Amc Magic</li>
                    <li><FaCheckCircle className="text-primary" />Studio Museum in Harlem</li>
                    <li><FaCheckCircle className="text-primary" />Abyssinian Baptist Church</li>
                    <li><FaCheckCircle className="text-primary" />Schombug Center for research in Black Culture</li>
                    <li><FaCheckCircle className="text-primary" />Malcom X Boulevard</li>
                    <li><FaCheckCircle className="text-primary" />The National Jazz Museum in Harlem</li>
                 </ul>
                </div>
                <div className="btn_buy px-4 ">
              <button className="w-full bg-primary py-1 rounded-xl text-base text-white">Book Now</button>
                </div>
              </div>
              </div> */}
           </Slider>

           </div>
        </div>
      </div>
    </div>
  );
};
