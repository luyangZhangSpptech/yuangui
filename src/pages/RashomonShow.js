import React, { useEffect, useState } from 'react';
import posterImg from '../assets/rashomon.jpg';
import { useLanguage } from '../context/LanguageContext';

const RashomonShow = () => {
  const { t } = useLanguage();
  const [showTicketPicker, setShowTicketPicker] = useState(false);

  const ticketLinks = {
    afternoon: 'https://event.hellotaro.com/e/2026_ca_lsm_0509_1',
    evening: 'https://event.hellotaro.com/e/2026_ca_lsm_0509_2'
  };

  const handleTicketSelection = (timeSlot) => {
    const url = ticketLinks[timeSlot];
    if (url) {
      const popup = window.open(url, '_blank', 'noopener,noreferrer');
      setShowTicketPicker(false);

      if (!popup) {
        window.location.href = url;
      }
    }
  };

  useEffect(() => {
    if (!showTicketPicker) {
      return undefined;
    }

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setShowTicketPicker(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [showTicketPicker]);

  return (
    <>
      <div className="bg-[#f7f3ee] text-[#1c1c1c]">
        <section className="border-b border-black/5 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8a7f72]">
                {t('showPage.eyebrow')}
              </p>

              <h1 className="mb-4 text-4xl font-semibold leading-tight md:text-6xl">
                {t('showPage.title')}
              </h1>

              <p className="mb-8 max-w-2xl text-lg leading-8 text-[#5b5650]">
                {t('showPage.description')}
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-[#f7f3ee] p-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#8a7f72]">
                    {t('showPage.dateLabel')}
                  </p>
                  <p className="text-lg font-semibold">{t('showPage.dateValue')}</p>
                </div>

                <div className="rounded-[1.5rem] bg-[#f7f3ee] p-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#8a7f72]">
                    {t('showPage.timeLabel')}
                  </p>
                  <p className="text-lg font-semibold">{t('showPage.timeValue')}</p>
                </div>

                <div className="rounded-[1.5rem] bg-[#f7f3ee] p-5 sm:col-span-2">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#8a7f72]">
                    {t('showPage.venueLabel')}
                  </p>
                  <p className="text-lg font-semibold">{t('showPage.venueValue')}</p>
                  <p className="mt-1 text-sm leading-7 text-[#6c675f]">
                    {t('showPage.venueAddress')}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setShowTicketPicker(true)}
                  className="inline-flex items-center justify-center rounded-full bg-[#a61d24] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#8f181e]"
                >
                  {t('showPage.buyButton')}
                </button>

                <a
                  href="#show-info"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-3 text-sm font-semibold text-[#1d1d1d] transition hover:bg-[#f2ebe3]"
                >
                  {t('showPage.infoButton')}
                </a>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="overflow-hidden rounded-[2rem] bg-[#f1ebe4] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
                <img
                  src={posterImg}
                  alt={t('showPage.title')}
                  className="w-full rounded-[1.5rem] object-cover lg:w-[500px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="show-info" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8a7f72]">
                {t('showPage.aboutEyebrow')}
              </p>
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                {t('showPage.aboutTitle')}
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-[#59544e]">
              <p>{t('showPage.aboutP1')}</p>
              <p>{t('showPage.aboutP2')}</p>
            </div>
          </div>
        </section>

        <section className="border-y border-black/5 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <div className="mb-10">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8a7f72]">
                {t('showPage.ticketsEyebrow')}
              </p>
              <h2 className="text-3xl font-semibold md:text-4xl">
                {t('showPage.ticketsTitle')}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] bg-[#f7f3ee] p-8">
                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#8a7f72]">
                  {t('showPage.matineeLabel')}
                </p>
                <h3 className="mb-3 text-3xl font-semibold">{t('showPage.matineeTitle')}</h3>
                <p className="mb-6 leading-8 text-[#5f5a54]">{t('showPage.matineeText')}</p>
                <button
                  type="button"
                  onClick={() => handleTicketSelection('afternoon')}
                  className="inline-flex items-center justify-center rounded-full bg-[#a61d24] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#8f181e]"
                >
                  {t('showPage.matineeButton')}
                </button>
              </div>

              <div className="rounded-[2rem] bg-[#f7f3ee] p-8">
                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-[#8a7f72]">
                  {t('showPage.eveningLabel')}
                </p>
                <h3 className="mb-3 text-3xl font-semibold">{t('showPage.eveningTitle')}</h3>
                <p className="mb-6 leading-8 text-[#5f5a54]">{t('showPage.eveningText')}</p>
                <button
                  type="button"
                  onClick={() => handleTicketSelection('evening')}
                  className="inline-flex items-center justify-center rounded-full bg-[#1d1d1d] px-7 py-3 text-sm font-semibold text-white transition hover:bg-black"
                >
                  {t('showPage.eveningButton')}
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="mb-10">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8a7f72]">
              {t('showPage.visitEyebrow')}
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              {t('showPage.visitTitle')}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-black/5 bg-white p-7">
              <h3 className="mb-3 text-xl font-semibold">{t('showPage.faq1Title')}</h3>
              <p className="leading-8 text-[#5d5852]">{t('showPage.faq1Text')}</p>
            </div>

            <div className="rounded-[1.75rem] border border-black/5 bg-white p-7">
              <h3 className="mb-3 text-xl font-semibold">{t('showPage.faq2Title')}</h3>
              <p className="leading-8 text-[#5d5852]">{t('showPage.faq2Text')}</p>
            </div>

            <div className="rounded-[1.75rem] border border-black/5 bg-white p-7">
              <h3 className="mb-3 text-xl font-semibold">{t('showPage.faq3Title')}</h3>
              <p className="leading-8 text-[#5d5852]">{t('showPage.faq3Text')}</p>
            </div>

            <div className="rounded-[1.75rem] border border-black/5 bg-white p-7">
              <h3 className="mb-3 text-xl font-semibold">{t('showPage.faq4Title')}</h3>
              <p className="leading-8 text-[#5d5852]">{t('showPage.faq4Text')}</p>
            </div>
          </div>
        </section>
      </div>

      {showTicketPicker && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-6"
          role="presentation"
          onClick={() => setShowTicketPicker(false)}
        >
          <div
            className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-6">
              <p className="mb-2 text-sm uppercase tracking-[0.25em] text-[#8a7f72]">
                {t('ticketModal.eyebrow')}
              </p>
              <h3 className="text-2xl font-semibold text-[#1d1d1d]">
                {t('ticketModal.title')}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#66615b]">
                {t('ticketModal.description')}
              </p>
            </div>

            <div className="space-y-4">
              <button
                type="button"
                onClick={() => handleTicketSelection('afternoon')}
                className="flex w-full items-center justify-between rounded-[1.25rem] border border-black/10 px-5 py-4 text-left transition hover:bg-[#f7f3ee]"
              >
                <div>
                  <p className="text-lg font-semibold text-[#1d1d1d]">
                    {t('ticketModal.afternoonTitle')}
                  </p>
                  <p className="text-sm text-[#6a655f]">
                    {t('ticketModal.afternoonSubtitle')}
                  </p>
                </div>
                <span className="text-sm font-semibold text-[#a61d24]">
                  {t('ticketModal.buy')}
                </span>
              </button>

              <button
                type="button"
                onClick={() => handleTicketSelection('evening')}
                className="flex w-full items-center justify-between rounded-[1.25rem] border border-black/10 px-5 py-4 text-left transition hover:bg-[#f7f3ee]"
              >
                <div>
                  <p className="text-lg font-semibold text-[#1d1d1d]">
                    {t('ticketModal.eveningTitle')}
                  </p>
                  <p className="text-sm text-[#6a655f]">
                    {t('ticketModal.eveningSubtitle')}
                  </p>
                </div>
                <span className="text-sm font-semibold text-[#a61d24]">
                  {t('ticketModal.buy')}
                </span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => setShowTicketPicker(false)}
              className="mt-6 w-full rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-[#1d1d1d] transition hover:bg-[#f5efe7]"
            >
              {t('ticketModal.cancel')}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RashomonShow;
