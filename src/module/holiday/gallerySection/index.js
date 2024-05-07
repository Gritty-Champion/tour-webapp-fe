import React from "react";
import "./index.css";
import enjoyment from "../../../assest/images/north-pole/iconic holiday lights 2.jpeg";
import chrimtas1 from "../../../assest/images/north-pole/iconic holiday lights 7.jpeg";
import selling_img from "../../../assest/images/north-pole/iconic holiday lights 8.jpeg";
import northpool from "../../../assest/images/north-pole/iconic holiday lights 6.jpeg";
import children from "../../../assest/images/north-pole/iconic holiday lights 9.jpeg";

export const GallerySection = () => {
  return (
    <div className="w-full">
      <div className="w-4/5 mx-auto my-4 galler-section">
        <div className="content_imge">
          <h1 className="text-center text-primary text-4xl">
            {" "}
            <span> Holiday Lights</span> <br /> by Iconic Tours
          </h1>
          <div className="img_gallery my-8">
            <div className="w-full h-full">
              <img
                src={enjoyment}
                alt="enjoyment"
                className="w-full rounded-l-xl"
              />
            </div>
            <div className="flex flex-col gap-2 h-full gallery_two">
              <img src={chrimtas1} alt="chrimtas1"/>
              <img src={selling_img} alt="selling_img" />
            </div>
            <div className="flex flex-col gap-2 h-full gallery_three north-pole">
              <img src={northpool} alt="northpool" className="rounded-tr-xl"  />
              <img src={children} alt="children" className="rounded-br-xl"  />
            </div>
          </div>
        </div>
        <div className="text-black w-3/4 mx-auto para_gallery">
          <p className="py-1">
            It’s the most wonderful time of the year to visit the Big Apple, so
            get your whole family on the Nice List with a round trip ticket to
            our very own North Pole NYC.
          </p>
          <p className="py-1">
            Take in the sights of New York’s winter wonderland, hear thrilling
            Christmas stories from our very own resident elf, and enjoy
            chocolate treats and hot cocoa on your way to see Saint Nick. Tell
            Santa your deepest wishes and get a special good luck sleigh bell -
            all for a holiday experience you’ll cherish forever.
          </p>
          <div className="my-4 flex justify-center">
          <button className='py-2 px-4 w-48  bg-primary text-white rounded-3xl'>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
