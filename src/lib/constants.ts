import type { Program, StaffMember, Testimonial } from '@/types';

// Organization details
export const ORG = {
  name: 'Healthy Steps Foundation',
  email: 'healthystepsfoundation@gmail.com',
  phone: ['+256756231553', '+256782818734'],
  location: {
    country: 'Uganda',
    region: 'Central Region',
    district: 'Wakiso',
    division: 'Ndejje Division',
    ward: 'Ndejje Ward',
    village: 'Mirimu',
  },
} as const;

// SWIFT bank details — fill in when received from client
export const SWIFT_DETAILS = {
  bankName: '', // PENDING
  accountHolder: 'Healthy Steps Foundation',
  accountNumber: '', // PENDING
  swiftBicCode: '', // PENDING
  branch: '', // PENDING
  branchAddress: '', // PENDING
} as const;

export const BANK_FEE_USD = 45;

// US donors: checks payable to First Baptist Sweetwater, designated to HSF
export const US_CHECK_DETAILS = {
  payableTo: 'First Baptist Sweetwater',
  memo: 'Healthy Steps Foundation',
  mailingAddress: '', // PENDING — mailing address to be confirmed with client
} as const;

export const DONATION_AMOUNTS = [25, 50, 100, 250, 500] as const;

// ─── Programs ─────────────────────────────────────────────────────────────────
export const PROGRAMS: Program[] = [
  {
    slug: 'food-closet',
    name: 'Food Closet',
    shortDescription: 'Emergency food support that meets immediate food insecurities for families in need.',
    description:
      'Our food pantry provides emergency food assistance to families facing temporary food insecurities. We understand that mental wellness and physical health are deeply connected — hunger creates additional stress for families already struggling with mental health challenges. A family cannot begin to address emotional or spiritual wellness when basic nutritional needs go unmet.\n\nThe pantry is stocked with nutritious staples and is available on an as-needed basis. We work with each family to assess their immediate needs and provide enough food to help them through their crisis period while they work toward long-term stability. Our approach is respectful and dignified — no family should feel ashamed for needing support during a difficult season.',
    icon: 'UtensilsCrossed',
    image: '/images/program-food-closet.jpg',
    fund: 'food-closet',
    whoWeServe:
      'Families facing temporary food insecurity due to job loss, illness, or crisis. We serve single-parent households, elderly-headed families caring for grandchildren, and any household where children are at risk of going hungry.',
    howItWorks: [
      {
        step: 1,
        title: 'Contact Us',
        description:
          'Families reach out to us directly or are referred by a community leader, church, or neighbour when they are facing food insecurity. There is no complicated application — we respond to need.',
      },
      {
        step: 2,
        title: 'Needs Assessment',
        description:
          'We assess the family\'s immediate situation in a compassionate, judgment-free conversation. We determine what food items are needed and how best to support them through their current crisis.',
      },
      {
        step: 3,
        title: 'Emergency Food Package Prepared',
        description:
          'A food package is assembled based on the family\'s size and needs — including staple foods and nutritional items. Everything is done with care and dignity for the families we serve.',
      },
      {
        step: 4,
        title: 'Distribution & Follow-Up',
        description:
          'Food is distributed on an as-needed basis. We follow up to ensure the family is stabilising and, where appropriate, connect them with other programs like Adult Vocation to build long-term food security.',
      },
    ],
    impact: [
      { value: 'As-Needed', label: 'Emergency basis — no waiting lists' },
      { value: '100%', label: 'Dignity-focused distribution' },
      { value: '6', label: 'Programs working together for families' },
      { value: 'Wakiso', label: 'Serving families across Ndejje Division' },
    ],
    relatedSlugs: ['family-medical', 'children-tuition'],
  },
  {
    slug: 'clothing-closet',
    name: 'Clothing Closet',
    shortDescription: 'Basic wardrobe essentials provided on an as-needed basis to maintain dignity and confidence.',
    description:
      'Our clothes closet ensures families have access to basic wardrobe needs. We believe that having proper clothing is essential for mental wellness, self-esteem, and the ability to participate fully in community life, work, and education. When a child cannot attend school because they lack a uniform, or a parent feels unable to seek work due to inadequate clothing, the ripple effect on mental health is real.\n\nItems are available on an as-needed basis and include clothing for all family members — children, adults, and the elderly. We maintain a respectful, dignified distribution process that honors each family\'s choices and preferences. Our goal is never to make families feel like recipients of charity, but partners in building a more stable life.',
    icon: 'Shirt',
    image: '/images/program-clothing-closet.jpg',
    fund: 'clothing-closet',
    whoWeServe:
      'Families facing temporary wardrobe needs due to crisis or hardship. This includes children who need school uniforms to attend class, families recovering from loss, and individuals who lack seasonally appropriate clothing.',
    howItWorks: [
      {
        step: 1,
        title: 'Family Requests Assistance',
        description:
          'Families contact us when they are in need of clothing support. We welcome self-referrals as well as referrals from community leaders, schools, and churches.',
      },
      {
        step: 2,
        title: 'Wardrobe Needs Assessed',
        description:
          'We assess the clothing needs of all family members — ages, sizes, school requirements, and seasonal needs — so that every item provided is practical and meaningful.',
      },
      {
        step: 3,
        title: 'Families Select Clothing Items',
        description:
          'Rather than receiving a pre-packed bag, families are able to select items from our closet. This preserves dignity, personal choice, and ensures a good fit for every family member.',
      },
      {
        step: 4,
        title: 'Seasonal Updates Available',
        description:
          'As needs change — new school terms, growing children, or seasonal shifts — families can return for updated support. We provide clothing on an as-needed basis throughout the year.',
      },
    ],
    impact: [
      { value: 'As-Needed', label: 'Available throughout the year' },
      { value: 'All Ages', label: 'Children, adults, and elderly served' },
      { value: 'Dignity', label: 'Families choose their own items' },
      { value: 'Holistic', label: 'Part of a whole-family care approach' },
    ],
    relatedSlugs: ['food-closet', 'children-tuition'],
  },
  {
    slug: 'children-tuition',
    name: 'Children Tuition',
    shortDescription: 'School tuition assistance to keep children in education, supporting up to one semester per family.',
    description:
      'Education is a pathway to breaking cycles of poverty and mental health struggles. Our tuition assistance program ensures children can remain in school even when families face temporary financial hardships. When a child is sent home for unpaid fees — or worse, drops out entirely — the impact on that child\'s mental health, sense of belonging, and future prospects is severe.\n\nWe provide tuition support on an as-needed, emergency basis — covering up to one semester per family. This critical intervention prevents children from dropping out during family crises and maintains their educational progress and sense of normalcy. Fees are paid directly to the school to ensure the funds reach their intended purpose.',
    icon: 'GraduationCap',
    image: '/images/program-children-tuition.jpg',
    fund: 'children-tuition',
    whoWeServe:
      'Children whose families face temporary financial hardship that puts their education at immediate risk. We prioritise children already enrolled who are at risk of being sent home or dropping out due to unpaid school fees.',
    howItWorks: [
      {
        step: 1,
        title: 'Family Applies for Tuition Support',
        description:
          'Families contact us when facing tuition challenges that threaten their child\'s enrolment. We also receive referrals from schools and community leaders when children are at risk.',
      },
      {
        step: 2,
        title: 'Enrolment & Costs Verified',
        description:
          'We verify the child\'s school enrolment and the tuition amount required. This ensures support reaches children who are genuinely at risk and that funds are used as intended.',
      },
      {
        step: 3,
        title: 'Direct Payment to School',
        description:
          'We pay tuition fees directly to the educational institution — covering up to one semester per family. This removes any risk of diversion and ensures the child stays in class immediately.',
      },
      {
        step: 4,
        title: 'Follow-Up & Stability Check',
        description:
          'We follow up with the family to assess whether the crisis has stabilised. Where needed, we connect them with Adult Vocation or other programs to help build longer-term financial resilience.',
      },
    ],
    impact: [
      { value: 'One Semester', label: 'Maximum support per family' },
      { value: 'Emergency', label: 'As-needed, urgent-case priority' },
      { value: 'Direct', label: 'Fees paid straight to schools' },
      { value: 'Holistic', label: 'Paired with family wellness support' },
    ],
    relatedSlugs: ['food-closet', 'resource-materials'],
  },
  {
    slug: 'adult-vocation',
    name: 'Adult Vocational Training',
    shortDescription: 'Vocational skills training for one adult family member in farming, tailoring, or mechanics.',
    description:
      'Economic insecurity is a major contributor to mental health challenges. Our adult vocational program empowers one adult family member with practical skills that lead to sustainable income and long-term family stability. When a parent can provide for their family, the mental health of the entire household improves.\n\nWe offer training in three key areas based on local job market needs: farming techniques, tailoring, and mechanics. Each program provides hands-on training, mentorship, and the tools needed to start generating income. By investing in one family member\'s vocational skills, we create a ripple effect that improves mental wellness for the entire family through increased economic security and restored dignity.',
    icon: 'Briefcase',
    image: '/images/program-adult-vocation.jpg',
    fund: 'adult-vocation',
    whoWeServe:
      'One adult family member per household — prioritising those already experiencing mental health challenges worsened by economic insecurity. We serve unemployed adults, single parents seeking income, and caregivers who need sustainable skills to support their families.',
    howItWorks: [
      {
        step: 1,
        title: 'One Adult Selected Per Family',
        description:
          'One adult family member is selected to participate in the vocational program. We conduct a skills assessment and conversation to match them with the training track that best fits their situation and local opportunities.',
      },
      {
        step: 2,
        title: 'Hands-On Skills Training',
        description:
          'Participants receive hands-on training with experienced local mentors in their chosen skill — farming, tailoring, or mechanics. Training is practical, respectful, and designed around real market needs in Wakiso.',
      },
      {
        step: 3,
        title: 'Tools & Equipment Provided',
        description:
          'Upon completing training, graduates receive the tools or equipment needed to begin practising their skill immediately. This removes a key barrier that prevents many trained individuals from generating income.',
      },
      {
        step: 4,
        title: 'Job Placement Support',
        description:
          'We provide job placement support and connections to local market opportunities. Our goal is for every graduate to be generating income — whether employed or self-employed — within a short time of completing training.',
      },
    ],
    impact: [
      { value: 'One Adult', label: 'Per family — focused, intentional support' },
      { value: '3 Tracks', label: 'Farming, tailoring, and mechanics' },
      { value: 'Tools Provided', label: 'Graduates leave equipped to work' },
      { value: 'Family-Wide', label: 'Ripple effect on whole-family wellness' },
    ],
    relatedSlugs: ['food-closet', 'family-medical'],
  },
  {
    slug: 'family-medical',
    name: 'Family Medical',
    shortDescription: 'Medical support on an as-needed basis to address health emergencies and basic healthcare needs.',
    description:
      'Physical health and mental wellness are inseparable. Our family medical support program addresses healthcare needs that might otherwise go untreated due to financial barriers — preventing physical ailments from compounding mental health struggles. When a parent is ill and cannot access care, the stress on the entire family deepens. When a child\'s illness goes untreated, their development and education suffer.\n\nWe provide medical assistance on an as-needed basis for families facing health emergencies or unable to access basic healthcare. This includes clinic visits, medications, and essential treatments that support overall family wellness. We also provide mental health treatment support as part of our holistic approach to family care.',
    icon: 'Stethoscope',
    image: '/images/program-family-medical.jpg',
    fund: 'family-medical',
    whoWeServe:
      'Families without the financial means to access healthcare when they need it most. This includes families with children requiring urgent care, pregnant mothers, elderly members, and individuals whose physical health is affecting their mental wellness.',
    howItWorks: [
      {
        step: 1,
        title: 'Family Requests Medical Assistance',
        description:
          'Families contact us when facing a health emergency or when ongoing untreated illness is affecting their wellbeing. We respond promptly — urgent cases receive priority attention the same day.',
      },
      {
        step: 2,
        title: 'Medical Needs Assessed',
        description:
          'We assess the medical situation compassionately, documenting what care is needed, the urgency, and the estimated costs. Our team works to understand the full picture — physical and mental health together.',
      },
      {
        step: 3,
        title: 'Support Provided on As-Needed Basis',
        description:
          'Medical support is provided for the immediate need — covering clinic visits, essential medications, or emergency treatment. We pay directly to the healthcare provider where possible.',
      },
      {
        step: 4,
        title: 'Follow-Up to Ensure Recovery',
        description:
          'We follow up to ensure the family\'s health situation has stabilised. Where ongoing care is required, we work with families to plan appropriate next steps and connect them with other support programs.',
      },
    ],
    impact: [
      { value: 'As-Needed', label: 'Emergency basis — urgent cases prioritised' },
      { value: 'Direct', label: 'Payment made to healthcare providers' },
      { value: 'Holistic', label: 'Physical and mental health together' },
      { value: 'Same Day', label: 'Response time for urgent cases' },
    ],
    relatedSlugs: ['food-closet', 'resource-materials'],
  },
  {
    slug: 'resource-materials',
    name: 'Resource Materials',
    shortDescription: 'Spiritual, mental wellness, and vocational resource materials to support holistic family development.',
    description:
      'Knowledge is power, and access to the right resources can transform lives. Our resource materials program provides families with spiritual guidance, mental wellness education, and vocational training materials that support their holistic development. We believe that mental health cannot be separated from spiritual health — and that equipping families with the right knowledge is as important as meeting their immediate physical needs.\n\nThese resources are carefully selected to address the interconnected aspects of family wellness: spiritual growth, mental health understanding, and practical skills development. Materials are available in multiple formats to ensure accessibility across different literacy levels and learning styles.',
    icon: 'BookOpen',
    image: '/images/program-resource-materials.jpg',
    fund: 'resource-materials',
    whoWeServe:
      'Families across all our programs who benefit from educational and spiritual resources. We also serve community leaders, teachers, and faith leaders who multiply the impact of these materials within their own networks.',
    howItWorks: [
      {
        step: 1,
        title: 'Resources Available on Request',
        description:
          'Families and community members can request resource materials at any point. Materials are also distributed proactively during other program interactions — during food distribution, medical follow-ups, and vocational training.',
      },
      {
        step: 2,
        title: 'Materials Matched to Family Needs',
        description:
          'We assess what type of resources will be most beneficial — spiritual growth materials, mental wellness education, vocational guides, or parenting and family relationship resources — and match materials accordingly.',
      },
      {
        step: 3,
        title: 'Distributed During Program Participation',
        description:
          'Resources are shared during program interactions, ensuring families receive them in a context where they can ask questions and receive guidance. This makes materials more likely to be understood and applied.',
      },
      {
        step: 4,
        title: 'Ongoing Access to Resource Library',
        description:
          'Families have ongoing access to our resource library. Follow-up conversations ensure materials are being used and that families understand how to apply what they have received to their daily lives.',
      },
    ],
    impact: [
      { value: 'Spiritual', label: 'Faith-based guidance for whole-family wellness' },
      { value: 'Mental', label: 'Mental wellness education and awareness' },
      { value: 'Vocational', label: 'Practical skill-building materials' },
      { value: 'Holistic', label: 'Addressing the whole person — not just one need' },
    ],
    relatedSlugs: ['children-tuition', 'family-medical'],
  },
];

