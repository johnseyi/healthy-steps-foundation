'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle, Send, Loader2 } from 'lucide-react';
import { contactSchema, type ContactFormValues } from '@/lib/validations';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ORG } from '@/lib/constants';

const SUBJECT_OPTIONS = [
  { value: 'get-help', label: 'Get Help / Apply for Support' },
  { value: 'donate', label: 'Donate / Financial Support' },
  { value: 'partnership', label: 'Partnership / Collaboration' },
  { value: 'volunteer', label: 'Volunteer with Us' },
  { value: 'general', label: 'General Enquiry' },
  { value: 'media', label: 'Media / Press' },
] as const;

export default function ContactForm(): React.JSX.Element {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactFormValues): Promise<void> => {
    await new Promise<void>((resolve) => setTimeout(resolve, 800));
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl p-10 shadow-md text-center">
        <div className="w-16 h-16 bg-forest-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} className="text-forest-green-500" />
        </div>
        <h3 className="text-2xl font-bold font-serif text-warm-gray-900 mb-3">
          Message Received
        </h3>
        <p className="text-warm-gray-600 leading-relaxed mb-2">
          Thank you for reaching out to Healthy Steps Foundation. We&apos;ll get back to you as soon as possible.
        </p>
        <p className="text-warm-gray-500 text-sm">
          For urgent matters, call us directly at{' '}
          <a
            href={`tel:${ORG.phone[0]}`}
            className="text-forest-green-600 font-medium hover:underline"
          >
            {ORG.phone[0]}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl p-8 shadow-md space-y-6"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          id="name"
          label="Full Name"
          placeholder="Your full name"
          error={errors.name?.message}
          {...register('name')}
        />
        <Input
          id="email"
          type="email"
          label="Email Address"
          placeholder="you@example.com"
          error={errors.email?.message}
          {...register('email')}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Input
          id="phone"
          type="tel"
          label="Phone (optional)"
          placeholder="+256 ..."
          {...register('phone')}
        />

        <div className="space-y-1.5">
          <label htmlFor="subject" className="block text-sm font-medium text-warm-gray-700">
            Subject
          </label>
          <select
            id="subject"
            className={cn(
              'w-full px-4 py-3 border-2 border-warm-gray-200 rounded-lg bg-white',
              'focus:border-forest-green-500 focus:outline-none focus:ring-2 focus:ring-forest-green-100',
              'transition-colors duration-200 text-warm-gray-900',
              errors.subject && 'border-error focus:border-error focus:ring-red-100',
            )}
            defaultValue=""
            {...register('subject')}
          >
            <option value="" disabled>
              Select a subject…
            </option>
            {SUBJECT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p className="text-sm text-error" role="alert">
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-sm font-medium text-warm-gray-700">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us how we can help…"
          className={cn(
            'w-full px-4 py-3 border-2 border-warm-gray-200 rounded-lg',
            'focus:border-forest-green-500 focus:outline-none focus:ring-2 focus:ring-forest-green-100',
            'transition-colors duration-200 placeholder:text-warm-gray-400',
            'text-warm-gray-900 bg-white resize-none',
            errors.message && 'border-error focus:border-error focus:ring-red-100',
          )}
          {...register('message')}
        />
        {errors.message && (
          <p className="text-sm text-error" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
