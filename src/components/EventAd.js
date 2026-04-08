import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import posterImg from '../assets/rashomon.jpg';
import { useLanguage } from '../context/LanguageContext';

const EventAd = () => {
  const { t } = useLanguage();
  const targetDate = new Date('2026-05-09T15:00:00');

  const getTimeLeft = () => {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      return {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
      };
    }

    return {
      days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0'),
      hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
      minutes: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0'),
      seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, '0')
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#efe8df]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8a7f72]">
              {t('eventAd.eyebrow')}
            </p>

            <h2 className="mb-4 text-4xl font-semibold leading-tight md:text-6xl">
              {t('eventAd.title')}
            </h2>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-[#5a5650]">
              {t('eventAd.description')}
            </p>

            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#8a7f72]">
                  {t('eventAd.dateLabel')}
                </p>
                <p className="text-lg font-semibold">{t('eventAd.dateValue')}</p>
              </div>

              <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#8a7f72]">
                  {t('eventAd.timeLabel')}
                </p>
                <p className="text-lg font-semibold">{t('eventAd.timeValue')}</p>
              </div>

              <div className="rounded-[1.5rem] bg-white p-5 shadow-sm sm:col-span-2">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#8a7f72]">
                  {t('eventAd.venueLabel')}
                </p>
                <p className="text-lg font-semibold">{t('eventAd.venueValue')}</p>
                <p className="mt-1 text-sm leading-7 text-[#6a655f]">
                  {t('eventAd.venueAddress')}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#8a7f72]">
                {t('eventAd.countdownLabel')}
              </p>

              <div className="grid max-w-xl grid-cols-4 gap-3">
                <div className="rounded-[1.25rem] bg-[#1d1d1d] px-4 py-5 text-center text-white">
                  <div className="text-3xl font-semibold">{timeLeft.days}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
                    {t('eventAd.days')}
                  </div>
                </div>

                <div className="rounded-[1.25rem] bg-[#1d1d1d] px-4 py-5 text-center text-white">
                  <div className="text-3xl font-semibold">{timeLeft.hours}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
                    {t('eventAd.hours')}
                  </div>
                </div>

                <div className="rounded-[1.25rem] bg-[#1d1d1d] px-4 py-5 text-center text-white">
                  <div className="text-3xl font-semibold">{timeLeft.minutes}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
                    {t('eventAd.minutes')}
                  </div>
                </div>

                <div className="rounded-[1.25rem] bg-[#1d1d1d] px-4 py-5 text-center text-white">
                  <div className="text-3xl font-semibold">{timeLeft.seconds}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
                    {t('eventAd.seconds')}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/shows/rashomon"
                className="inline-flex items-center justify-center rounded-full bg-[#a61d24] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#8d171d]"
              >
                {t('eventAd.buyButton')}
              </Link>

              <Link
                to="/shows/rashomon"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-[#1d1d1d] transition hover:bg-[#f5efe7]"
              >
                {t('eventAd.viewButton')}
              </Link>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="overflow-hidden rounded-[2rem] bg-white p-4 shadow-[0_24px_60px_rgba(0,0,0,0.10)]">
              <img
                src={posterImg}
                alt={t('eventAd.posterAlt')}
                className="w-full rounded-[1.5rem] object-cover lg:w-[460px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventAd;