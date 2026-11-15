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
      <h2 className="mb-6 text-center font-display text-2xl font-bold text-white">Magpadala ng mensahe sa amin</h2>

      {formSubmitted ? (
        <div className="mb-6 border border-emerald/40 bg-emerald/10 p-4 text-center text-white">
          <p>Salamat sa iyong mensahe. Tutugon kami sa lalong madaling panahon.</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-white/85">
            Buong pangalan
          </label>
          <input
            id="name"
            type="text"
            className={`w-full rounded-md border bg-[#F7F8FC] px-4 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet ${
              errors.name ? 'border-pink' : 'border-ink/15'
            }`}
            placeholder="Iyong pangalan"
            {...register('name', { required: 'Kailangan ang buong pangalan' })}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-pink-soft">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-white/85">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`w-full rounded-md border bg-[#F7F8FC] px-4 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet ${
              errors.email ? 'border-pink' : 'border-ink/15'
            }`}
            placeholder="ikaw@halimbawa.com"
            {...register('email', {
              required: 'Kailangan ang email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Maglagay ng wastong email address',
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-pink-soft">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="mb-1 block text-sm font-medium text-white/85">
            Paksa
          </label>
          <input
            id="subject"
            type="text"
            className={`w-full rounded-md border bg-[#F7F8FC] px-4 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet ${
              errors.subject ? 'border-pink' : 'border-ink/15'
            }`}
            placeholder="Paano ka namin matutulungan?"
            {...register('subject', { required: 'Kailangan ang paksa' })}
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-pink-soft">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-white/85">
            Mensahe
          </label>
          <textarea
            id="message"
            rows={5}
            className={`w-full rounded-md border bg-[#F7F8FC] px-4 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-violet ${
              errors.message ? 'border-pink' : 'border-ink/15'
            }`}
            placeholder="Isulat ang iyong mensahe..."
            {...register('message', {
              required: 'Kailangan ang mensahe',
              minLength: {
                value: 10,
                message: 'Dapat hindi bababa sa 10 character ang mensahe',
              },
            })}
          />
          {errors.message && (
            <p className="mt-1 text-sm text-pink-soft">{errors.message.message}</p>
          )}
        </div>

        <div className="flex justify-center">
          <CtaButton as="button" type="submit" icon="mail">
            Ipadala ang mensahe
          </CtaButton>
        </div>
      </form>
    </div>
  );
}