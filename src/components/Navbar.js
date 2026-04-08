import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/yglogo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const navItemClass = ({ isActive }) =>
    `py-2 text-base font-semibold transition ${
      isActive ? 'text-[#a61d24]' : 'text-[#1d1d1d] hover:text-[#a61d24]'
    }`;

  const mobileNavWrapper = `${
    isOpen ? 'flex' : 'hidden'
  } absolute left-0 top-full w-full flex-col border-b border-black/5 bg-white px-6 py-4 sm:static sm:flex sm:w-auto sm:flex-row sm:items-center sm:gap-6 sm:border-0 sm:bg-transparent sm:p-0`;

  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">

        {/* 🔥 LOGO + BRAND */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="YuanGui Theater Logo"
            className="h-16 w-auto object-contain"
          />
          <span className="text-xl font-semibold text-[#1d1d1d]">
            {t('brand.name')}
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Nav Links */}
        <div className={mobileNavWrapper}>
          <NavLink to="/" end className={navItemClass} onClick={() => setIsOpen(false)}>
            {t('nav.home')}
          </NavLink>

          <NavLink
            to="/shows/rashomon"
            className={navItemClass}
            onClick={() => setIsOpen(false)}
          >
            {t('nav.show')}
          </NavLink>

          <NavLink to="/about" className={navItemClass} onClick={() => setIsOpen(false)}>
            {t('nav.about')}
          </NavLink>

          <NavLink to="/programs" className={navItemClass} onClick={() => setIsOpen(false)}>
            {t('nav.programs')}
          </NavLink>

          <NavLink to="/community" className={navItemClass} onClick={() => setIsOpen(false)}>
            {t('nav.community')}
          </NavLink>

          <NavLink to="/faq" className={navItemClass} onClick={() => setIsOpen(false)}>
            {t('nav.faq')}
          </NavLink>

          <NavLink to="/contact" className={navItemClass} onClick={() => setIsOpen(false)}>
            {t('nav.contact')}
          </NavLink>

          {/* 🌍 Language Switch */}
          <div className="mt-3 flex items-center gap-2 sm:mt-0 sm:ml-2">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                lang === 'en'
                  ? 'bg-[#1d1d1d] text-white'
                  : 'bg-[#f3ede6] text-[#1d1d1d] hover:bg-[#e8e0d6]'
              }`}
            >
              EN
            </button>

            <button
              type="button"
              onClick={() => setLang('zh')}
              className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                lang === 'zh'
                  ? 'bg-[#1d1d1d] text-white'
                  : 'bg-[#f3ede6] text-[#1d1d1d] hover:bg-[#e8e0d6]'
              }`}
            >
              中
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;