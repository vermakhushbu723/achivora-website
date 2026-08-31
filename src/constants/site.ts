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
const EMAIL = 'achivora9026@gmail.com';

export const SITE = {
  name: 'Achivora',
  legalName: 'Achivora Technologies Pvt. Ltd.',
  tagline: 'Transforming ideas into innovation',

  /** Display form, e.g. inside a link label. */
  phone: PHONE_DISPLAY,
  /** Dial form, for `tel:` hrefs. */
  phoneHref: `tel:${PHONE_E164}`,

  email: EMAIL,
  /** Kept as separate keys so copy can still say "sales" / "careers". */
  salesEmail: EMAIL,
  careerEmail: EMAIL,
  emailHref: `mailto:${EMAIL}`,

  whatsapp: `https://wa.me/${PHONE_E164.replace('+', '')}`,

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
      flag: '🇮🇳',
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

/* ── Navigation ──────────────────────────────────────────────────────────── */

export const NAV_LINKS = [
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Industries', path: '/industries' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Insights', path: '/insights' },
  { label: 'Contact Us', path: '/contact' },
];

export const SERVICE_MENU = [
  { label: 'Website Development', path: '/website-development' },
  { label: 'App Development', path: '/app-development' },
  { label: 'Software Solutions', path: '/software-solutions' },
  { label: 'All Services', path: '/services' },
];

/* ── Hero ────────────────────────────────────────────────────────────────── */

export const HERO = {
  eyebrow: 'Web & Software Development Company in India',
  title: 'Where Innovation Meets Imagination',
  body:
    'We deliver smart, scalable custom software and enterprise-ready web applications that help Indian businesses grow faster in the digital age.',
  primaryCta: { label: 'Our Services', path: '/services' },
  secondaryCta: { label: 'Talk To Experts', path: '/contact' },
};

/** Client strip — rendered as an infinite marquee of wordmarks. */
export const CLIENTS = [
  'NorthPeak',
  'Sensorix',
  'Verdant',
  'Aurelia',
  'Caretrack',
  'Keyline Property',
  'StudyLoop',
  'BlueHarbor',
  'Vantage Labs',
  'Corewave',
  'Lumina',
  'Skyforge',
];

/* ── Value proposition + stats ───────────────────────────────────────────── */

export const VALUE_PROP = {
  eyebrow: 'Your Digital Partners in Growth',
  title: 'Empowering Businesses with AI, Software & Digital Innovation',
  paragraphs: [
    'An outdated digital strategy quietly costs you customers every single day — slow websites, disconnected systems and manual processes that never scale with the business behind them.',
    'Achivora replaces that with engineered, future-ready platforms. We combine product thinking, modern engineering and AI to build software that is fast, secure and genuinely built for the way your business works.',
  ],
};

export const STATS = [
  { value: 1560, suffix: '+', label: 'Projects Delivered' },
  { value: 120, suffix: '+', label: 'Cities Served' },
  { value: 98, suffix: '%', label: 'Customer Retention' },
  { value: 8, suffix: '+', label: 'Years In Industry' },
];

/* ── Services ────────────────────────────────────────────────────────────── */

