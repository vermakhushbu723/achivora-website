/**
 * Single source of truth for the marketing site's content.
 * Section order and information architecture mirror the reference layout;
 * all identity, contact and project details are Achivora's own.
 */

/**
 * The one place contact details are defined. Every phone number, email,
 * WhatsApp link and `tel:` / `mailto:` href on the site derives from here —
 * nothing is hard-coded in a component or page.
 */
const PHONE_DISPLAY = '+91 9026170655';
const PHONE_E164 = '+919026170655';
/** Second line, also the WhatsApp number form submissions are sent to. */
const PHONE_ALT_DISPLAY = '+91 8447049584';
const PHONE_ALT_E164 = '+918447049584';
const EMAIL = 'achivora9026@gmail.com';

export const SITE = {
  name: 'Achivora',
  legalName: 'Achivora Technologies Pvt. Ltd.',
  tagline: 'Transforming ideas into innovation',

  /** Display form, e.g. inside a link label. */
  phone: PHONE_DISPLAY,
  /** Dial form, for `tel:` hrefs. */
  phoneHref: `tel:${PHONE_E164}`,

  /** Second line. */
  phoneAlt: PHONE_ALT_DISPLAY,
  phoneAltHref: `tel:${PHONE_ALT_E164}`,

  /** Both numbers, for the places that list every way to reach us. */
  phones: [
    { display: PHONE_DISPLAY, href: `tel:${PHONE_E164}` },
    { display: PHONE_ALT_DISPLAY, href: `tel:${PHONE_ALT_E164}` },
  ],

  email: EMAIL,
  /** Kept as separate keys so copy can still say "sales" / "careers". */
  salesEmail: EMAIL,
  careerEmail: EMAIL,
  emailHref: `mailto:${EMAIL}`,

  /* Chat goes to the WhatsApp line, which is the second number. */
  whatsapp: `https://wa.me/${PHONE_ALT_E164.replace('+', '')}`,

  businessHours: 'Monday - Friday: 9:00 AM - 6:00 PM',
  /**
   * Hero background video. Drop an MP4 at `public/hero-bg.mp4` and it plays
   * behind the headline; if the file is absent the brand gradient shows
   * through instead, so the hero never renders empty.
   */
  heroVideo: '/hero-bg.mp4',
  offices: [
    {
      country: 'Head Office',
      icon: 'MapPin',
      address: 'Noida Sector 62, A Block, Uttar Pradesh, India',
    },
  ],
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61589471525251',
    instagram: 'https://www.instagram.com/achivora9026',
    linkedin: 'https://www.linkedin.com/company/achivora',
    youtube: 'https://www.youtube.com/@achivora',
    twitter: 'https://twitter.com/achivora',
  },
};

/* ── Hero ────────────────────────────────────────────────────────────────── */

export const HERO = {
  eyebrow: 'Web & Software Development Company in Noida, India',
  body:
    'Custom websites, mobile apps, AI solutions and business software — designed, built and supported by one in-house team.',
  primaryCta: { label: 'Our Services', path: '/services' },
  secondaryCta: { label: 'Get a Free Quote', path: '/contact' },
};

/* ── About + stats ───────────────────────────────────────────────────────── */

export const VALUE_PROP = {
  eyebrow: 'About Achivora',
  title: 'Website, App & Software Development Company in India',
  paragraphs: [
    'Achivora is a web design and software development company in Noida Sector 62. Since 2024 we have helped startups and growing businesses across India launch websites, mobile apps, AI tools and business software that customers actually enjoy using.',
    'We start with your business goal, design around it, and only then pick the technology — so what we build is fast, secure, SEO-ready and yours to own.',
  ],
  highlights: [
    'Senior engineers on every project',
    'Fixed quotes agreed before work starts',
    'You own the code, design and hosting',
  ],
};

