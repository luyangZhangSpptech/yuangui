import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import translations from '../i18n/translations.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const getInitialLanguage = () => {
    const saved = localStorage.getItem('site-language');
    if (saved === 'en' || saved === 'zh') {
      return saved;
    }

    const browserLang = navigator.language?.toLowerCase() || '';
    return browserLang.startsWith('zh') ? 'zh' : 'en';
  };

  const [lang, setLang] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('site-language', lang);
  }, [lang]);

  const t = useMemo(() => {
    return (path) => {
      const keys = path.split('.');
      let value = translations[lang];

      for (const key of keys) {
        value = value?.[key];
      }

      return value ?? path;
    };
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);