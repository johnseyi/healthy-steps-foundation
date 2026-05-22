export type DonationType = 'one-time' | 'recurring';
export type RecurringFrequency = 'monthly' | 'quarterly' | 'annually';
export type DonationFund =
  | 'food-closet'
  | 'clothing-closet'
  | 'children-tuition'
  | 'adult-vocation'
  | 'family-medical'
  | 'resource-materials'
  | 'where-needed-most';

export interface DonationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  country: string;
  type: DonationType;
  recurringFrequency?: RecurringFrequency;
  amount: number;
  fund: DonationFund;
  coverBankFee: boolean;
  donationAmount: number;
  bankFee: number;
  totalAmount: number;
}

export interface ProgramStep {
  step: number;
  title: string;
  description: string;
}

export interface ProgramImpactStat {
  value: string;
  label: string;
}

export interface Program {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  fund: DonationFund;
  whoWeServe: string;
  howItWorks: ProgramStep[];
  impact: ProgramImpactStat[];
  relatedSlugs: string[];
}

export interface StaffMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  photo?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  photo?: string;
  program?: string;
}
