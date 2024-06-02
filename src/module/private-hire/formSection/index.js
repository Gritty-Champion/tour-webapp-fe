import React, { useState } from "react";
import "./index.css";

export const FormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    pickupLocation: "",
    dropLocation: "",
    additionalRequest: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://api.nyiconictours.com/privatehireform/save",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      alert("Message sent successfully!");
      // Optionally, reset the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        organization: "",
        pickupLocation: "",
        dropLocation: "",
        additionalRequest: "",
      });
    } else {
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="private_form w-3/4">
      <div className="nested_private_form">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl text-center py-4">Send A Message</h1>
          <div className="flex justify-between gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-2">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-2">
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-2">
            <input
              type="text"
              name="organization"
              placeholder="Organization Name/Name of Company"
              value={formData.organization}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-2">
            <input
              type="text"
              name="pickupLocation"
              placeholder="Pick Up Location"
              value={formData.pickupLocation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-2">
            <input
              type="text"
              name="dropLocation"
              placeholder="Drop Off Location"
              value={formData.dropLocation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-2">
            <textarea
              name="additionalRequest"
              cols="30"
              rows="5"
              placeholder="Additional Requests"
              value={formData.additionalRequest}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-2">
            <button type="submit" className="bg-primary w-full rounded-md">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
