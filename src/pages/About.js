import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
      <h1 className="mb-8 text-4xl font-semibold">{t('about.title')}</h1>
      <div className="space-y-6 text-lg leading-8 text-[#5b5650]">
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
        <p>{t('about.p3')}</p>
      </div>
    </div>
  );
};

export default About;