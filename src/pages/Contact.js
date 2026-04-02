import React from 'react';

/**
 * Contact page providing a simple form for visitors to get in touch with the
 * organization. This form is non‑functional and meant for demonstration.
 */
const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="mb-6">
        NeZha Academy is based in Silicon Valley, California. Feel free to reach out to us using the form below or send an email to{' '}
        <a href="mailto:info@nezhaacademy.org" className="text-blue-600 underline">info@nezhaacademy.org</a>.
      </p>
      <form className="max-w-md mx-auto space-y-4">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;