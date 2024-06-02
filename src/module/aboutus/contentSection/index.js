import React from "react";
import "./index.css";

export const AboutContentSection = ({data}) => {
  return (
    <div className="w-full bg-white">
      <div className="w-4/5 mx-auto py-5 text-black">
        <h1 className="text-center text-2xl text-primary">{data?.subHeading1}</h1>
        <div dangerouslySetInnerHTML={{ __html: data?.paragraph1 }} />
       

      </div>
      <div className="w-4/5 mx-auto py-5 text-black">
        <h1 className="text-center text-2xl text-primary">{data?.subHeading2}</h1>
        <div dangerouslySetInnerHTML={{ __html: data?.paragraph2 }} />
      </div>
    </div>
  );
};