export const SERVICES = [
  {
    icon: 'Brain',
    title: 'AI Development Services',
    description:
      'We build intelligent AI solutions that automate workflows, surface insight and make your products measurably smarter.',
    links: [
      'AI Software Development',
      'AI App Development',
      'AI Agent Development',
      'AI Chatbot Development',
      'AI Integration Services',
    ],
    accent: '#0A66C2',
    bg: '#E8F3FF',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile App Development',
    description:
      'From concept to deployment, we craft mobile apps that feel effortless and perform beautifully on every device.',
    links: [
      'Android App Development',
      'iOS App Development',
      'Flutter App Development',
      'Hybrid App Development',
      'Cross-Platform Apps',
    ],
    accent: '#057642',
    bg: '#E8F6EF',
  },
  {
    icon: 'Globe',
    title: 'Web Development Services',
    description:
      'Our web design team builds fast, accessible, search-ready websites that turn visitors into paying customers.',
    links: [
      'Custom Web Application',
      'Web Design Services',
      'WordPress Development',
      'Laravel Development',
      'Shopify Development',
    ],
    accent: '#9B59B6',
    bg: '#F5EEFB',
  },
  {
    icon: 'Boxes',
    title: 'Software Product Development',
    description:
      'We transform ideas into scalable products — validated, engineered and shipped with a roadmap that keeps going.',
    links: [
      'SaaS Development',
      'MVP Development',
      'Enterprise App Development',
      'Custom API Development',
    ],
    accent: '#F5A623',
    bg: '#FEF6E7',
  },
  {
    icon: 'Cloud',
    title: 'Cloud Consulting Services',
    description:
      'Modernize your cloud infrastructure for resilience and cost control, with automation baked in from day one.',
    links: ['Cloud Migration', 'DevOps Consulting', 'Cloud Cost Optimization'],
    accent: '#378FE9',
    bg: '#E8F3FF',
  },
  {
    icon: 'Cpu',
    title: 'Advanced Technology Services',
    description:
      'Specialist teams for the harder problems — quality engineering, distributed ledgers and connected devices.',
    links: [
      'QA & Testing Services',
      'Blockchain Development',
      'IoT Development',
      'Staff Augmentation',
    ],
    accent: '#CC1016',
    bg: '#FFEBEB',
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
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop',
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

/* ── Solutions ───────────────────────────────────────────────────────────── */

export const SOLUTIONS = [
  {
    icon: 'Users',
    title: 'AI-Powered CRM Solutions',
    description:
      'Pipelines that score themselves, follow-ups that write themselves, and a single view of every customer.',
  },
  {
    icon: 'Building2',
    title: 'Advanced ERP Management Systems',
    description:
      'Finance, inventory, procurement and production connected in one system your whole company can trust.',
  },
  {
    icon: 'UserCog',
    title: 'Smart Workforce & HRM Solutions',
    description:
      'Hiring, onboarding, attendance, payroll and appraisals — automated end to end, with zero spreadsheets.',
  },
  {
    icon: 'GraduationCap',
    title: 'Intelligent LMS Solutions',
    description:
      'Course delivery, adaptive assessments and completion analytics for training teams and institutions.',
  },
  {
    icon: 'Sparkles',
    title: 'Custom AI Solutions',
    description:
      'Purpose-built models, agents and copilots trained on your data and wired into your existing tools.',
  },
  {
    icon: 'Radio',
    title: 'IoT & Connected Device Solutions',
    description:
      'Device fleets, telemetry pipelines and control dashboards built for scale and real-time reliability.',
  },
];

/* ── Industries ──────────────────────────────────────────────────────────── */

export const INDUSTRIES = [
  { icon: 'ShoppingCart', label: 'Ecommerce & Multivendor' },
  { icon: 'Plane', label: 'Travel & Hospitality' },
  { icon: 'HeartPulse', label: 'Healthcare' },
  { icon: 'Building', label: 'Real Estate & Construction' },
  { icon: 'GraduationCap', label: 'Education' },
  { icon: 'Truck', label: 'Transportation & Logistics' },
  { icon: 'Zap', label: 'Utilities & On Demand' },
  { icon: 'Landmark', label: 'Finance & Insurance' },
  { icon: 'Clapperboard', label: 'Media & Entertainment' },
  { icon: 'Factory', label: 'Manufacturing' },
];

/* ── Technologies ────────────────────────────────────────────────────────── */

export const TECHNOLOGIES = [
  'HTML 5', 'CSS3', 'Bootstrap', 'Javascript', 'jQuery', 'Angular', 'ReactJS',
  'VueJS', 'Next.js', 'NuxtJS', 'Laravel', 'CodeIgniter', 'NestJS', 'ExpressJS',
  'PHP', 'Node', 'Python', 'WordPress', 'Shopify', 'WooCommerce',
  'React Native', 'Flutter', 'Swift', 'Kotlin', 'Android', 'iOS',
  'MySQL', 'MongoDB', 'MariaDB', 'PostgreSQL', 'GitHub', 'BitBucket',
  'GitLab', 'Figma', 'XD', 'Illustrator', 'After Effects', 'AWS',
  'Google Cloud', 'Docker', 'Blockchain', 'PWA', 'AMP', 'ChatGPT', 'Chatbot',
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

/* ── Recognition ─────────────────────────────────────────────────────────── */

export const RECOGNITION = [
  { source: 'Clutch', text: 'Rated top for reliable and innovative web solutions' },
  { source: 'GoodFirms', text: 'Customers love us for performance, design and support' },
  { source: 'Google Reviews', text: 'Trusted by clients with excellent reviews and feedback' },
  { source: 'DesignRush', text: 'Recognized for proven results and client satisfaction' },
  { source: 'Awwwards', text: 'Awarded for creativity, strategy and design excellence' },
  { source: 'Trustpilot', text: 'Highly rated for service, transparency and user experience' },
  { source: 'TopDevelopers', text: 'Ranked among the leading development partners in India' },
];

/* ── FAQ ─────────────────────────────────────────────────────────────────── */

export const FAQS = [
  {
    q: 'Can we start with a smaller engagement or MVP before scaling?',
    a: 'Absolutely. Most of our long-running partnerships began as a focused MVP or a single module. We scope a tight first release, get it in front of real users, and scale the team and roadmap once the direction is proven.',
  },
  {
    q: 'How does your software development process work?',
    a: 'Five stages: strategic planning, UI/UX design, development, testing and QA, then launch and support. You get a dedicated point of contact, sprint demos every two weeks, and access to the working build throughout.',
  },
  {
    q: 'Can I hire your India-based developers?',
    a: 'Yes. You can hire dedicated developers full-time or part-time, and scale the team up or down monthly. They work in your timezone overlap, join your stand-ups, and use your tooling.',
  },
  {
    q: 'Do you develop AI-powered, web and mobile applications?',
    a: 'We do all three, and increasingly together. AI features — chat, search, document understanding, forecasting — are built into the same web and mobile products rather than bolted on afterwards.',
  },
  {
    q: 'Can your software scale as my business grows?',
    a: 'That is a design constraint from day one. We build on cloud-native infrastructure with clean service boundaries, so capacity, features and teams can all grow without a rewrite.',
  },
  {
    q: 'How do you ensure software quality, security and reliability?',
    a: 'Automated test suites, code review on every change, CI/CD pipelines, dependency and vulnerability scanning, plus load and penetration testing before launch. Security is reviewed at design time, not at the end.',
  },
  {
    q: 'Do you provide maintenance and support after launch?',
    a: 'Yes. Support plans cover monitoring, bug fixes, security patching, performance tuning and feature updates, with response times agreed in advance.',
  },
  {
    q: 'What engagement models do you offer?',
    a: 'Fixed-scope projects for well-defined work, dedicated teams for ongoing product development, and time-and-materials for work that needs to stay flexible.',
  },
  {
    q: 'Why should you partner with Achivora for software development?',
    a: 'Ten years of delivery, 1500+ shipped projects and a 98% retention rate. You get senior engineers who have solved the problem before, transparent communication, and code you fully own.',
  },
  {
    q: 'How much does it cost and how long does it take?',
    a: 'A marketing website typically runs 3–6 weeks, a mobile app or custom platform 3–6 months. Cost depends on scope — share a brief and you will have a written estimate and timeline within two working days.',
  },
  {
    q: 'How do I get started with my project?',
    a: 'Send us a brief through the form below or call us directly. We follow up with a discovery call, then a written proposal covering scope, timeline, team and cost.',
  },
  {
    q: 'Can I hire dedicated developers or extend my existing team?',
    a: 'Yes. Staff augmentation is one of our most common engagements — our engineers plug into your existing process, repos and rituals with no ramp-up overhead on your side.',
  },
  {
    q: 'What types of businesses do you work with?',
    a: 'Funded startups building a first product, mid-market companies modernising legacy systems, and enterprises needing specialist capacity. Ten industries, from healthcare to logistics.',
  },
  {
    q: 'Can Achivora integrate software with my existing systems and third-party tools?',
    a: 'Yes. We routinely integrate CRMs, ERPs, payment gateways, marketing platforms and analytics stacks, either through published APIs or purpose-built connectors.',
  },
];

/* ── Insights / blog ─────────────────────────────────────────────────────── */

export const INSIGHTS = [
  {
    title: 'Benefits of AI Integration: Why Businesses Are Adopting AI Fast',
    excerpt:
      'AI has moved from experiment to operating requirement. Here is where it actually pays back, and where it quietly does not.',
    category: 'Artificial Intelligence',
    date: 'Aug 12, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Top AI Trends Shaping the Future for 2026',
    excerpt:
      'Agentic workflows, small specialised models and on-device inference — the shifts that will define the next two years.',
    category: 'Trends',
    date: 'Jul 29, 2026',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Virtualization in Cloud Computing: Definition, Types and Benefits',
    excerpt:
      'A practical explainer on hypervisors, containers and when each one is the right unit of deployment.',
    category: 'Cloud',
    date: 'Jul 15, 2026',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
  },
];

/* ── Long-form company overview ──────────────────────────────────────────── */

export const OVERVIEW = {
  title:
    'Your AI-Driven Web Design Company in India for Stunning Websites & Apps',
  paragraphs: [
    'Achivora is a full-service web design and software development company building digital products for businesses across India. For over a decade we have helped founders, marketing teams and enterprise IT departments turn rough ideas into platforms their customers actually enjoy using.',
    'Every engagement starts with the business problem rather than the technology. We map the workflow, design the experience around it, and only then choose the stack — which is why our products tend to survive contact with real users.',
  ],
  blocks: [
    {
      title:
        "Build Your Custom AI-Powered Website with India's Top Development Experts",
      body:
        'From marketing sites to complex web applications, we build on modern frameworks with performance budgets, accessibility standards and SEO structure applied from the first commit rather than retrofitted later.',
    },
    {
      title: 'Your All-in-One AI-Powered Web Design Solutions Provider',
      body:
        'Design, engineering, QA, DevOps and post-launch support under one roof. One accountable team, one roadmap, and no handoff gaps between the people who design it and the people who build it.',
    },
    {
      title: 'Integrating Future-Ready AI Features and Functionality',
      body:
        'Intelligent search, conversational support, document extraction, personalisation and forecasting — added where they measurably improve the product, not where they simply sound impressive.',
    },
    {
      title: 'Experienced Designers and Engineers You Can Trust',
      body:
        'A senior-heavy team of 50+ designers, developers and QA engineers, with clear ownership on every project and code that you fully own from the very first day.',
    },
  ],
  integrations: [
    'CMS Integration',
    'CRM Integration',
    'Payment Gateway Integration',
    'Social Media Integration',
    'AI-Powered Email Marketing Integration',
    'AI-Powered SEO Tooling',
    'AI-Powered Analytics and Tracking',
  ],
};

/* ── Contact form ────────────────────────────────────────────────────────── */

export const BUDGET_OPTIONS = [
  'Below $10K',
  '$10K - $25K',
  '$25K - $50K',
  '$50K - $100K',
  'Above $100K',
];

/* ── Footer ──────────────────────────────────────────────────────────────── */

export const FOOTER_LINKS: Record<string, { label: string; path: string }[]> = {
  "Services": [
    {
      "label": "Web Development",
      "path": "/services/web-development"
    },
    {
      "label": "Custom API Development",
      "path": "/services/custom-api-development"
    },
    {
      "label": "SaaS Application Development",
      "path": "/services/saas-application-development"
    },
    {
      "label": "Custom Web Application",
      "path": "/services/custom-web-application"
    },
    {
      "label": "Laravel Development",
      "path": "/services/laravel-development"
    },
    {
      "label": "Mobile App Development",
      "path": "/services/mobile-app-development"
    },
    {
      "label": "React JS Development",
      "path": "/services/react-js-development"
    },
    {
      "label": "Custom PHP Development",
      "path": "/services/custom-php-development"
    },
    {
      "label": "CodeIgniter Development",
      "path": "/services/codeigniter-development"
    },
    {
      "label": "WordPress Development",
      "path": "/services/wordpress-development"
    },
    {
      "label": "WooCommerce Development",
      "path": "/services/woocommerce-development"
    },
    {
      "label": "CMS Development",
      "path": "/services/cms-development"
    }
  ],
  "Solutions": [
    {
      "label": "CRM Development",
      "path": "/solutions/crm-development"
    },
    {
      "label": "HR Management System",
      "path": "/solutions/hr-management-system"
    },
    {
      "label": "Custom ERP Software",
      "path": "/solutions/custom-erp-software"
    },
    {
      "label": "POS Software",
      "path": "/solutions/pos-software"
    },
    {
      "label": "E-Learning App",
      "path": "/solutions/e-learning-app"
    },
    {
      "label": "MVP Development",
      "path": "/solutions/mvp-development"
    },
    {
      "label": "Software Product Development",
      "path": "/solutions/software-product-development"
    },
    {
      "label": "Enterprise App Development",
      "path": "/solutions/enterprise-app-development"
    },
    {
      "label": "Application Solutions",
      "path": "/solutions/application-solutions"
    },
    {
      "label": "On-Demand Application",
      "path": "/solutions/on-demand-application"
    }
  ],
  "Industries We Serve": [
    {
      "label": "Healthcare Web Development",
      "path": "/industries/healthcare-web-development"
    },
    {
      "label": "Travel Web Development",
      "path": "/industries/travel-web-development"
    },
    {
      "label": "Real Estate Web Development",
      "path": "/industries/real-estate-web-development"
    },
    {
      "label": "E-commerce Development",
      "path": "/industries/e-commerce-development"
    },
    {
      "label": "Transportation & Logistics",
      "path": "/industries/transportation-logistics"
    },
    {
      "label": "E-Learning Website Design",
      "path": "/industries/e-learning-website-design"
    },
    {
      "label": "Media & Entertainment",
      "path": "/industries/media-entertainment"
    },
    {
      "label": "Finance & Insurance",
      "path": "/industries/finance-insurance"
    },
    {
      "label": "Logistics App Development",
      "path": "/industries/logistics-app-development"
    },
    {
      "label": "Gaming App Development",
      "path": "/industries/gaming-app-development"
    },
    {
      "label": "Sports App Development",
      "path": "/industries/sports-app-development"
    },
    {
      "label": "Grocery App Development",
      "path": "/industries/grocery-app-development"
    }
  ],
  "Explore By Location": [
    {
      "label": "Web Development Company in Delhi",
      "path": "/locations/web-development-company-in-delhi"
    },
    {
      "label": "Web Development Company in Noida",
      "path": "/locations/web-development-company-in-noida"
    },
    {
      "label": "Web Development Company in Gurgaon",
      "path": "/locations/web-development-company-in-gurgaon"
    },
    {
      "label": "Web Development Company in Faridabad",
      "path": "/locations/web-development-company-in-faridabad"
    },
    {
      "label": "Web Development Company in Ghaziabad",
      "path": "/locations/web-development-company-in-ghaziabad"
    },
    {
      "label": "Web Development Company in South Delhi",
      "path": "/locations/web-development-company-in-south-delhi"
    },
    {
      "label": "Web Development Company in Nehru Place",
      "path": "/locations/web-development-company-in-nehru-place"
    },
    {
      "label": "Web Development Company in Okhla",
      "path": "/locations/web-development-company-in-okhla"
    },
    {
      "label": "Web Development Company in Mumbai",
      "path": "/locations/web-development-company-in-mumbai"
    },
    {
      "label": "Web Development Company in Pune",
      "path": "/locations/web-development-company-in-pune"
    },
    {
      "label": "Web Development Company in Bangalore",
      "path": "/locations/web-development-company-in-bangalore"
    },
    {
      "label": "Web Development Company in Hyderabad",
      "path": "/locations/web-development-company-in-hyderabad"
    }
  ],
  "Quick Links": [
    {
      "label": "About Us",
      "path": "/about"
    },
    {
      "label": "Portfolio",
      "path": "/portfolio"
    },
    {
      "label": "Insights",
      "path": "/insights"
    },
    {
      "label": "Career",
      "path": "/career"
    },
    {
      "label": "All Locations",
      "path": "/locations"
    },
    {
      "label": "Contact Us",
      "path": "/contact"
    },
    {
      "label": "FAQ",
      "path": "/faq"
    },
    {
      "label": "Sitemap",
      "path": "/sitemap"
    }
  ]
};
