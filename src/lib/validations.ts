import { z } from 'zod';

export const donationSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  country: z.string().min(1, 'Country is required'),
  type: z.enum(['one-time', 'recurring']),
  recurringFrequency: z.enum(['monthly', 'quarterly', 'annually']).optional(),
  amount: z.number().min(1, 'Please enter a donation amount'),
  fund: z.enum([
    'food-closet',
    'clothing-closet',
    'children-tuition',
    'adult-vocation',
    'family-medical',
    'resource-materials',
    'where-needed-most',
  ]),
  coverBankFee: z.boolean(),
}).refine(
  (data) => {
    if (data.type === 'recurring' && !data.recurringFrequency) {
      return false;
    }
    return true;
  },
  {
    message: 'Please select a recurring frequency',
    path: ['recurringFrequency'],
  },
);

export type DonationFormValues = z.infer<typeof donationSchema>;

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.enum(['get-help', 'donate', 'partnership', 'volunteer', 'general', 'media'], {
    message: 'Please select a subject',
  }),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be under 1000 characters'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
