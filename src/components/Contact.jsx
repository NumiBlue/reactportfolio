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
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-black"> {/* Use 'bg-white' instead of 'bg-black' */}
        <div className="aspect-w-16 aspect-h-9">
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" className="border" /> {/* Add a border class */}
            <label>Email</label>
            <input type="email" name="user_email" className="border" /> {/* Add a border class */}
            <label>Message</label>
            <textarea name="message" className="border" /> {/* Add a border class */}
            <input type="submit" value="Send" className="bg-blue-500 text-white px-4 py-2 rounded" /> {/* Add Tailwind classes for styling */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs; // Export the component properly