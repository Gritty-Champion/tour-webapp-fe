import React from "react";

export const ContactInfo = () => {
  return (
    <div className="contact_info w-full">
      <div className="nested_contact_info text-black">
        <h1 className="text-xl">Hop-On Hop-Off® Visitor Center</h1>
        <p className="text-sm">
          We are thrilled that you are interested in reaching out to us. Whether
          you have a question, a suggestion, or just want to say hello, we are
          always happy to hear from you.
        </p>
        <div className="py-6">
          <h3 className="text-2xl my-4">
            Here are some ways to get in touch with us:
          </h3>
          <div>
            <div className="flex flex-col">
              <p>
                <span className="font-semibold">Email:</span> You can send us an
                email at{" "}
                <a
                  href="contact@nyiconictours.com"
                  className="text-blue-400 underline"
                >
                  contact@nyiconictours.com
                </a>
              </p>
              <p>
                We will do our best to respond to your email within 24 hours
              </p>
            </div>
            <div className="flex flex-col">
              <p className="py-2">
                <span className="font-semibold">Phone:</span> If you prefer to
                speak with someone over the phone, you can call us at{" "}
                <a href="800 299 4412" className="text-blue-400 underline">
                  800 299 4412
                </a>
              </p>
            </div>
            <div>
              <p className="py-2">
                Our business hours are 9am to 7pm and we will be happy to assist
                you.
              </p>
              <p className="py-2">
                {" "}
                <span className="font-semibold">Contact form:</span> You can
                also fill out our contact form below. Please provide us with
                your name, email address, and a brief message, and we will get
                back to you as soon as possible.
              </p>
              <p className="py-2">
                {" "}
                <span className="font-semibold">Social media:</span> We are
                active on social media platforms such as [insert social media
                handles]. You can send us a message or tag us in a post and we
                will respond as soon as possible.
              </p>
              <p className="py-2">
                We value your feedback and strive to provide the best possible
                service to our customers. If you have any comments or
                suggestions on how we can improve our products or services,
                please do not hesitate to let us know.
              </p>
              <p className="py-2">
              Thank you for your interest in contacting us. We look forward to hearing from you!


              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
