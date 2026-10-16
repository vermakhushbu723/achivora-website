import type { PhotoKey } from '@/constants/media';

/**
 * Every service, solution and industry page on the site.
 *
 * One entry per page, written by hand. Pages that used to cover the same
 * ground under a second or third URL were folded into a single entry here;
 * the old slugs are listed in `merged`, which both redirects them (see
 * `redirects.ts`) and shows them on the page as "also covers" keywords.
 */

export type CatalogSection = 'services' | 'solutions' | 'industries';

export interface CatalogItem {
  title: string;
  description: string;
}

export interface CatalogEntry {
  slug: string;
  section: CatalogSection;
  /** Short name for menus, cards and breadcrumbs. */
  label: string;
  /** Page H1, written around the search phrase the page targets. */
  title: string;
  icon: string;
  photo: PhotoKey;
  /** Hero line and meta description, so keep it under ~160 characters. */
  description: string;
  intro: string;
  offerings: readonly CatalogItem[];
  tech: readonly string[];
  faqs: readonly { q: string; a: string }[];
  /** Old URLs (same section unless prefixed with `/`) this page replaced. */
  merged: readonly { slug: string; label: string }[];
}

const m = (slug: string, label: string) => ({ slug, label });

export const CATALOG: readonly CatalogEntry[] = [
  /* ── Services ────────────────────────────────────────────────────────── */
  {
    slug: 'web-development',
    section: 'services',
    label: 'Web Development',
    title: 'Web Development Company in India',
    icon: 'Globe',
    photo: 'code',
    description:
      'Custom website and web application development in Noida, India — React, Next.js, Laravel, PHP and Node.js, built fast, secure and SEO-ready.',
    intro:
      'From business websites to full web applications, portals and APIs, we build on modern frameworks with performance, security and search structure in place from day one. You own the code and the hosting.',
    offerings: [
      { title: 'Custom Websites', description: 'Fast, responsive business websites designed around your customers, not a template.' },
      { title: 'Web Applications & Portals', description: 'Dashboards, customer portals and internal tools that replace spreadsheets and manual work.' },
      { title: 'API Development & Integration', description: 'REST and GraphQL APIs, plus payment, CRM, ERP and third-party integrations.' },
      { title: 'Maintenance & Support', description: 'Monitoring, security patches, backups and small improvements on a monthly plan.' },
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Laravel', 'PHP', 'CodeIgniter', 'PostgreSQL', 'MySQL'],
    faqs: [
      { q: 'How long does a website take to build?', a: 'A business website usually takes 3–6 weeks. A custom web application typically takes 2–4 months, depending on scope.' },
      { q: 'Which technology will you use?', a: 'We pick the stack for the job — usually React or Next.js on the front end with Node.js or Laravel behind it — and explain the choice before we start.' },
    ],
    merged: [
      m('custom-web-application', 'Custom Web Application'),
      m('laravel-development', 'Laravel Development'),
      m('react-js-development', 'React JS Development'),
      m('custom-php-development', 'PHP Development'),
      m('codeigniter-development', 'CodeIgniter Development'),
      m('custom-api-development', 'API Development'),
      m('api-integration', 'API Integration'),
    ],
  },
  {
    slug: 'web-design',
    section: 'services',
    label: 'Web & UI/UX Design',
    title: 'Website Design & UI/UX Design Services',
    icon: 'Palette',
    photo: 'designReview',
    description:
      'Website design, UI/UX design and brand identity for startups and businesses in India — clean, mobile-first layouts built to convert visitors.',
    intro:
      'Good design makes a product obvious to use. We research your users, wireframe the key journeys and deliver polished, mobile-first designs and design systems your developers can build from directly.',
    offerings: [
      { title: 'Website Design', description: 'Mobile-first page layouts focused on clarity, trust and enquiries.' },
      { title: 'App & Dashboard UI/UX', description: 'User flows, wireframes and high-fidelity screens for mobile apps and SaaS products.' },
      { title: 'Brand Identity', description: 'Logo, colour, typography and brand guidelines that stay consistent everywhere.' },
      { title: 'Design Systems', description: 'Reusable component libraries in Figma that keep every new screen on-brand.' },
    ],
    tech: ['Figma', 'Adobe XD', 'Illustrator', 'Photoshop', 'After Effects'],
    faqs: [
      { q: 'Do you design and develop, or design only?', a: 'Both. Most clients have us design and build, but we also hand over Figma files to in-house teams.' },
      { q: 'How many design revisions are included?', a: 'Each screen goes through review rounds until it is approved — revisions are part of the scope, not an extra.' },
    ],
    merged: [m('ui-ux-design', 'UI/UX Design'), m('brand-design', 'Brand Design')],
  },
  {
    slug: 'mobile-app-development',
    section: 'services',
    label: 'Mobile App Development',
    title: 'Mobile App Development Company in India',
    icon: 'Smartphone',
    photo: 'mobileApp',
    description:
      'Android, iOS, Flutter and React Native app development in Noida, India. Native and cross-platform mobile apps from idea to Play Store and App Store.',
    intro:
      'We design, build and launch Android and iOS apps — native where performance matters, cross-platform with Flutter or React Native where one codebase saves time and budget. Store submission and post-launch support included.',
    offerings: [
      { title: 'Android App Development', description: 'Kotlin and Java apps tuned for the wide range of Android devices used in India.' },
      { title: 'iOS App Development', description: 'Swift apps that follow Apple guidelines and pass App Store review first time.' },
      { title: 'Flutter & React Native Apps', description: 'One codebase for Android and iOS — faster to launch and cheaper to maintain.' },
      { title: 'App Launch & Support', description: 'Play Store and App Store publishing, crash monitoring and regular updates.' },
    ],
    tech: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Firebase', 'Node.js'],
    faqs: [
      { q: 'Native or cross-platform — which should I choose?', a: 'For most business apps, Flutter or React Native gives you Android and iOS for close to the cost of one. We recommend native when the app relies heavily on device hardware or graphics.' },
      { q: 'How much does an app cost?', a: 'It depends on features and platforms. Share a brief and we will send a written estimate within two working days.' },
    ],
    merged: [
      m('flutter-app-development', 'Flutter App Development'),
      m('/solutions/cross-platform-app', 'Cross-Platform App Development'),
      m('/solutions/hybrid-app-development', 'Hybrid App Development'),
    ],
  },
  {
    slug: 'wordpress-development',
    section: 'services',
    label: 'WordPress & CMS',
    title: 'WordPress, WooCommerce & CMS Development',
    icon: 'Layout',
    photo: 'laptopWork',
    description:
      'WordPress website development, WooCommerce stores and custom CMS builds that your team can update without a developer.',
    intro:
      'We build clean, fast WordPress and WooCommerce sites with custom themes instead of heavy page builders, so your marketing team can edit content safely and the site stays quick and secure.',
    offerings: [
      { title: 'Custom WordPress Themes', description: 'Lightweight themes built for your design, with editable blocks for your team.' },
      { title: 'WooCommerce Stores', description: 'Product catalogues, Indian payment gateways, shipping and GST-ready invoices.' },
      { title: 'Headless & Custom CMS', description: 'Strapi, Sanity or a custom admin when WordPress is not the right fit.' },
      { title: 'Speed & Security Fixes', description: 'Plugin clean-up, caching, hardening and malware removal for existing sites.' },
    ],
    tech: ['WordPress', 'WooCommerce', 'PHP', 'Elementor', 'Strapi', 'MySQL'],
    faqs: [
      { q: 'Can you fix or speed up my existing WordPress site?', a: 'Yes. We start with an audit, then fix plugins, hosting, images and caching — most sites get noticeably faster within a week.' },
    ],
    merged: [m('woocommerce-development', 'WooCommerce Development'), m('cms-development', 'CMS Development')],
  },
  {
    slug: 'seo-services',
    section: 'services',
    label: 'SEO Services',
    title: 'SEO Services Company in India',
    icon: 'TrendingUp',
    photo: 'growth',
    description:
      'Technical SEO, local SEO, SEO audits and link building that grow organic traffic and leads for Indian businesses. Transparent monthly reporting.',
    intro:
      'We fix the technical foundations first, then build content and authority around the keywords your customers actually search. Every month you see rankings, traffic and leads in one simple report.',
    offerings: [
      { title: 'SEO Audit & Technical SEO', description: 'Site speed, crawl errors, indexing, schema and Core Web Vitals fixed properly.' },
      { title: 'Local SEO', description: 'Google Business Profile optimisation and local pages to rank in your city.' },
      { title: 'On-Page & Content SEO', description: 'Keyword research, page optimisation and articles written for people first.' },
      { title: 'Link Building & ASO', description: 'Quality backlinks and app store optimisation for Play Store and App Store.' },
    ],
    tech: ['Google Search Console', 'GA4', 'Ahrefs', 'Semrush', 'Screaming Frog', 'Looker Studio'],
    faqs: [
      { q: 'How long does SEO take to show results?', a: 'Technical fixes can show results within weeks; competitive keywords usually take 3–6 months of consistent work.' },
      { q: 'Do you guarantee first-page rankings?', a: 'No honest agency can. We commit to the work, the transparency and the reporting — and show you progress every month.' },
    ],
    merged: [
      m('technical-seo', 'Technical SEO'),
      m('local-seo', 'Local SEO'),
      m('seo-audit', 'SEO Audit'),
      m('link-building', 'Link Building'),
      m('app-store-optimization', 'App Store Optimization'),
    ],
  },
  {
    slug: 'digital-marketing',
    section: 'services',
    label: 'Digital Marketing',
    title: 'Digital Marketing Agency in India',
    icon: 'Megaphone',
    photo: 'analytics',
    description:
      'Social media marketing, Google and Meta ads, content and email marketing that bring measurable leads. Digital marketing agency in Noida.',
    intro:
      'We run digital marketing around one number — qualified leads. Campaigns, content and social are planned together, tracked end to end, and adjusted every month based on what actually converts.',
    offerings: [
      { title: 'Social Media Marketing', description: 'Content calendars, creatives and community management for Instagram, Facebook and LinkedIn.' },
      { title: 'Google & Meta Ads', description: 'Paid search and social campaigns with proper conversion tracking and budget control.' },
      { title: 'Content & Email Marketing', description: 'Blogs, website copy, newsletters and automated email journeys.' },
      { title: 'Lead Generation & Reputation', description: 'Landing pages, lead funnels and review management that build trust.' },
    ],
    tech: ['Google Ads', 'Meta Ads', 'GA4', 'Mailchimp', 'HubSpot', 'Canva'],
    faqs: [
      { q: 'What budget do I need for ads?', a: 'You can start small. We recommend a test budget for the first month, then scale what works based on cost per lead.' },
    ],
    merged: [
      m('social-media-marketing', 'Social Media Marketing'),
      m('content-marketing', 'Content Marketing'),
      m('content-writing', 'Content Writing'),
      m('paid-marketing', 'Paid Marketing'),
      m('email-marketing', 'Email Marketing'),
      m('lead-generation', 'Lead Generation'),
      m('reputation-management', 'Reputation Management'),
    ],
  },
  {
    slug: 'cloud-consulting',
    section: 'services',
    label: 'Cloud & DevOps',
    title: 'Cloud Consulting, Migration & DevOps Services',
    icon: 'Cloud',
    photo: 'cloud',
    description:
      'AWS and Google Cloud consulting, cloud migration and DevOps automation — lower hosting costs, faster deployments and fewer outages.',
    intro:
      'We move applications to the cloud, set up CI/CD pipelines and monitoring, and right-size infrastructure so you pay for what you use and deploy without downtime.',
    offerings: [
      { title: 'Cloud Migration', description: 'Planned, low-risk moves from shared hosting or on-premise servers to AWS or GCP.' },
      { title: 'DevOps & CI/CD', description: 'Automated builds, tests and deployments with Docker and GitHub Actions.' },
      { title: 'Cost Optimisation', description: 'Audit and right-size your cloud bill without hurting performance.' },
      { title: 'Monitoring & Security', description: 'Uptime alerts, logging, backups and access controls set up properly.' },
    ],
    tech: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
    faqs: [
      { q: 'Will my site go down during migration?', a: 'No. We migrate in stages and switch traffic only after the new setup is tested, so downtime is minimal or zero.' },
    ],
    merged: [m('cloud-migration', 'Cloud Migration'), m('devops-consulting', 'DevOps Consulting')],
  },
  {
    slug: 'quality-assurance',
    section: 'services',
    label: 'QA & Testing',
    title: 'Software Testing & QA Services',
    icon: 'CheckCircle2',
    photo: 'dualScreens',
    description:
      'Manual and automated software testing for web and mobile apps — functional, performance and security testing before every release.',
    intro:
      'We test web and mobile apps on real devices and automate the checks that matter, so bugs are caught before your users find them and every release ships with confidence.',
    offerings: [
      { title: 'Manual & Functional Testing', description: 'Test plans and real-device testing across browsers, Android and iOS.' },
      { title: 'Test Automation', description: 'Automated regression suites that run on every code change.' },
      { title: 'Performance Testing', description: 'Load tests that show how your app behaves under real traffic.' },
      { title: 'Security Testing', description: 'Vulnerability scans and common-attack checks before launch.' },
    ],
    tech: ['Selenium', 'Cypress', 'Playwright', 'Appium', 'JMeter', 'Postman'],
    faqs: [
      { q: 'Can you test an app built by another company?', a: 'Yes. We regularly audit and test existing products and hand over a clear, prioritised bug report.' },
    ],
    merged: [m('data-analysis-entry', 'Data Analysis & Entry')],
  },

  /* ── Solutions ───────────────────────────────────────────────────────── */
  {
    slug: 'ai-software-development',
    section: 'solutions',
    label: 'AI Development',
    title: 'AI Software Development Company in India',
    icon: 'Brain',
    photo: 'network',
    description:
      'Custom AI app development, AI integration, automation, machine learning and LLM solutions that make your business software smarter.',
    intro:
      'We add AI where it pays back: smarter search, document reading, forecasting and workflow automation. Using models like GPT, Claude and open-source LLMs, we build AI into new apps or integrate it into the software you already use.',
    offerings: [
      { title: 'AI App Development', description: 'Web and mobile apps built around AI features from the start.' },
      { title: 'AI Integration', description: 'Connect LLMs to your CRM, ERP, website or support desk.' },
      { title: 'AI Automation', description: 'Automate repetitive work like data entry, document processing and reporting.' },
      { title: 'Machine Learning & LLMs', description: 'Custom models, RAG on your own data, and fine-tuned LLMs.' },
    ],
    tech: ['Python', 'OpenAI', 'Claude', 'LangChain', 'TensorFlow', 'PyTorch', 'Vector DBs'],
    faqs: [
      { q: 'Is my business data safe with AI?', a: 'Yes. We use enterprise APIs that do not train on your data, or host open-source models privately when data must stay in-house.' },
      { q: 'Where should a business start with AI?', a: 'Start with one repetitive, high-volume task. We scope a small pilot, measure the time saved, then expand.' },
    ],
    merged: [
      m('ai-app-development', 'AI App Development'),
      m('ai-integration', 'AI Integration'),
      m('ai-automation', 'AI Automation'),
      m('machine-learning-development', 'Machine Learning Development'),
      m('llm-development', 'LLM Development'),
      m('/services/ai-consulting', 'AI Consulting'),
    ],
  },
  {
    slug: 'ai-agent-development',
    section: 'solutions',
    label: 'AI Agents & Chatbots',
    title: 'AI Agent & Chatbot Development',
    icon: 'Bot',
    photo: 'devices',
    description:
      'AI chatbots and autonomous AI agents for customer support, sales and operations — on your website, WhatsApp and internal tools.',
    intro:
      'We build AI chatbots and agents that answer customers, qualify leads and complete tasks across your systems — on your website, WhatsApp or internal tools — with a human hand-off when it matters.',
    offerings: [
      { title: 'AI Chatbots', description: 'Website and WhatsApp chatbots trained on your products, FAQs and policies.' },
      { title: 'Agentic AI Workflows', description: 'Agents that take actions — book appointments, update CRMs, raise tickets.' },
      { title: 'Voice & Support Agents', description: 'AI support that resolves common queries and escalates the rest.' },
    ],
    tech: ['OpenAI', 'Claude', 'LangChain', 'WhatsApp API', 'Python', 'Node.js'],
    faqs: [
      { q: 'Can the chatbot work on WhatsApp?', a: 'Yes. We build on the official WhatsApp Business API, so the same agent can serve your website and WhatsApp.' },
    ],
    merged: [
      m('agentic-ai-development', 'Agentic AI Development'),
      m('/industries/ai-chatbot-development', 'AI Chatbot Development'),
    ],
  },
  {
    slug: 'software-product-development',
    section: 'solutions',
    label: 'SaaS & Product Development',
    title: 'Software Product, SaaS & MVP Development',
    icon: 'Boxes',
    photo: 'teamWhiteboard',
    description:
      'MVP development, SaaS application development and enterprise software for startups and growing companies — from idea to launch and scale.',
    intro:
      'We help founders and companies turn an idea into a working product: a focused MVP first, real user feedback, then a scalable SaaS or enterprise platform built on clean architecture.',
    offerings: [
      { title: 'MVP Development', description: 'Launch a usable first version in weeks to test the idea with real users.' },
      { title: 'SaaS Application Development', description: 'Multi-tenant platforms with subscriptions, billing and admin panels.' },
      { title: 'Enterprise Applications', description: 'Secure, role-based business software that integrates with existing systems.' },
    ],
    tech: ['React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL', 'AWS', 'Stripe', 'Razorpay'],
    faqs: [
      { q: 'How fast can you build an MVP?', a: 'Most MVPs launch in 6–10 weeks. We cut scope to the features that prove the idea and leave the rest for later releases.' },
    ],
    merged: [
      m('mvp-development', 'MVP Development'),
      m('enterprise-app-development', 'Enterprise App Development'),
      m('application-solutions', 'Application Solutions'),
      m('/services/saas-application-development', 'SaaS Application Development'),
    ],
  },
  {
    slug: 'crm-development',
    section: 'solutions',
    label: 'CRM Software',
    title: 'Custom CRM Software Development',
    icon: 'Users',
    photo: 'dataChart',
    description:
      'Custom CRM software for sales and customer management — lead tracking, pipelines, follow-up automation and WhatsApp integration.',
    intro:
      'A CRM shaped around how your team actually sells: every lead in one place, automatic follow-ups, and clear pipeline reports — without paying per-seat licences for features you never use.',
    offerings: [
      { title: 'Lead & Pipeline Management', description: 'Capture leads from your website, ads and calls into one pipeline.' },
      { title: 'Follow-up Automation', description: 'Reminders, emails and WhatsApp messages sent automatically.' },
      { title: 'Reports & Dashboards', description: 'Sales performance, conversion and team activity at a glance.' },
    ],
    tech: ['React', 'Node.js', 'Laravel', 'PostgreSQL', 'WhatsApp API'],
    faqs: [
      { q: 'Why build a custom CRM instead of using an off-the-shelf one?', a: 'A custom CRM fits your exact process, has no per-user fees and can connect to any internal system. For very standard needs we will tell you if an existing tool is the better choice.' },
    ],
    merged: [],
  },
  {
    slug: 'custom-erp-software',
    section: 'solutions',
    label: 'ERP Software',
    title: 'Custom ERP Software Development',
    icon: 'Building2',
    photo: 'manufacturing',
    description:
      'Custom ERP software for inventory, purchase, production, accounts and GST — one connected system for Indian manufacturers, traders and distributors.',
    intro:
      'Replace disconnected spreadsheets and tools with one ERP for inventory, purchase, production, sales and accounts — built around your workflow and Indian compliance like GST and e-invoicing.',
    offerings: [
      { title: 'Inventory & Warehouse', description: 'Real-time stock across locations, batches and barcodes.' },
      { title: 'Purchase & Production', description: 'Purchase orders, BOMs and production planning in one flow.' },
      { title: 'Accounts & GST', description: 'Invoicing, GST returns and Tally integration.' },
    ],
    tech: ['React', 'Node.js', 'Laravel', 'PostgreSQL', 'Tally API'],
    faqs: [
      { q: 'Can the ERP work with Tally?', a: 'Yes. We integrate with Tally so your accountants can keep their existing workflow.' },
    ],
    merged: [m('manufacturing-application', 'Manufacturing Application')],
  },
  {
    slug: 'hr-management-system',
    section: 'solutions',
    label: 'HRMS & Payroll',
    title: 'HR Management System & Payroll Software',
    icon: 'UserCog',
    photo: 'teamStandup',
    description:
      'HRMS software for attendance, leave, payroll, PF/ESI and employee self-service — custom-built for Indian companies.',
    intro:
      'One HRMS for the whole employee lifecycle — hiring, onboarding, attendance, leave, payroll and appraisals — with Indian statutory rules like PF, ESI and TDS built in.',
    offerings: [
      { title: 'Attendance & Leave', description: 'Biometric, GPS and mobile attendance with leave approvals.' },
      { title: 'Payroll & Compliance', description: 'Salary processing with PF, ESI, PT and TDS calculated automatically.' },
      { title: 'Employee Self-Service', description: 'Payslips, leave requests and documents in a mobile app.' },
    ],
    tech: ['React', 'Flutter', 'Node.js', 'PostgreSQL'],
    faqs: [
      { q: 'Does it support biometric attendance devices?', a: 'Yes. We integrate with common biometric devices and also support mobile attendance with geo-fencing.' },
    ],
    merged: [],
  },
  {
    slug: 'pos-software',
    section: 'solutions',
    label: 'POS Software',
    title: 'POS Software Development',
    icon: 'CreditCard',
    photo: 'ecommerce',
    description:
      'Point of sale software for retail stores and restaurants — billing, GST invoices, inventory, loyalty and multi-store reports.',
    intro:
      'Fast billing that works even when the internet drops, with GST invoices, stock that updates in real time and reports across all your stores.',
    offerings: [
      { title: 'Billing & GST Invoices', description: 'Quick checkout with barcode scanning, UPI and card payments.' },
      { title: 'Inventory Sync', description: 'Stock updates instantly across counters, stores and your online shop.' },
      { title: 'Loyalty & Reports', description: 'Customer rewards plus daily sales and profit reports.' },
    ],
    tech: ['React', 'Electron', 'Flutter', 'Node.js', 'SQLite', 'PostgreSQL'],
    faqs: [
      { q: 'Does the POS work offline?', a: 'Yes. Billing continues offline and syncs automatically when the connection returns.' },
    ],
    merged: [],
  },
  {
    slug: 'blockchain-development',
    section: 'solutions',
    label: 'Blockchain',
    title: 'Blockchain Development Company',
    icon: 'Link',
    photo: 'security',
    description:
      'Smart contract development, Web3 apps, token and NFT platforms built with security audits and clear, practical use cases.',
    intro:
      'We build blockchain solutions where a shared, tamper-proof record genuinely helps — smart contracts, Web3 apps and supply-chain traceability — with security reviewed at every step.',
    offerings: [
      { title: 'Smart Contracts', description: 'Solidity contracts with testing and audit preparation.' },
      { title: 'Web3 & dApps', description: 'Wallet-connected web apps and token platforms.' },
      { title: 'Traceability Solutions', description: 'Tamper-proof tracking for supply chains and records.' },
    ],
    tech: ['Solidity', 'Ethereum', 'Polygon', 'Hardhat', 'ethers.js', 'React'],
    faqs: [
      { q: 'Does my project actually need blockchain?', a: 'Often it does not. We will tell you honestly if a regular database does the job better and cheaper.' },
    ],
    merged: [],
  },
  {
    slug: 'it-staff-augmentation',
    section: 'solutions',
    label: 'Hire Developers',
    title: 'Hire Dedicated Developers — IT Staff Augmentation',
    icon: 'Briefcase',
    photo: 'officeMeeting',
    description:
      'Hire dedicated React, Node.js, Flutter, Laravel and Python developers from India on a monthly basis. Scale your team up or down anytime.',
    intro:
      'Add experienced developers, designers and QA engineers to your team on a monthly basis. They work in your tools and stand-ups, and you can scale up or down with a month’s notice.',
    offerings: [
      { title: 'Dedicated Developers', description: 'Full-time engineers working only on your product.' },
      { title: 'Flexible Team Size', description: 'Scale monthly as your roadmap changes.' },
      { title: 'Managed Delivery', description: 'Optional project management and QA on top of the team.' },
    ],
    tech: ['React', 'Node.js', 'Flutter', 'Laravel', 'Python', 'AWS'],
    faqs: [
      { q: 'Can I interview the developers first?', a: 'Yes. You interview and approve every developer before they join your team.' },
    ],
    merged: [],
  },

  /* ── Industries ──────────────────────────────────────────────────────── */
  {
    slug: 'e-commerce-development',
    section: 'industries',
    label: 'E-commerce',
    title: 'E-commerce Website & App Development',
    icon: 'ShoppingCart',
    photo: 'ecommerce',
    description:
      'E-commerce website development, Shopify stores and multi-vendor marketplaces with Indian payment gateways, shipping and GST invoicing.',
    intro:
      'Online stores built to sell: fast product pages, a simple checkout with UPI and cards, shipping integration and an admin your team can run — on Shopify, WooCommerce or a fully custom platform.',
    offerings: [
      { title: 'Custom Online Stores', description: 'Fast storefronts with a checkout designed to reduce cart abandonment.' },
      { title: 'Shopify Development', description: 'Shopify themes, apps and store setup.' },
      { title: 'Multi-vendor Marketplaces', description: 'Seller onboarding, commissions and payouts.' },
      { title: 'E-commerce Mobile Apps', description: 'Android and iOS shopping apps linked to the same store.' },
    ],
    tech: ['Shopify', 'WooCommerce', 'Next.js', 'Node.js', 'Razorpay', 'Shiprocket'],
    faqs: [
      { q: 'Shopify or a custom store?', a: 'Shopify is ideal for launching fast with a standard catalogue. Custom makes sense for marketplaces, complex pricing or high volume.' },
    ],
    merged: [
      m('shopify-website-development', 'Shopify Development'),
      m('/solutions/e-commerce-application', 'E-Commerce Application'),
    ],
  },
  {
    slug: 'healthcare-web-development',
    section: 'industries',
    label: 'Healthcare',
    title: 'Healthcare Software, Website & App Development',
    icon: 'HeartPulse',
    photo: 'healthcare',
    description:
      'Websites and apps for hospitals, clinics and dentists — online appointments, telemedicine, patient portals and medicine delivery apps.',
    intro:
      'We build secure digital tools for healthcare — clinic and hospital websites, appointment booking, telemedicine, patient records and medicine delivery apps — with patient data handled carefully.',
    offerings: [
      { title: 'Hospital & Clinic Websites', description: 'Doctor profiles, services and online appointment booking.' },
      { title: 'Telemedicine Apps', description: 'Video consultations, e-prescriptions and payments.' },
      { title: 'Patient Portals & EMR', description: 'Records, reports and follow-ups in one secure place.' },
      { title: 'Medicine Delivery Apps', description: 'Prescription upload, pharmacy orders and doorstep delivery.' },
    ],
    tech: ['React', 'Flutter', 'Node.js', 'PostgreSQL', 'WebRTC', 'AWS'],
    faqs: [
      { q: 'How do you protect patient data?', a: 'Encryption in transit and at rest, role-based access and audit logs are standard on every healthcare build.' },
    ],
    merged: [
      m('medical-clinic-website-design', 'Medical Clinic Website Design'),
      m('dental-website-design', 'Dental Website Design'),
      m('medicine-delivery-app-development', 'Medicine Delivery App'),
      m('/solutions/healthcare-app', 'Healthcare App'),
    ],
  },
  {
    slug: 'real-estate-web-development',
    section: 'industries',
    label: 'Real Estate',
    title: 'Real Estate Website & App Development',
    icon: 'Building',
    photo: 'realEstate',
    description:
      'Real estate and construction websites, property listing portals and builder CRMs with map search, virtual tours and lead capture.',
    intro:
      'Property portals and builder websites that turn visitors into site visits — map search, project pages, virtual tours, and every enquiry routed straight to your sales team.',
    offerings: [
      { title: 'Property Listing Portals', description: 'Search, filters, map view and verified listings.' },
      { title: 'Builder & Construction Websites', description: 'Project showcases with floor plans and progress updates.' },
      { title: 'Real Estate CRM', description: 'Lead tracking, site-visit scheduling and broker management.' },
    ],
    tech: ['Next.js', 'React Native', 'Node.js', 'Google Maps API', 'PostgreSQL'],
    faqs: [
      { q: 'Can you integrate with property portals like 99acres or MagicBricks?', a: 'Yes, where they provide feeds or APIs, so leads from those portals land in the same CRM.' },
    ],
    merged: [
      m('construction-website-design', 'Construction Website Design'),
      m('/solutions/real-estate-application', 'Real Estate Application'),
    ],
  },
  {
    slug: 'e-learning-website-design',
    section: 'industries',
    label: 'Education & E-Learning',
    title: 'E-Learning, LMS & Education App Development',
    icon: 'GraduationCap',
    photo: 'education',
    description:
      'E-learning websites, LMS software and education apps for schools, coaching institutes and edtech startups — live classes, tests and fee payments.',
    intro:
      'Learning platforms for schools, coaching institutes and edtech startups: recorded and live classes, tests, progress tracking and online fee collection, on web and mobile.',
    offerings: [
      { title: 'LMS Development', description: 'Courses, quizzes, certificates and progress analytics.' },
      { title: 'Live Classes & Test Series', description: 'Zoom-style live sessions, mock tests and leaderboards.' },
      { title: 'School & Institute ERP', description: 'Admissions, attendance, fees and parent communication.' },
    ],
    tech: ['React', 'Flutter', 'Node.js', 'Moodle', 'Zoom SDK', 'AWS'],
    faqs: [
      { q: 'Can students watch videos without downloading them?', a: 'Yes. We use secure video hosting with DRM options to stop downloads and screen sharing.' },
    ],
    merged: [
      m('/solutions/e-learning-app', 'E-Learning App / LMS'),
      m('/solutions/education-application', 'Education Application'),
    ],
  },
  {
    slug: 'travel-web-development',
    section: 'industries',
    label: 'Travel & Hospitality',
    title: 'Travel Website & Booking App Development',
    icon: 'Plane',
    photo: 'travel',
    description:
      'Travel agency websites, tour booking engines and hotel booking apps with payment gateways, itineraries and supplier APIs.',
    intro:
      'Travel websites and booking apps that sell trips online — tour packages, hotel and flight booking, custom itineraries and secure payments, connected to supplier APIs.',
    offerings: [
      { title: 'Travel Agency Websites', description: 'Package pages, enquiry forms and online payments.' },
      { title: 'Booking Engines', description: 'Hotel, flight and activity booking via supplier APIs.' },
      { title: 'Travel Apps', description: 'Itineraries, bookings and support on mobile.' },
    ],
    tech: ['Next.js', 'Flutter', 'Node.js', 'Amadeus API', 'Razorpay'],
    faqs: [
      { q: 'Can you connect to flight and hotel APIs?', a: 'Yes. We integrate GDS and aggregator APIs such as Amadeus and TBO, depending on your supplier contracts.' },
    ],
    merged: [
      m('travel-website-design', 'Travel Website Design'),
      m('/solutions/travel-booking-application', 'Travel Booking Application'),
    ],
  },
  {
    slug: 'transportation-logistics',
    section: 'industries',
    label: 'Logistics & Taxi',
    title: 'Logistics, Fleet & Taxi App Development',
    icon: 'Truck',
    photo: 'logistics',
    description:
      'Logistics software, fleet management systems and taxi booking apps like Uber and Ola — live tracking, dispatch and driver apps.',
    intro:
      'Software that keeps vehicles and deliveries moving: taxi and car rental booking apps, fleet tracking, route planning and proof of delivery — with rider, driver and admin apps that work together.',
    offerings: [
      { title: 'Taxi Booking Apps', description: 'Rider, driver and admin apps with live tracking and fares.' },
      { title: 'Fleet Management Software', description: 'GPS tracking, fuel, maintenance and driver reports.' },
      { title: 'Logistics & Delivery Apps', description: 'Dispatch, route optimisation and proof of delivery.' },
      { title: 'Car Rental Platforms', description: 'Online booking, availability and KYC.' },
    ],
    tech: ['Flutter', 'Node.js', 'Google Maps API', 'Socket.io', 'PostgreSQL'],
    faqs: [
      { q: 'Can you build an app like Uber or Ola?', a: 'Yes. We build the rider app, driver app and admin panel, then customise pricing, zones and payments for your market.' },
    ],
    merged: [
      m('logistics-app-development', 'Logistics App Development'),
      m('taxi-booking-app-development', 'Taxi Booking App'),
      m('car-rental-website-design', 'Car Rental Website'),
      m('/solutions/taxi-service-application', 'Taxi Service Application'),
      m('/solutions/fleet-management-software', 'Fleet Management Software'),
    ],
  },
  {
    slug: 'finance-insurance',
    section: 'industries',
    label: 'Finance & FinTech',
    title: 'FinTech, Finance & Insurance Software Development',
    icon: 'Landmark',
    photo: 'finance',
    description:
      'FinTech app development for lending, payments, wallets and insurance — secure, compliant and built for the Indian market.',
    intro:
      'Secure financial software for lenders, NBFCs, insurers and fintech startups — loan apps, wallets, UPI payments and insurance portals with KYC and strong security built in.',
    offerings: [
      { title: 'Lending & Loan Apps', description: 'Applications, e-KYC, credit checks and EMI tracking.' },
      { title: 'Payments & Wallets', description: 'UPI, cards and wallet top-ups with reconciliation.' },
      { title: 'Insurance Portals', description: 'Quotes, policy purchase and claims online.' },
    ],
    tech: ['React', 'Flutter', 'Node.js', 'Java', 'PostgreSQL', 'Razorpay'],
    faqs: [
      { q: 'Do you handle KYC integration?', a: 'Yes. We integrate e-KYC, Aadhaar/PAN verification and video KYC through approved providers.' },
    ],
    merged: [
      m('fintech-app-development', 'FinTech App Development'),
      m('/solutions/finance-insurance-app', 'Finance & Insurance App'),
    ],
  },
  {
    slug: 'food-delivery-app-development',
    section: 'industries',
    label: 'Food & Grocery Delivery',
    title: 'Food Delivery, Grocery & Restaurant App Development',
    icon: 'UtensilsCrossed',
    photo: 'officeSpace',
    description:
      'Food delivery apps like Zomato and Swiggy, grocery delivery apps and restaurant websites with online ordering and live order tracking.',
    intro:
      'Ordering platforms for restaurants, cloud kitchens and grocery stores — customer, delivery partner, restaurant and admin apps with live tracking, offers and online payments.',
    offerings: [
      { title: 'Food Delivery Apps', description: 'Multi-restaurant ordering with live delivery tracking.' },
      { title: 'Grocery Delivery Apps', description: 'Catalogues, slots and quick-commerce delivery.' },
      { title: 'Restaurant Websites', description: 'Menus, table reservations and direct online ordering.' },
    ],
    tech: ['Flutter', 'React', 'Node.js', 'Firebase', 'Google Maps API'],
    faqs: [
      { q: 'Can restaurants take orders without paying aggregator commissions?', a: 'Yes. A direct-ordering website and app lets you keep the customer relationship and the margin.' },
    ],
    merged: [
      m('grocery-app-development', 'Grocery App Development'),
      m('restaurant-website-design', 'Restaurant Website Design'),
    ],
  },
  {
    slug: 'on-demand-app-development',
    section: 'industries',
    label: 'On-Demand Services',
    title: 'On-Demand Service App Development',
    icon: 'Zap',
    photo: 'mobileApp',
    description:
      'On-demand service apps for home services, laundry, utilities and bookings — like Urban Company — with provider, customer and admin apps.',
    intro:
      'Apps that connect customers with service providers in minutes — home services, laundry, repairs and utilities — with booking, live status, payments and ratings.',
    offerings: [
      { title: 'Home Service Apps', description: 'Booking, provider matching and live job status.' },
      { title: 'Laundry & Utility Apps', description: 'Pickup scheduling, pricing and delivery updates.' },
      { title: 'Provider & Admin Apps', description: 'Job management, payouts and service-area control.' },
    ],
    tech: ['Flutter', 'Node.js', 'Firebase', 'Google Maps API', 'Razorpay'],
    faqs: [
      { q: 'Can I launch in one city and expand later?', a: 'Yes. Service areas, pricing and categories are configurable, so you can add cities without new development.' },
    ],
    merged: [
      m('laundry-app-development', 'Laundry App Development'),
      m('utilities-on-demand', 'Utilities & On Demand'),
      m('/solutions/on-demand-application', 'On-Demand Application'),
    ],
  },
  {
    slug: 'media-entertainment',
    section: 'industries',
    label: 'Media, OTT & Gaming',
    title: 'Media, OTT, Gaming & Social App Development',
    icon: 'Clapperboard',
    photo: 'devices',
    description:
      'OTT streaming apps, social media apps, sports and gaming platforms with subscriptions, live streaming and community features.',
    intro:
      'Platforms that keep audiences engaged — OTT video streaming, social and community apps, sports and fantasy platforms, and casual games — built to handle traffic spikes.',
    offerings: [
      { title: 'OTT Streaming Apps', description: 'Video on demand, live streaming and subscriptions.' },
      { title: 'Social & Community Apps', description: 'Feeds, chat, creators and moderation tools.' },
      { title: 'Sports & Gaming Apps', description: 'Live scores, fantasy leagues and casual games.' },
    ],
    tech: ['React Native', 'Flutter', 'Node.js', 'AWS MediaConvert', 'Unity', 'WebSockets'],
    faqs: [
      { q: 'Can the app handle large live audiences?', a: 'Yes. We use CDN-based streaming and auto-scaling infrastructure designed for sudden traffic spikes.' },
    ],
    merged: [
      m('gaming-app-development', 'Gaming App Development'),
      m('sports-app-development', 'Sports App Development'),
      m('social-media-app-development', 'Social Media App Development'),
      m('/solutions/ott-app-development', 'OTT App Development'),
    ],
  },
  {
    slug: 'fitness-app-development',
    section: 'industries',
    label: 'Fitness & Gym',
    title: 'Fitness App & Gym Website Development',
    icon: 'Dumbbell',
    photo: 'growth',
    description:
      'Fitness apps and gym websites with memberships, class booking, workout plans, trainer apps and online payments.',
    intro:
      'Digital tools for gyms, studios and fitness coaches — membership management, class booking, workout and diet plans, and online coaching on web and mobile.',
    offerings: [
      { title: 'Gym Management & Websites', description: 'Memberships, renewals, attendance and class schedules.' },
      { title: 'Fitness & Coaching Apps', description: 'Workout plans, progress tracking and video sessions.' },
    ],
    tech: ['Flutter', 'React', 'Node.js', 'Firebase', 'HealthKit'],
    faqs: [
      { q: 'Can members pay and renew online?', a: 'Yes, with UPI, cards and automatic renewal reminders.' },
    ],
    merged: [m('gym-web-design', 'Gym Web Design')],
  },
  {
    slug: 'matrimonial-website-design',
    section: 'industries',
    label: 'Matrimonial & Dating',
    title: 'Matrimonial Website & Dating App Development',
    icon: 'Heart',
    photo: 'mobileApp',
    description:
      'Matrimonial websites and dating apps with verified profiles, smart matchmaking, chat and paid memberships.',
    intro:
      'Matchmaking platforms built on trust — verified profiles, privacy controls, smart matching, chat and premium memberships, on web and mobile.',
    offerings: [
      { title: 'Matrimonial Portals', description: 'Detailed profiles, community filters and horoscope matching.' },
      { title: 'Dating Apps', description: 'Swipe matching, chat and safety features.' },
      { title: 'Memberships & Verification', description: 'Paid plans, ID checks and moderation tools.' },
    ],
    tech: ['React', 'Flutter', 'Node.js', 'Firebase', 'MongoDB'],
    faqs: [
      { q: 'How do you keep fake profiles out?', a: 'Phone and ID verification, photo checks and admin moderation tools are built in.' },
    ],
    merged: [
      m('dating-app-development', 'Dating App Development'),
      m('/solutions/matrimonial-application', 'Matrimonial Application'),
    ],
  },
  {
    slug: 'manufacturing-website-design',
    section: 'industries',
    label: 'Manufacturing & B2B',
    title: 'Manufacturing, B2B & Industrial Website Development',
    icon: 'Factory',
    photo: 'manufacturing',
    description:
      'Websites and software for manufacturers, B2B suppliers, agriculture and energy companies — product catalogues, dealer portals and RFQs.',
    intro:
      'Websites and portals that win B2B enquiries — product catalogues, RFQ forms and dealer portals — plus the software behind them for orders, production and field operations.',
    offerings: [
      { title: 'B2B & Manufacturer Websites', description: 'Product catalogues, certifications and RFQ forms.' },
      { title: 'Dealer & Distributor Portals', description: 'Orders, pricing tiers and stock visibility.' },
      { title: 'Industrial Software', description: 'Production, maintenance and field-team apps.' },
    ],
    tech: ['Next.js', 'React', 'Node.js', 'Laravel', 'PostgreSQL'],
    faqs: [
      { q: 'Can the website show our full product catalogue?', a: 'Yes — with categories, specifications, downloadable datasheets and enquiry buttons on every product.' },
    ],
    merged: [
      m('b2b-website-design', 'B2B Website Design'),
      m('oil-and-gas-software', 'Oil and Gas Software'),
      m('agriculture-website-design', 'Agriculture Website Design'),
    ],
  },
  {
    slug: 'iot-app-development',
    section: 'industries',
    label: 'IoT',
    title: 'IoT App Development',
    icon: 'Radio',
    photo: 'serverRoom',
    description:
      'IoT app development for smart devices, sensors and industrial monitoring — real-time dashboards, alerts and device control.',
    intro:
      'We connect devices to the cloud and to people: sensor data pipelines, real-time dashboards, alerts and mobile apps to monitor and control equipment from anywhere.',
    offerings: [
      { title: 'Device Connectivity', description: 'MQTT and cloud IoT pipelines for sensors and hardware.' },
      { title: 'Monitoring Dashboards', description: 'Live readings, history and threshold alerts.' },
      { title: 'Control Apps', description: 'Mobile apps to manage devices remotely.' },
    ],
    tech: ['MQTT', 'AWS IoT', 'Node.js', 'Python', 'Flutter', 'InfluxDB'],
    faqs: [
      { q: 'Do you work with existing hardware?', a: 'Yes. We integrate with most devices that expose MQTT, HTTP or Modbus.' },
    ],
    merged: [],
  },
  {
    slug: 'small-business-website-design',
    section: 'industries',
    label: 'Small Business',
    title: 'Small Business Website Design',
    icon: 'Store',
    photo: 'laptopWork',
    description:
      'Affordable, professional websites for small businesses, law firms, jewellers, NGOs, temples and local brands — mobile-friendly and SEO-ready.',
    intro:
      'A professional website that brings in enquiries, at a budget that suits a small business. Mobile-friendly, fast, easy to update and set up for Google from day one — for shops, professionals, NGOs, trusts and local brands.',
    offerings: [
      { title: 'Business Websites', description: 'Clean, mobile-first sites with WhatsApp and call buttons.' },
      { title: 'Local SEO Setup', description: 'Google Business Profile and on-page SEO included.' },
      { title: 'Donations & Bookings', description: 'Online donations, appointments or orders where you need them.' },
    ],
    tech: ['WordPress', 'Next.js', 'Shopify', 'Razorpay'],
    faqs: [
      { q: 'How much does a small business website cost?', a: 'It depends on pages and features. Share what you need and we will send a fixed quote — no hidden costs.' },
    ],
    merged: [
      m('law-firm-website-design', 'Law Firm Website Design'),
      m('jewellery-website-design', 'Jewellery Website Design'),
      m('astrology-website-design', 'Astrology Website Design'),
      m('temple-trust-website-design', 'Temple & Trust Website Design'),
      m('nonprofit-web-design', 'Nonprofit Web Design'),
      m('political-campaign-website', 'Political Campaign Website'),
    ],
  },
];

export const SECTION_LABEL: Record<CatalogSection, string> = {
  services: 'Services',
  solutions: 'Solutions',
  industries: 'Industries',
};

export const entriesIn = (section: CatalogSection) =>
  CATALOG.filter((e) => e.section === section);

export const findEntry = (section: CatalogSection, slug: string | undefined) =>
  CATALOG.find((e) => e.section === section && e.slug === slug);

export const entryPath = (e: Pick<CatalogEntry, 'section' | 'slug'>) =>
  `/${e.section}/${e.slug}`;
