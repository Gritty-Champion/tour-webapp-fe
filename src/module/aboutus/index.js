import React from 'react'
import Slider from "react-slick";
import img2 from "../../assest/images/img2.jpg";
import img3 from "../../assest/images/img3.jpeg";
import img4 from "../../assest/images/img3.jpg";
import about from "../../assest/images/about.jpg"
import "./index.css";
import { Image } from '@mui/icons-material';
import { baseFileUrl } from '../../config/constant';

export const AboutUsSection = ({data}) => {
    const url = `${baseFileUrl}${data?.imageUrl}`
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
    <div className='aboutus_section w-full'>
      <div className='nested_aboutus w-4/5 mx-auto'>
          <div className='text-black'>
             <h1 className='text-4xl text-center my-6'>About Us</h1> 
             <div className='aboutus_slider w-full mx-auto'>
                <div className='nested_cards_about'>
                <img src={url}/>
             </div>
          </div>
          <div className='content-section'>
         
          </div>
          </div>
      </div>
    </div>
  )
}

