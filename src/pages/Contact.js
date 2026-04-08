import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, lang } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject =
      lang === 'zh'
        ? encodeURIComponent(`来自网站的联系表单：${formData.name}`)
        : encodeURIComponent(`Website Contact Form: ${formData.name}`);

    const body =
      lang === 'zh'
        ? encodeURIComponent(
            `姓名: ${formData.name}\n邮箱: ${formData.email}\n\n留言:\n${formData.message}`
          )
        : encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
          );

    window.location.href = `mailto:${t('contact.emailValue')}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <div className="mb-10 max-w-3xl">
        <h1 className="mb-6 text-4xl font-semibold">{t('contact.title')}</h1>
        <p className="text-lg leading-8 text-[#5b5650]">
          {t('contact.description')}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="rounded-[1.75rem] bg-white p-8 shadow-sm">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#8a7f72]">
            {t('contact.emailLabel')}
          </p>

          <a
            href={`mailto:${t('contact.emailValue')}`}
            className="break-all text-xl font-semibold text-[#1d1d1d]"
          >
            {t('contact.emailValue')}
          </a>

          <div className="mt-8 space-y-4 text-sm leading-7 text-[#5d5852]">
            <p>
              {lang === 'zh'
                ? '如果你想加入制作、合作演出、志愿支持，或咨询票务问题，欢迎直接给我们发邮件。'
                : 'If you want to collaborate, join a production, volunteer, or ask about tickets, feel free to reach out.'}
            </p>

            <p>
              {lang === 'zh'
                ? '你也可以直接使用右侧表单，提交后会自动打开你的邮件客户端。'
                : 'You can also use the form on the right. After submitting, your email app will open automatically.'}
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-white p-8 shadow-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-[#1d1d1d]"
              >
                {lang === 'zh' ? '姓名' : 'Name'}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-black/10 bg-[#faf7f2] px-4 py-3 outline-none transition focus:border-[#a61d24]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[#1d1d1d]"
              >
                {lang === 'zh' ? '邮箱' : 'Email'}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-black/10 bg-[#faf7f2] px-4 py-3 outline-none transition focus:border-[#a61d24]"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[#1d1d1d]"
              >
                {lang === 'zh' ? '留言' : 'Message'}
              </label>
              <textarea
                id="message"
                name="message"
                rows="7"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-black/10 bg-[#faf7f2] px-4 py-3 outline-none transition focus:border-[#a61d24]"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[#1d1d1d] px-7 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              {lang === 'zh' ? '发送消息' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;