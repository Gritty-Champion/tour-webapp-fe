import React from "react";
import "./index.css";
export const ContactInfoPrivateHire = ({data}) => {
  return (
    <div className="contact_info w-full">
      <div className="nested_contact_info text-black">
        <h1 className="text-xl">{data?.heading1}</h1>
        <p className="text-sm">
         {data?.paragraph1}
        </p>
        <div className="py-6">
          <h3 className="text-2xl my-4">
          {data?.heading2}
          </h3>
          <div className="clipped-content" dangerouslySetInnerHTML={{ __html: data?.paragraph2 }} />
        </div>
      </div>
    </div>
  );
};