export const STATS = [
  { value: 35, suffix: '+', label: 'Projects Delivered' },
  { value: 20, suffix: '+', label: 'Cities Served' },
  { value: 98, suffix: '%', label: 'Customer Retention' },
  { value: 2, suffix: '', label: 'Years In Industry' },
];

/* ── Services (home page cards) ──────────────────────────────────────────── */

export const SERVICES = [
  {
    icon: 'Globe',
    title: 'Website Development & Design',
    description: 'Fast, mobile-friendly, SEO-ready websites and web applications built to bring in enquiries.',
    path: '/services/web-development',
    links: [
      { label: 'Web & UI/UX Design', path: '/services/web-design' },
      { label: 'WordPress & CMS', path: '/services/wordpress-development' },
      { label: 'E-commerce Stores', path: '/industries/e-commerce-development' },
    ],
  },
  {
    icon: 'Smartphone',
    title: 'Mobile App Development',
    description: 'Android, iOS, Flutter and React Native apps — from first idea to Play Store and App Store.',
    path: '/services/mobile-app-development',
    links: [
      { label: 'Food & Grocery Delivery Apps', path: '/industries/food-delivery-app-development' },
      { label: 'Taxi & Logistics Apps', path: '/industries/transportation-logistics' },
      { label: 'On-Demand Service Apps', path: '/industries/on-demand-app-development' },
    ],
  },
  {
    icon: 'Brain',
    title: 'AI Development',
    description: 'AI apps, chatbots, agents and automation that save time and make your software smarter.',
    path: '/solutions/ai-software-development',
    links: [
      { label: 'AI Agents & Chatbots', path: '/solutions/ai-agent-development' },
      { label: 'AI Integration & Automation', path: '/solutions/ai-software-development' },
    ],
  },
  {
    icon: 'Building2',
    title: 'Business Software',
    description: 'Custom CRM, ERP, HRMS and POS software shaped around how your team actually works.',
    path: '/solutions',
    links: [
      { label: 'CRM Software', path: '/solutions/crm-development' },
      { label: 'ERP Software', path: '/solutions/custom-erp-software' },
      { label: 'HRMS & Payroll', path: '/solutions/hr-management-system' },
    ],
  },
  {
    icon: 'Boxes',
    title: 'SaaS & Product Development',
    description: 'MVPs, SaaS platforms and enterprise apps — validated fast, then built to scale.',
    path: '/solutions/software-product-development',
    links: [
      { label: 'Hire Dedicated Developers', path: '/solutions/it-staff-augmentation' },
      { label: 'Cloud & DevOps', path: '/services/cloud-consulting' },
    ],
  },
  {
    icon: 'TrendingUp',
    title: 'SEO & Digital Marketing',
    description: 'Technical and local SEO, Google and Meta ads and social media that turn traffic into leads.',
    path: '/services/seo-services',
    links: [
      { label: 'SEO Services', path: '/services/seo-services' },
      { label: 'Digital Marketing', path: '/services/digital-marketing' },
    ],
  },
];

/* ── Portfolio ───────────────────────────────────────────────────────────── */

export const PORTFOLIO = [
  {
    name: 'Saffron Table',
    category: 'Web Design · Ordering',
    description:
      'A rich, image-led restaurant platform with online ordering, table reservations and a kitchen-side dashboard.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Verdant',
    category: 'Sustainability · SaaS',
    description:
      'Carbon reporting SaaS that pulls in supplier data and turns it into audit-ready sustainability disclosures.',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Openhand Foundation',
    category: 'Non-profit · Fundraising',
    description:
      'A donation-first website with recurring giving, campaign pages and a transparent impact tracker.',
    image:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Keyline Property',
    category: 'Real Estate · Marketplace',
    description:
      'Property marketplace with map search, verified listings and an agent CRM built into the same platform.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Sensorix',
    category: 'IoT · Dashboard',
    description:
      'Live environmental monitoring across hundreds of sensors, with alerting and historical trend analysis.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Northgate Institute',
    category: 'Education · Portal',
    description:
      'An institute portal handling admissions, fee collection, attendance and parent communication end to end.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Aurelia',
    category: 'D2C · Ecommerce',
    description:
      'Headless commerce storefront with subscriptions, loyalty tiers and a sub-second product experience.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Caretrack',
    category: 'Health · Mobile App',
    description:
      'A companion mobile app for care plans, medication reminders and secure messaging with clinicians.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'StudyLoop',
    category: 'EdTech · LMS',
    description:
      'A learning platform with live classes, adaptive practice tests and detailed progress analytics.',
    image:
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop',
  },
];

