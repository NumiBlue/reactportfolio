import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
		'service_je146qa', 
		'template_onwopdd', 
		form.current, 'MDDvgzMg015ErbHzA') // Use 'YOUR_USER_ID' instead of 'YOUR_PUBLIC_KEY'
      .then((result) => {
        console.log(result.text);
		console.log("message sent");
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
  <div className="bg-amber-100 min-h-screen flex items-center justify-center">
    <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-black border border-gray-800 text-grey-800">
      <div className="aspect-w-16 aspect-h-9">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="flex flex-col items-center">
            <label className="text-center">Name</label>
            <input
              type="text"
              name="user_name"
              className="bg-amber-100 border border-gray-800 rounded-md p-2 focus:outline-none focus:ring focus:border-amber-100 w-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="text-center">Email</label>
            <input
              type="email"
              name="user_email"
              className=" bg-amber-100 border border-gray-800 rounded-md p-2 focus:outline-none focus:ring focus:border-amber-100 w-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="text-center">Message</label>
            <textarea
              name="message"
              className="bg-amber-100 border border-gray-800 rounded-md p-2 focus:outline-none focus:ring focus:border-amber-100 w-full"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="submit"
              value="Send"
              className="bg-indigo-800 text-grey-800 px-4 py-2 rounded"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
);
};

export default ContactUs; // Export the component properly