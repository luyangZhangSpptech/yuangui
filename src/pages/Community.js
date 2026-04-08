import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Community = () => {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:px-10">
      <h1 className="mb-8 text-4xl font-semibold">{t('community.title')}</h1>
      <div className="space-y-6 text-lg leading-8 text-[#5b5650]">
        <p>{t('community.p1')}</p>
        <p>{t('community.p2')}</p>
      </div>
    </div>
  );
};

export default Community;