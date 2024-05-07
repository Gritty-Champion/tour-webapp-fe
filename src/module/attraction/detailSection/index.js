import React from "react";
import "./index.css";
import blogImage from "../../../assest/images/blogImage.png";

export const DetailSection = () => {
  return (
    <div className="w-full text-black">
      <div className="w-4/5 mx-auto py-4 detail_blog_section">
        <h1 className="text-center text-4xl">
          5th Avenue Shops: NYC’s World-Famous Shopping District
        </h1>
        <div className="blog_image my-4">
          <img src={blogImage} alt="blogImage" />
        </div>
        <div className="my-4">
          <p className="">
            <strong>Location:</strong> The stretch of 5th Avenue spanning
            Midtown Manhattan, from 49th Street to 60th Street, is renowned for
            its upscale designer stores, often ranking among the world's most
            expensive shopping districts. While the title of "most expensive
            street" fluctuates, 5th Avenue consistently contends for this
            prestigious label.
          </p>

          <p className="flex flex-col my-4">
            <strong>WHY IS IT SO FAMOUS? </strong> During the 1990s, it boasted
            the priciest retail space per square foot. Forbes recognized it as
            the world's most expensive street in 2008, and its penthouses remain
            highly coveted among the wealthy elite in the city.
          </p>

          <p className="flex flex-col my-4">
            <strong>WHY IS IT SO FAMOUS? </strong> During the 1990s, it boasted
            the priciest retail space per square foot. Forbes recognized it as
            the world's most expensive street in 2008, and its penthouses remain
            highly coveted among the wealthy elite in the city.
          </p>
          <p className="">
            Beyond its reputation for high-end shopping, 5th Avenue boasts
            numerous globally recognized businesses, museums, luxury residences,
            and historical landmarks. In 2012, the American Planning Association
            honored it as one of the country's top locations.
          </p>
          <p className="flex flex-col my-4">
            <strong>What Are the Famous 5th Avenue New York Stores?</strong>
            Among the prominent stores lining 5th Avenue in New York City are
            Lord & Taylor, Armani, Bergdorf Goodman, Henri Bendel, Cartier,
            Ferragamo, Gucci, and the popular American Girl Place. Additionally,
            shops like Free People, Ermenegildo Zegna, Saks Fifth Avenue, and
            St. John Boutique attract substantial crowds, along with
            non-clothing stores like Apple.
          </p>
          <p className="flex flex-col my-4">
            <strong>What Is There to Do on 5th Avenue?</strong>
            Beyond shopping, tourists can explore various attractions along 5th
            Avenue, including the Jewish Museum, Rockefeller Center, the
            American Irish Historical Society, and St. Patrick’s Cathedral. The
            area offers excellent dining options and an array of landmarks for
            those less inclined toward shopping.
          </p>
          <p className="flex flex-col my-4">
            <strong>When Did the Apple Store on 5th Avenue Open? </strong>
            The renowned Apple Store on 5th Avenue opened its doors on May 19,
            2006, gaining fame for its distinctive glass cube design.
          </p>
        </div>
      </div>
    </div>
  );
};
