import React from 'react'

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    // ...rest of the code...

    setLoading(false);
  }

  return (
    <div className="bg-amber-100 min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 rounded-lg shadow-md bg-black">
        <div className="mb-4">
          <label className="font-bold text-amber-100" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            minLength={3}
            maxLength={150}
            required
            className="p-4 bg-gray-400 border border-gray-100 w-full"
            autoComplete="off"
            id="name"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold text-amber-100" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            minLength={5}
            maxLength={150}
            required
            className="p-4 bg-gray-400 border border-gray-100 w-full"
            autoComplete="off"
            id="email"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold text-amber-100" htmlFor="message">
            Message
          </label>
          <textarea
            rows={4}
            required
            minLength={10}
            maxLength={500}
            name="message"
            className="p-4 bg-gray-400 border border-gray-100 w-full"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 bg-indigo-800 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
