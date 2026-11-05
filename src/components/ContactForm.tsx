'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CtaButton from '@/components/CtaButton';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setFormSubmitted(true);
    reset();

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="border border-white/10 bg-card p-6 md:p-8">
      <h2 className="mb-6 text-center font-display text-2xl font-bold text-white">Bize mesaj gönderin</h2>

      {formSubmitted ? (
        <div className="mb-6 border border-emerald/40 bg-emerald/10 p-4 text-center text-white">
          <p>Mesajınız için teşekkürler. En kısa sürede size döneceğiz.</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-white/85">
            Ad Soyad
          </label>
          <input
            id="name"
            type="text"
            className={`w-full rounded-md border bg-[#F7F8FC] px-4 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet ${
              errors.name ? 'border-pink' : 'border-ink/15'
            }`}
            placeholder="Adınız"
            {...register('name', { required: 'Ad Soyad zorunludur' })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-pink-soft">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-white/85">
            E-posta
          </label>
          <input
            id="email"
            type="email"
            className={`w-full rounded-md border bg-[#F7F8FC] px-4 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet ${
              errors.email ? 'border-pink' : 'border-ink/15'
            }`}
            placeholder="siz@example.com"
            {...register('email', {
              required: 'E-posta zorunludur',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Geçerli bir e-posta adresi girin',
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-pink-soft">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="mb-1 block text-sm font-medium text-white/85">
            Konu
          </label>
          <input
            id="subject"
            type="text"
            className={`w-full rounded-md border bg-[#F7F8FC] px-4 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet ${
              errors.subject ? 'border-pink' : 'border-ink/15'
            }`}
            placeholder="Size nasıl yardımcı olabiliriz?"
            {...register('subject', { required: 'Konu zorunludur' })}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-pink-soft">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-white/85">
            Mesaj
          </label>
          <textarea
            id="message"
            rows={5}
            className={`w-full rounded-md border bg-[#F7F8FC] px-4 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet ${
              errors.message ? 'border-pink' : 'border-ink/15'
            }`}
            placeholder="Mesajınızı yazın..."
            {...register('message', {
              required: 'Mesaj zorunludur',
              minLength: {
                value: 10,
                message: 'Mesaj en az 10 karakter olmalıdır',
              },
            })}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-pink-soft">{errors.message.message}</p>
          )}
        </div>

        <div className="flex justify-center">
          <CtaButton as="button" type="submit" icon="mail">
            Mesaj gönder
          </CtaButton>
        </div>
      </form>
    </div>
  );
}
