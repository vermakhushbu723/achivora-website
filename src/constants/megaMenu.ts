/**
 * Mega-menu structure for the primary navigation.
 *
 * Column grouping mirrors the reference site's dropdown; every path resolves
 * to a real page in the generated catalogues.
 */

export interface MegaLink {
  label: string;
  path: string;
}

export interface MegaColumn {
  /** Column heading — clickable when it maps to a real landing page. */
  title: string;
  path?: string;
  icon: string;
  links: MegaLink[];
}

export interface MegaMenu {
  label: string;
  /** The "view all" destination behind the top-level nav item. */
  path: string;
  columns: MegaColumn[];
  /** Promo card pinned to the right edge of the panel. */
  feature: {
    title: string;
    description: string;
    ctaLabel: string;
    ctaPath: string;
  };
}

export const MEGA_MENUS: MegaMenu[] = [
  {
    label: 'Services',
    path: '/services',
    columns: [
      {
        title: 'Mobile App Solutions',
        path: '/services/mobile-app-development',
        icon: 'Smartphone',
        links: [
          { label: 'Android App Development', path: '/solutions/hybrid-app-development' },
          { label: 'iOS App Development', path: '/services/flutter-app-development' },
          { label: 'Hybrid App Development', path: '/solutions/hybrid-app-development' },
          { label: 'Cross-Platform App Development', path: '/solutions/cross-platform-app' },
        ],
      },
      {
        title: 'AI & ML Development',
        path: '/services/ai-consulting',
        icon: 'Brain',
        links: [
          { label: 'AI Chatbot Development', path: '/industries/ai-chatbot-development' },
          { label: 'IoT App Development', path: '/industries/iot-app-development' },
          { label: 'Generative AI & LLM', path: '/solutions/llm-development' },
          { label: 'Blockchain Development', path: '/solutions/blockchain-development' },
        ],
      },
      {
        title: 'Web Development',
        path: '/services/web-development',
        icon: 'Globe',
        links: [
          { label: 'Custom Web Application', path: '/services/custom-web-application' },
          { label: 'API Development', path: '/services/custom-api-development' },
          { label: 'Laravel Development', path: '/services/laravel-development' },
          { label: 'React JS Development', path: '/services/react-js-development' },
        ],
      },
      {
        title: 'eCommerce Services',
        path: '/industries/e-commerce-development',
        icon: 'ShoppingCart',
        links: [
          { label: 'Shopify Development', path: '/industries/shopify-website-development' },
          { label: 'WooCommerce Development', path: '/services/woocommerce-development' },
          { label: 'WordPress Development', path: '/services/wordpress-development' },
          { label: 'CMS Development', path: '/services/cms-development' },
        ],
      },
      {
        title: 'Software Product',
        path: '/solutions/software-product-development',
        icon: 'Boxes',
        links: [
          { label: 'MVP Development', path: '/solutions/mvp-development' },
          { label: 'SaaS Application', path: '/services/saas-application-development' },
          { label: 'Enterprise App Development', path: '/solutions/enterprise-app-development' },
        ],
      },
      {
        title: 'More Services',
        path: '/services',
        icon: 'Sparkles',
        links: [
          { label: 'Staff Augmentation', path: '/solutions/it-staff-augmentation' },
          { label: 'Quality Assurance', path: '/services/quality-assurance' },
          { label: 'DevOps Services', path: '/services/devops-consulting' },
          { label: 'Cloud Consulting', path: '/services/cloud-consulting' },
        ],
      },
    ],
    feature: {
      title: 'Not sure where to start?',
      description:
        'Tell us the outcome you need and we will map the right scope, timeline and cost.',
      ctaLabel: 'Book a free consultation',
      ctaPath: '/contact',
    },
  },
  {
    label: 'Solutions',
    path: '/solutions',
    columns: [
      {
        title: 'App Solutions',
        path: '/solutions/on-demand-application',
        icon: 'Zap',
        links: [
          { label: 'Food Delivery', path: '/industries/food-delivery-app-development' },
          { label: 'Grocery Delivery', path: '/industries/grocery-app-development' },
          { label: 'Taxi Service', path: '/solutions/taxi-service-application' },
          { label: 'Fintech', path: '/industries/fintech-app-development' },
          { label: 'Fitness & Gym', path: '/industries/fitness-app-development' },
          { label: 'Astrology', path: '/industries/astrology-website-design' },
          { label: 'Matrimonial', path: '/solutions/matrimonial-application' },
          { label: 'Dating', path: '/industries/dating-app-development' },
        ],
      },
      {
        title: 'Enterprise Solutions',
        path: '/solutions/custom-erp-software',
        icon: 'Building2',
        links: [
          { label: 'HRM Solution', path: '/solutions/hr-management-system' },
          { label: 'CRM Solution', path: '/solutions/crm-development' },
          { label: 'ERP Solution', path: '/solutions/custom-erp-software' },
          { label: 'LMS Solution', path: '/solutions/e-learning-app' },
          { label: 'POS Software', path: '/solutions/pos-software' },
          { label: 'Fleet Management', path: '/solutions/fleet-management-software' },
        ],
      },
      {
        title: 'AI Solutions',
        path: '/solutions/ai-software-development',
        icon: 'Brain',
        links: [
          { label: 'AI App Development', path: '/solutions/ai-app-development' },
          { label: 'AI Integration', path: '/solutions/ai-integration' },
          { label: 'AI Automation', path: '/solutions/ai-automation' },
          { label: 'AI Agent Development', path: '/solutions/ai-agent-development' },
          { label: 'Machine Learning', path: '/solutions/machine-learning-development' },
          { label: 'Agentic AI', path: '/solutions/agentic-ai-development' },
        ],
      },
    ],
    feature: {
      title: 'Ready-to-deploy platforms',
      description:
        'Proven cores configured around your workflows — live in weeks, not quarters.',
      ctaLabel: 'Browse all solutions',
      ctaPath: '/solutions',
    },
  },
  {
    label: 'Industries',
    path: '/industries',
    columns: [
      {
        title: 'Commerce & Retail',
        path: '/industries/e-commerce-development',
        icon: 'ShoppingCart',
        links: [
          { label: 'Ecommerce & Multivendor', path: '/industries/e-commerce-development' },
          { label: 'Grocery & Delivery', path: '/industries/grocery-app-development' },
          { label: 'Jewellery & Retail', path: '/industries/jewellery-website-design' },
          { label: 'Restaurant & Hospitality', path: '/industries/restaurant-website-design' },
        ],
      },
      {
        title: 'Health & Education',
        path: '/industries/healthcare-web-development',
        icon: 'HeartPulse',
        links: [
          { label: 'Medical & Healthcare', path: '/industries/healthcare-web-development' },
          { label: 'Dental & Clinics', path: '/industries/dental-website-design' },
          { label: 'EdTech & E-Learning', path: '/industries/e-learning-website-design' },
          { label: 'Fitness & Wellness', path: '/industries/fitness-app-development' },
        ],
      },
      {
        title: 'Property & Industry',
        path: '/industries/real-estate-web-development',
        icon: 'Building',
        links: [
          { label: 'Real Estate & Construction', path: '/industries/real-estate-web-development' },
          { label: 'Manufacturing', path: '/industries/manufacturing-website-design' },
          { label: 'Oil and Gas', path: '/industries/oil-and-gas-software' },
          { label: 'Agriculture', path: '/industries/agriculture-website-design' },
        ],
      },
      {
        title: 'Services & Finance',
        path: '/industries/finance-insurance',
        icon: 'Landmark',
        links: [
          { label: 'Finance & Insurance', path: '/industries/finance-insurance' },
          { label: 'Transportation & Logistics', path: '/industries/transportation-logistics' },
          { label: 'Travel & Hospitality', path: '/industries/travel-web-development' },
          { label: 'Media & Entertainment', path: '/industries/media-entertainment' },
          { label: 'Utilities & On Demand', path: '/industries/utilities-on-demand' },
          { label: 'Other Industries', path: '/industries' },
        ],
      },
    ],
    feature: {
      title: 'Your sector not listed?',
      description:
        'We have shipped in 44 verticals. Odds are we have solved your problem before.',
      ctaLabel: 'See all industries',
      ctaPath: '/industries',
    },
  },
  {
    label: 'Insights',
    path: '/insights',
    columns: [
      {
        title: 'Company',
        path: '/about',
        icon: 'Building2',
        links: [
          { label: 'About Us', path: '/about' },
          { label: 'Portfolio', path: '/portfolio' },
          { label: 'Career', path: '/career' },
          { label: 'Contact Us', path: '/contact' },
        ],
      },
      {
        title: 'Resources',
        path: '/insights',
        icon: 'FileText',
        links: [
          { label: 'Blogs & Articles', path: '/insights' },
          { label: 'FAQ', path: '/faq' },
          { label: 'Locations', path: '/locations' },
          { label: 'Sitemap', path: '/sitemap' },
        ],
      },
    ],
    feature: {
      title: 'Latest from the team',
      description:
        'Practical writing on AI, web and software from the engineers doing the work.',
      ctaLabel: 'Read the blog',
      ctaPath: '/insights',
    },
  },
];
