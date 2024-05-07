import React from 'react';
import "./index.css";
import enjoyment from "../../../../assest/images/enjoyment.jpg";
import chrimtas1 from "../../../../assest/images/christmas1.jpg";
import selling_img from "../../../../assest/images/selling_img.jpg";
import northpool from "../../../../assest/images/north_pool.jpg";
import children from "../../../../assest/images/children.jpg";



export const GalleryDownTownLibrary = () => {
  return (
    <div className="gallery_section w-4/5 mx-auto py-8">
        <h1 className='text-2xl text-black py-2'>Hop-On Hop-Off Pass 24 Hours + Liberty Cruise</h1>
         <div className="img_gallery mb-4">
            
            <div className="w-full h-full">
              <img
                src={enjoyment}
                alt="enjoyment"
                className="w-full rounded-l-xl"
              />
            </div>
            <div className="flex flex-col gap-1 h-full">
              <img src={chrimtas1} alt="chrimtas1" />
              <img src={selling_img} alt="selling_img" />
            </div>
            <div className="flex flex-col gap-1 h-full">
              <img src={northpool} alt="northpool" className="rounded-tr-xl" />
              <img src={children} alt="children" className="rounded-br-xl" />
            </div>
          </div>
    </div>
  )
}

