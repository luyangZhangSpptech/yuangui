import React, { useState } from 'react';
import faqs from '../data/faqs';

/**
 * FAQ page displays a list of frequently asked questions. Users can toggle
 * each question to reveal its answer. The FAQ data is stored in a separate
 * file for easy maintenance.
 */
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 rounded">
            <button
              className="w-full px-4 py-3 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggle(idx)}
            >
              <span className="font-semibold">{faq.question}</span>
              <span className="text-xl">{openIndex === idx ? '−' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className="px-4 pb-4">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;