import type { Program, StaffMember, Testimonial, NewsUpdate, UpcomingEvent } from '@/types';

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

// SWIFT bank details — dfcu Bank (Kampala Road branch)
export const SWIFT_DETAILS = {
  bankName: 'dfcu Bank',
  accountHolder: 'Healthy Steps Foundation',
  accountNumberUsd: '02660018653045',
  accountNumberUgx: '01660018653014',
  swiftBicCode: 'DFCUUGKA',
  branch: 'dfcu Kampala Road',
  branchAddress: '8H7H+HJ6, Kampala Road, Kampala',
} as const;

export const BANK_FEE_USD = 45;

// US donors: checks payable to First Baptist Sweetwater, designated to HSF
export const US_CHECK_DETAILS = {
  payableTo: 'First Baptist Sweetwater',
  memo: 'Healthy Steps Foundation',
  mailingAddress: '3800 Wekiva Rd., Longwood, FL 32779',
} as const;

export const DONATION_AMOUNTS = [25, 50, 100, 250, 500] as const;

// ─── Programs ─────────────────────────────────────────────────────────────────
export const PROGRAMS: Program[] = [
  {
    slug: 'food-closet',
    name: 'Food Closet',
    shortDescription: 'Emergency food support that meets immediate food insecurities for families in need.',
    description:
      'Our food pantry provides emergency food assistance to families facing temporary food insecurities. We understand that mental wellness and physical health are deeply connected. Hunger creates additional stress for families already struggling with mental health challenges, and a family cannot begin to address emotional or spiritual wellness when basic nutritional needs go unmet.\n\nItems are distributed weekly on Saturdays, from 10am to 12 noon, at a location announced the Sunday before. The pantry is stocked with nutritious staples, and we work with each family to assess their immediate needs and provide enough food to help them through their crisis period while they work toward long-term stability. Our approach is respectful and dignified; no family should feel ashamed for needing support during a difficult season.',
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
          'Families reach out to us directly or are referred by a community leader, church, or neighbour when they are facing food insecurity. There is no complicated application; we respond to need.',
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
          'A food package is assembled based on the family\'s size and needs, including staple foods and nutritional items. Everything is done with care and dignity for the families we serve.',
      },
      {
        step: 4,
        title: 'Distribution & Follow-Up',
        description:
          'Food is handed out at the Saturday distribution. We follow up to ensure the family is stabilising and, where appropriate, connect them with other programs like Adult Vocation to build long-term food security.',
      },
    ],
    impact: [
      { value: 'Weekly', label: 'Saturday distribution, 10am to 12 noon' },
      { value: '100%', label: 'Dignity-focused distribution' },
      { value: '6', label: 'Programs working together for families' },
      { value: 'Wakiso', label: 'Serving families across Ndejje Division' },
    ],
    relatedSlugs: ['family-medical', 'children-tuition'],
  },
  {
    slug: 'clothing-closet',
    name: 'Clothing Closet',
    shortDescription: 'A weekly low-cost clothing market, priced from UGX 1,000 per item, that keeps every gift a dignified choice.',
    description:
      'Our clothing closet ensures families have access to basic wardrobe needs. We believe that having proper clothing is essential for mental wellness, self-esteem, and the ability to participate fully in community life, work, and education. When a child cannot attend school because they lack a uniform, or a parent feels unable to seek work due to inadequate clothing, the ripple effect on mental health is real.\n\nItems are for purchase at UGX 1,000 each, with shoes and suitcases up to UGX 10,000, at a weekly market held Saturdays from 10am to 12 noon at a location announced the Sunday before. Every shilling received is treated as a donation back to the foundation. Pricing keeps the closet dignified and sustainable rather than a handout; families choose what they need and pay what they can afford for it, for children, adults, and the elderly alike.',
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
          'We assess the clothing needs of all family members: ages, sizes, school requirements, and seasonal needs, so that every item provided is practical and meaningful.',
      },
      {
        step: 3,
        title: 'Families Select Clothing Items',
        description:
          'Rather than receiving a pre-packed bag, families are able to select items from our closet at UGX 1,000 each (up to UGX 10,000 for shoes and suitcases). This preserves dignity, personal choice, and ensures a good fit for every family member, while every shilling received supports the foundation.',
      },
      {
        step: 4,
        title: 'Weekly Market Access',
        description:
          'The market runs every Saturday from 10am to 12 noon, so families can return as needs change: new school terms, growing children, or seasonal shifts.',
      },
    ],
    impact: [
      { value: 'Weekly', label: 'Saturday market, 10am to 12 noon' },
      { value: 'UGX 1,000', label: 'Per item, up to UGX 10,000 for shoes and suitcases' },
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
      'Education is a pathway to breaking cycles of poverty and mental health struggles. Our tuition assistance program ensures children can remain in school even when families face temporary financial hardships. When a child is sent home for unpaid fees, or worse, drops out entirely, the impact on that child\'s mental health, sense of belonging, and future prospects is severe.\n\nWe provide tuition support on an emergency, temporary basis, covering up to one semester per household rather than every child in the family home. This critical intervention prevents children from dropping out during family crises and maintains their educational progress and sense of normalcy. Fees are paid directly to the school to ensure the funds reach their intended purpose.',
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
          'We pay tuition fees directly to the educational institution, covering up to one semester per family. This removes any risk of diversion and ensures the child stays in class immediately.',
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
      'One adult family member per household, prioritising those already experiencing mental health challenges worsened by economic insecurity. We serve unemployed adults, single parents seeking income, and caregivers who need sustainable skills to support their families.',
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
          'Participants receive hands-on training with experienced local mentors in their chosen skill: farming, tailoring, or mechanics. Training is practical, respectful, and designed around real market needs in Wakiso.',
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
          'We provide job placement support and connections to local market opportunities. Our goal is for every graduate to be generating income, whether employed or self-employed, within a short time of completing training.',
      },
    ],
    impact: [
      { value: 'One Adult', label: 'Per family, focused and intentional support' },
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
      'Physical health and mental wellness are inseparable. Our family medical support program addresses healthcare needs that might otherwise go untreated due to financial barriers, preventing physical ailments from compounding mental health struggles. When a parent is ill and cannot access care, the stress on the entire family deepens. When a child\'s illness goes untreated, their development and education suffer.\n\nWe provide medical assistance on a case-by-case basis, through partnership with local clinics, for families facing health emergencies or unable to access basic healthcare. This includes clinic visits, medications, and essential treatments that support overall family wellness. We also provide mental health treatment support as part of our holistic approach to family care. Healthy Steps Foundation is not a medical organisation and does not operate a treatment facility of its own; we connect families to the right care through trusted local partners.',
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
          'Families contact us when facing a health emergency or when ongoing untreated illness is affecting their wellbeing. We respond promptly, and urgent cases receive priority attention the same day.',
      },
      {
        step: 2,
        title: 'Medical Needs Assessed',
        description:
          'We assess the medical situation compassionately, documenting what care is needed, the urgency, and the estimated costs. Our team works to understand the full picture: physical and mental health together.',
      },
      {
        step: 3,
        title: 'Support Provided Case by Case',
        description:
          'Medical support is provided through our local clinic partners for the immediate need, covering clinic visits, essential medications, or emergency treatment. We pay directly to the healthcare provider where possible.',
      },
      {
        step: 4,
        title: 'Follow-Up to Ensure Recovery',
        description:
          'We follow up to ensure the family\'s health situation has stabilised. Where ongoing care is required, we work with families to plan appropriate next steps and connect them with other support programs.',
      },
    ],
    impact: [
      { value: 'Case-by-Case', label: 'Emergency basis, urgent cases prioritised' },
      { value: 'Direct', label: 'Payment made to healthcare providers' },
      { value: 'Holistic', label: 'Physical and mental health together' },
      { value: 'Same Day', label: 'Response time for urgent cases' },
    ],
    relatedSlugs: ['food-closet', 'resource-materials'],
  },
  {
    slug: 'resource-materials',
    name: 'Resource Materials',
    shortDescription: 'Counseling, financial coaching, and therapeutic and spiritual resources to support holistic family development.',
    description:
      'Knowledge and guided support are as important as meeting a family\'s immediate physical needs. This program brings together our counseling services, financial counseling, therapeutic alternatives, and spiritual and mental wellness materials, all in one holistic bucket of support. We believe mental health cannot be separated from spiritual health, so equipping families with the right people and the right resources matters as much as any material gift.\n\nCounseling with spiritual and mental health professionals is available by appointment only (no walk-ins), provided by volunteers who do not reside on location. Financial counseling helps families build a practical budget and a healthier relationship with money. Therapeutic alternatives, including art, music, and poetic expression, help facilitate mindfulness and relaxation. Written and spiritual resource materials round out the program, available in multiple formats for different literacy levels and learning styles.',
    icon: 'BookOpen',
    image: '/images/program-resource-materials.jpg',
    fund: 'resource-materials',
    whoWeServe:
      'Families across all our programs who benefit from educational and spiritual resources. We also serve community leaders, teachers, and faith leaders who multiply the impact of these materials within their own networks.',
    howItWorks: [
      {
        step: 1,
        title: 'Request an Appointment or Materials',
        description:
          'Families and community members can request counseling, financial counseling, or resource materials at any point. There are no walk-in counseling appointments, so we schedule a time with the right volunteer professional.',
      },
      {
        step: 2,
        title: 'Matched to Family Needs',
        description:
          'We assess what will be most beneficial: spiritual and mental health counseling, financial counseling, therapeutic alternatives like art, music, and poetic expression, or written spiritual and vocational guides, and match support accordingly.',
      },
      {
        step: 3,
        title: 'Delivered With Guidance',
        description:
          'Counseling and therapeutic sessions are held with a volunteer professional, and materials are shared during other program interactions, ensuring families can ask questions and receive guidance rather than just paperwork.',
      },
      {
        step: 4,
        title: 'Ongoing Access',
        description:
          'Families have ongoing access to counseling, financial counseling, and our resource library. Follow-up conversations ensure support is being used and that families understand how to apply it to daily life.',
      },
    ],
    impact: [
      { value: 'By Appointment', label: 'Counseling with volunteer professionals, no walk-ins' },
      { value: 'Financial', label: 'Budgeting and money-relationship counseling' },
      { value: 'Therapeutic', label: 'Art, music, and poetic expression for mindfulness' },
      { value: 'Holistic', label: 'Addressing the whole person, not just one need' },
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
    id: 'isaac-oyirwoth',
    name: 'Isaac Oyirwoth',
    title: 'Director',
    bio: 'Isaac leads Healthy Steps Foundation with a deep commitment to mental health advocacy and holistic family care across Ndejje, Wakiso. He oversees all six programs and ensures every family is served with dignity and purpose.',
    photo: '/Picture1.jpg',
  },
  {
    id: 'sharon-blue',
    name: 'Sharon Blue',
    title: 'Director',
    bio: 'Sharon co-directs the foundation, bringing vision and faith-grounded leadership to the work. She champions the holistic model that connects mental wellness with food security, education, and community support.',
    photo: '/Picture4.jpg',
  },
  {
    id: 'pius-olockywinu',
    name: 'Pius Olockywinu',
    title: 'Secretary',
    bio: 'Pius keeps the foundation running with care and precision — managing communications, records, and day-to-day coordination so the team can focus entirely on the families they serve.',
    photo: '/Picture3.jpg',
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Charles Kasibante',
    location: 'Makerere Kikoni, Kampala',
    quote:
      'It is such a pleasure and a privilege to serve this community of Makerere Kikoni. We thank Healthy Steps Foundation for inviting us to be a part of such a great partnership in serving the people. We have been able to screen and treat people for hypertension and diabetes mellitus. In addition to medical services, through other partnerships the community was also given bags with essential food items. We thank God for enabling all of us to make such a great impact in the community. May God bless whoever donated to this occasion. Bless you all.',
    program: 'Family Medical',
  },
  {
    id: 't2',
    name: 'Patricia Kayeny',
    location: 'Makerere Kikoni Outreach',
    quote:
      'I would like to take this opportunity to thank Healthy Steps Foundation for supporting us with food items, including soap, sugar, cooking oil, and posho, as well as providing medical consultation. Indeed, it was the hand of God, as this support came at the very time I needed it most. I thank you so much, and may God bless you richly.',
    program: 'Food Closet & Family Medical',
  },
];