export const FUND_LABELS: Record<string, string> = {
  'food-closet': 'Food Closet',
  'clothing-closet': 'Clothing Closet',
  'children-tuition': 'Children Tuition',
  'adult-vocation': 'Adult Vocational Training',
  'family-medical': 'Family Medical',
  'resource-materials': 'Resource Materials',
  'where-needed-most': 'Where Needed Most',
};

// ─── Staff ────────────────────────────────────────────────────────────────────
export const STAFF_MEMBERS: StaffMember[] = [
  {
    id: 'executive-director',
    name: 'To Be Added',
    title: 'Executive Director',
    bio: 'Leads the foundation with a deep commitment to mental health advocacy and community development across Wakiso district.',
    photo: undefined,
  },
  {
    id: 'program-manager',
    name: 'To Be Added',
    title: 'Program Manager',
    bio: 'Oversees all six programs, ensuring each family receives the tailored support they need to thrive.',
    photo: undefined,
  },
  {
    id: 'social-worker',
    name: 'To Be Added',
    title: 'Senior Social Worker',
    bio: 'Works directly with families to assess needs, connect resources, and provide ongoing mental health support.',
    photo: undefined,
  },
  {
    id: 'outreach-coordinator',
    name: 'To Be Added',
    title: 'Community Outreach Coordinator',
    bio: 'Builds relationships with local leaders, schools, and churches to identify and reach the families who need us most.',
    photo: undefined,
  },
  {
    id: 'education-coordinator',
    name: 'To Be Added',
    title: 'Education Coordinator',
    bio: 'Manages the Children Tuition program, working with schools to ensure sponsored children stay enrolled and succeed.',
    photo: undefined,
  },
  {
    id: 'admin',
    name: 'To Be Added',
    title: 'Administrative Officer',
    bio: 'Keeps the foundation running smoothly — managing records, communications, and donor relationships with care.',
    photo: undefined,
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Grace N.',
    location: 'Ndejje, Wakiso',
    quote:
      'The food support from Healthy Steps came at a moment when I did not know how I would feed my children. They treated us with such dignity — no judgment, just kindness.',
    program: 'Food Closet',
  },
  {
    id: 't2',
    name: 'John K.',
    location: 'Mirimu, Wakiso',
    quote:
      'My daughter was about to drop out of school because I could not afford the fees. Because of the Children Tuition program, she is still in class and doing so well.',
    program: 'Children Tuition',
  },
  {
    id: 't3',
    name: 'Sarah M.',
    location: 'Ndejje Division',
    quote:
      'I learned tailoring through the Adult Vocation program. Now I have a small business and I can support my family on my own. Healthy Steps gave me a future.',
    program: 'Adult Vocational Training',
  },
];

// ─── Impact Stats ─────────────────────────────────────────────────────────────
export const IMPACT_STATS = [
  { value: 1200, suffix: '+', label: 'Families Served' },
  { value: 6, suffix: '', label: 'Active Programs' },
  { value: 500, suffix: '+', label: 'Children in School' },
  { value: 3, suffix: '+', label: 'Years of Service' },
] as const;
