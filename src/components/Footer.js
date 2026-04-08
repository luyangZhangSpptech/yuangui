import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-[#5d5852] md:px-10">
        © {new Date().getFullYear()} {t('footer.copyright')}
      </div>
    </footer>
  );
};

export default Footer;