/* ── Process ─────────────────────────────────────────────────────────────── */

export const PROCESS = [
  {
    title: 'Strategic Planning',
    description:
      'We understand your needs and create a clear plan before a single line of code is written.',
  },
  {
    title: 'UI/UX Design',
    description:
      'We design a clean, user-friendly layout that makes the product obvious to use.',
  },
  {
    title: 'Development',
    description:
      'Our team uses the right framework, features and tools to build it properly the first time.',
  },
  {
    title: 'Testing & QA',
    description:
      'We check everything carefully to make sure it is fast, secure and genuinely bug-free.',
  },
  {
    title: 'Launch & Support',
    description:
      'We launch your product and stay available for updates, monitoring and ongoing improvements.',
  },
];

/* ── FAQ (home page shows the first six, /faq shows all) ─────────────────── */

export const FAQS = [
  {
    q: 'What services does Achivora offer?',
    a: 'Website design and development, Android and iOS app development, AI development, custom business software (CRM, ERP, HRMS, POS), SaaS products, SEO and digital marketing — all from one in-house team in Noida.',
  },
  {
    q: 'How much does a website or app cost?',
    a: 'It depends on scope. Share a brief and you will get a written, itemised estimate within two working days. The quote is fixed before work starts, with no hidden costs.',
  },
  {
    q: 'How long does a project take?',
    a: 'A business website usually takes 3–6 weeks. A mobile app or custom platform typically takes 2–6 months. You get a clear timeline in the proposal.',
  },
  {
    q: 'How does your development process work?',
    a: 'Five stages: planning, UI/UX design, development, testing and launch. You get one point of contact, a demo every two weeks and access to the working build throughout.',
  },
  {
    q: 'Do you provide support and maintenance after launch?',
    a: 'Yes. Support plans cover monitoring, bug fixes, security updates, backups and new features, with response times agreed in advance.',
  },
  {
    q: 'Will I own the code and design?',
    a: 'Yes. The code, designs, domain and hosting accounts are yours from day one. There is no lock-in.',
  },
  {
    q: 'Can we start small with an MVP?',
    a: 'Absolutely. We scope a focused first version, put it in front of real users and grow the product once the direction is proven.',
  },
  {
    q: 'Do you offer fixed-price or hourly billing?',
    a: 'Both. Fixed price suits a clearly defined scope; monthly or hourly billing suits ongoing development and changing requirements.',
  },
  {
    q: 'Can I hire dedicated developers?',
    a: 'Yes. You can hire full-time developers who join your stand-ups and tools, and scale the team up or down monthly.',
  },
  {
    q: 'Can you integrate with our existing systems?',
    a: 'Yes. We regularly connect CRMs, ERPs, Tally, payment gateways, WhatsApp and third-party APIs.',
  },
  {
    q: 'How do you make sure the software is secure and bug-free?',
    a: 'Code review on every change, automated tests, real-device QA, vulnerability scanning and load testing before launch.',
  },
  {
    q: 'How do I get started?',
    a: 'Fill in the contact form, call or WhatsApp us. We follow up with a short discovery call, then send a written proposal with scope, timeline and cost.',
  },
];

/* ── Contact form ────────────────────────────────────────────────────────── */

export const BUDGET_OPTIONS = [
  'Below $10K',
  '$10K - $25K',
  '$25K - $50K',
  '$50K - $100K',
  'Above $100K',
];
