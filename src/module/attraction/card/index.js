import React from "react";
import "./index.css";
import usa_flag from "../../../assest/images/usa_flag.png";
import mueseum from "../../../assest/images/museum.jpg";
import market from "../../../assest/images/market.jpeg";
import stage_door from "../../../assest/images/stageDoor.jpeg";
import shop_corner from "../../../assest/images/shop_corner.jpeg";
import uni from "../../../assest/images/uni.jpeg";
import white_house from "../../../assest/images/white_house.jpeg";
import { useNavigate } from "react-router-dom";


// 
export const CardAttractions = () => {

  let navigate=useNavigate();

  return (
    <div className="w-full">
      <div className="card-section_attractions mb-6">
        <div className="card_body text-black">
          <img src={usa_flag} alt={"usa_flag"} />
          <div className="flex flex-col gap-4 p-4">
            <h5 className="text-lg">5th Avenue Shops: NYC’s World-Fam...</h5>
            <p>The part of 5th Avenue that runs through Midtown Manhattan...</p>
            <button onClick={() => navigate("/detail-Section")}>Read More</button>
          </div>
        </div>

        <div className="card_body text-black">
          <img src={mueseum} alt={"mueseum"} />
          <div className="flex flex-col gap-4 p-4">
            <h5 className="text-lg">5th Avenue Shops: NYC’s World-Fam...</h5>
            <p>The part of 5th Avenue that runs through Midtown Manhattan...</p>
            <button onClick={() => navigate("/detail-Section")}>Read More</button>
          </div>
        </div>

        <div className="card_body text-black">
          <img src={market} alt={"market"} />
          <div className="flex flex-col gap-4 p-4">
            <h5 className="text-lg">5th Avenue Shops: NYC’s World-Fam...</h5>
            <p>The part of 5th Avenue that runs through Midtown Manhattan...</p>
            <button onClick={() => navigate("/detail-Section")}>Read More</button>
          </div>
        </div>

        <div className="card_body text-black">
          <img src={white_house} alt={"white_house"} />
          <div className="flex flex-col gap-4 p-4">
            <h5 className="text-lg">5th Avenue Shops: NYC’s World-Fam...</h5>
            <p>The part of 5th Avenue that runs through Midtown Manhattan...</p>
            <button onClick={() => navigate("/detail-Section")}>Read More</button>
          </div>
        </div>

        <div className="card_body text-black">
          <img src={shop_corner} alt={"shop_corner"} />
          <div className="flex flex-col gap-4 p-4">
            <h5 className="text-lg">5th Avenue Shops: NYC’s World-Fam...</h5>
            <p>The part of 5th Avenue that runs through Midtown Manhattan...</p>
            <button onClick={() => navigate("/detail-Section")}>Read More</button>
          </div>
        </div>

        <div className="card_body text-black">
          <img src={stage_door} alt={"stage_door"} />
          <div className="flex flex-col gap-4 p-4">
            <h5 className="text-lg">5th Avenue Shops: NYC’s World-Fam...</h5>
            <p>The part of 5th Avenue that runs through Midtown Manhattan...</p>
            <button onClick={() => navigate("/detail-Section")}>Read More</button>
          </div>
        </div>

        <div className="card_body text-black">
          <img src={uni} alt={"uni"} />
          <div className="flex flex-col gap-4 p-4">
            <h5 className="text-lg">5th Avenue Shops: NYC’s World-Fam...</h5>
            <p>The part of 5th Avenue that runs through Midtown Manhattan...</p>
            <button onClick={() => navigate("/detail-Section")}>Read More</button>
          </div>
        </div>
      </div>
      <div className="nyc_content my-6 text-black py-8">
        <h1 className="text-center text-2xl  my-4 text-black">The Best Attractions in NYC</h1>
        <p className="text-sm">
          It's impossible to be bored when visiting New York City. The true
          challenge is fitting h3in all of the best sightseeing in NYC in one
          trip. The choices are overwhelming, so we've narrowed down our picks
          for the top NYC attractions to help you get started. But of course,
          with our double-decker bus tours, you don't have to pick just one: You
          can see all of the city's notable sights at a great price.
        </p>
      </div>
    </div>
  );
};
