import React from "react";
import "./index.css";
import { FaCheck } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

export const Benefits = () => {
  return (
    <div className="benefits_section w-full">
      <div className="nested_benefits_section w-1/2 mx-auto text-black">
        <h1 className="text-2xl my-4 text-center">
        "What makes the Holiday Lights Tour an ideal choice with Iconic Tours?"
        </h1>
        <div>
          <ul className="my-4">
            <li>
              <FaCheck />
              Embark on an exciting and fun filled journey all arounf New York and have a magical encounter with Santa!
            </li>
            <li>
              <FaCheck />
              Experience the enchantment of Christmas alongside Santa in the heart of NYC.
            </li>
            <li>
              <FaCheck />
              Experience festive delights like Christmas carol singing,storytelling, and a plethora of engaging children's activities on the enchanting Holiday Lights tour
            </li>
            <li>
              <FaCheck />
              Marvel at the dazzling Christmas lights towering above the bustling crowd.
            </li>
            <li>
              <FaCheck />
              Enjoy our prepared comforts: a cozy blanket, steaming hot chocolate, and snug winter hats to keep you warm.
            </li>
            <li>
              <FaCheck />
              Craft an unforgettable Holiday adventure for kids to cherish forever
            </li>
          </ul>
        </div>
      </div>
      <div className="banner_info w-4/5 mx-auto text-black my-4">
        <div className="w-3/5 mx-auto">
          <h1 className="text-xl my-1 text-center">
            Booking For A Group Of 20 Or More?
          </h1>
          <p>
          we adore hosting big gatherings, for an exclusive Holiday Tour adventure, reach out to us!
          </p>
          <div className="number_section">
               <ul className="flex gap-5 py-1">
                <li className="flex gap-2 items-center"><IoCallSharp /> contact@newyorkiconiccruises.com</li>
                <li className="flex gap-2 items-center"> <MdOutlineEmail/> @newyorkiconiccruises.com</li>
               </ul>
          </div>
        </div>
        
      </div>
      <div className="w-4/5 mx-auto text-black my-2 desc_galllery">
        <p>The Holiday Lights Tour by Iconic Tours goes ahead irrespective of weather conditions. Tickets are non-refundable.</p>
        </div>
    </div>
  );
};
