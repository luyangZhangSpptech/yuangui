import React from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';
import EventAd from '../components/EventAd';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#f7f3ee] text-[#1c1c1c]">
      <section className="border-b border-black/5 bg-[#f7f3ee]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.32em] text-[#8a7f72]">
              {t('home.eyebrow')}
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              {t('home.title')}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5a5650]">
              {t('home.description')}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full bg-[#1d1d1d] px-7 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                {t('home.aboutButton')}
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-[#1d1d1d] transition hover:bg-[#f1ebe3]"
              >
                {t('home.joinButton')}
              </Link>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white p-3 shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
              <img
                src={heroImg}
                alt={t('brand.name')}
                className="h-[340px] w-full rounded-[1.5rem] object-cover md:h-[420px] lg:w-[480px]"
              />
            </div>
          </div>
        </div>
      </section>

      <EventAd />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8a7f72]">
              {t('home.whoWeAreEyebrow')}
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              {t('home.whoWeAreTitle')}
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-[#57524d]">
            <p>{t('home.whoWeAreP1')}</p>
            <p>{t('home.whoWeAreP2')}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="mb-10">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8a7f72]">
              {t('home.highlightsEyebrow')}
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              {t('home.highlightsTitle')}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] bg-[#f7f3ee] p-8">
              <h3 className="mb-4 text-2xl font-semibold">{t('home.card1Title')}</h3>
              <p className="leading-8 text-[#5e5953]">{t('home.card1Text')}</p>
            </div>

            <div className="rounded-[1.75rem] bg-[#f7f3ee] p-8">
              <h3 className="mb-4 text-2xl font-semibold">{t('home.card2Title')}</h3>
              <p className="leading-8 text-[#5e5953]">{t('home.card2Text')}</p>
            </div>

            <div className="rounded-[1.75rem] bg-[#f7f3ee] p-8">
              <h3 className="mb-4 text-2xl font-semibold">{t('home.card3Title')}</h3>
              <p className="leading-8 text-[#5e5953]">{t('home.card3Text')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="rounded-[2rem] bg-[#1d1d1d] px-8 py-14 text-white md:px-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/55">
                {t('home.ctaEyebrow')}
              </p>
              <h2 className="mb-4 text-3xl font-semibold md:text-5xl">
                {t('home.ctaTitle')}
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/75">
                {t('home.ctaText')}
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                {t('home.ctaContact')}
              </Link>

              <Link
                to="/faq"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                {t('home.ctaLearnMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
