import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Programs = () => {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
      <h1 className="mb-10 text-4xl font-semibold">{t('programs.title')}</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[1.75rem] bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">{t('programs.card1Title')}</h2>
          <p className="leading-8 text-[#5d5852]">{t('programs.card1Text')}</p>
        </div>

        <div className="rounded-[1.75rem] bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">{t('programs.card2Title')}</h2>
          <p className="leading-8 text-[#5d5852]">{t('programs.card2Text')}</p>
        </div>

        <div className="rounded-[1.75rem] bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-semibold">{t('programs.card3Title')}</h2>
          <p className="leading-8 text-[#5d5852]">{t('programs.card3Text')}</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;