// ─── Impact Stats ─────────────────────────────────────────────────────────────
export const IMPACT_STATS = [
  { value: 1200, suffix: '+', label: 'Families Served' },
  { value: 6, suffix: '', label: 'Active Programs' },
  { value: 500, suffix: '+', label: 'Children in School' },
  { value: 3, suffix: '+', label: 'Years of Service' },
] as const;

// ─── Upcoming Events ────────────────────────────────────────────────────────────
// Sourced from HSF's community outreach calendar. Community Outreach and Back to
// School rotate between Ndejje, Bukasa, and Makerere Kikoni; the exact village is
// announced the Sunday before, so location stays general until then.
export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    slug: 'back-to-school-oct-3',
    title: 'Back to School Outreach',
    date: '2026-10-03',
    startTime: '10:00',
    endTime: '12:00',
    location: 'Location announced the Sunday before',
    description:
      'School supplies and support to help children head back to class, first come, first served.',
  },
  {
    slug: 'community-outreach-oct-10',
    title: 'Community Outreach',
    date: '2026-10-10',
    startTime: '10:00',
    endTime: '12:00',
    location: 'Location announced the Sunday before',
    description: 'Our regular food and clothing market for families in the community.',
  },
  {
    slug: 'back-to-school-oct-17',
    title: 'Back to School Outreach',
    date: '2026-10-17',
    startTime: '10:00',
    endTime: '12:00',
    location: 'Location announced the Sunday before',
    description:
      'School supplies and support to help children head back to class, first come, first served.',
  },
  {
    slug: 'volunteer-gathering-oct-23',
    title: 'Volunteer Gathering',
    date: '2026-10-23',
    startTime: '17:00',
    endTime: '19:00',
    location: 'HSF office',
    description: 'Volunteers gather to plan and strategise for upcoming community needs.',
  },
];

