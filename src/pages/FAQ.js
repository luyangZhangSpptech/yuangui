import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') }
  ];

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
      <h1 className="mb-10 text-4xl font-semibold">{t('faq.title')}</h1>

      <div className="space-y-6">
        {faqs.map((item, index) => (
          <div key={index} className="rounded-[1.5rem] bg-white p-7 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">{item.q}</h2>
            <p className="leading-8 text-[#5d5852]">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;