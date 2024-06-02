import React from "react";

export const ContactInfo = ({data}) => {
  return (
    <div className="contact_info w-full">
      <div className="nested_contact_info text-black">
        <div className="py-6">
          <h3 className="text-2xl my-4">
           {data?.header}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: data?.paragraph }} />
        </div>
      </div>
    </div>
  );
};
