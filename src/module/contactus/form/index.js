import React, { useState } from 'react';
import './index.css';

export const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    addition: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://api.nyiconictours.com/contactform/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Message sent successfully!');
      // Optionally, reset the form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        addition: ''
      });
    } else {
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className='contact_form w-3/4'>
      <div className='nested_contact_form'>
        <form onSubmit={handleSubmit}>
          <h1 className='text-2xl text-center py-4'>Send A Message</h1>
          <div>
            <input
              type='text'
              name='fullName'
              placeholder='Full Name'
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type='email'
              name='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type='number'
              name='phone'
              placeholder='Phone'
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <textarea
              name='addition'
              cols='5'
              rows='5'
              placeholder='Your Message'
              value={formData.addition}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type='submit' className='bg-primary w-full rounded-md'>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