// ─── News & Fundraising Updates ────────────────────────────────────────────────
export const NEWS_UPDATES: NewsUpdate[] = [
  {
    slug: 'summer-2026-events',
    title: 'Healthy Steps Foundation Events',
    date: '2026-06-13',
    excerpt:
      'From a drumming and paint night in Longwood, Florida to a staple food distribution for 100 villagers in Kampala — recapping recent HSF events, and what is next for back-to-school and Christmas.',
    image: '/images/field/distribution-wide.jpg',
    body: [
      'Thank you for participating and donating to recent Healthy Steps Foundation (HSF) events. On May 23, 2026, our organization sponsored the African Drumming, and Paint and Refreshments events in Longwood, Florida. Both events showcased your talents and provided fun and laughter.',
      'On June 13, 2026, HSF held an event in Kampala, Uganda. The event provided staple food items such as sugar, posho (corn flour), oil, and soap for 100 villagers. Unfortunately, many had to be turned away due to limited inventory.',
      'Planning for future events is already underway. In October we seek to host a back-to-school day and provide paper, pencils, pens, folders, notebooks, backpacks, and binders. In December we are planning a Christmas Extravaganza. Due to the generosity of a local Florida organization, we have been blessed with an assortment of toys. This event will also include a clothing market and a food giveaway. The children will be treated with bouncy houses, face painting, balloon twisting, and ice cream.',
      'It is our hope that with each outreach opportunity the number of families served increases. All of these wonderful events are successful because of your continued prayers and love.',
      "What can you do? First and foremost, we need your prayers. Many of you are aware of the Ebola outbreak that has and continues to impact parts of Africa. Considering Uganda's population of approximately 53 million people, with many living on $1.04 per day, news of such a devastating condition further cripples the economy. Therefore, it is easy to understand why a gift of sugar, posho, oil, and soap is so appreciated.",
      'If you would like to pray and donate, please make checks out to First Baptist Sweetwater Church and put Healthy Steps Foundation on the FOR line. The address to mail your checks is 3800 Wekiva Rd., Longwood, FL 32779.',
    ],
    signOff: { name: 'Isaac Oyirwoth', title: 'Director' },
  },
];
