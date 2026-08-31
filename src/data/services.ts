import type { CatalogEntry } from './catalog-types';

export const SERVICE_CATALOG: readonly CatalogEntry[] = [
  {
    "slug": "web-development",
    "label": "Web Development",
    "title": "Web Development Services",
    "icon": "Globe",
    "category": "Development",
    "tagline": "Achivora delivers web platform built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Achivora builds web platform work that holds up in production. We start with the business outcome you need, map the workflow around it, and only then pick the stack, which is why our web platform projects tend to survive contact with real users.",
      "You own the code and the infrastructure from day one. No proprietary lock-in, no licence you have to keep paying to keep your own product running."
    ],
    "capabilities": [
      {
        "title": "Frontend Development",
        "description": "Intuitive interfaces built with HTML5, CSS3, TypeScript and React, tested on real devices."
      },
      {
        "title": "Backend Development",
        "description": "Node.js, Laravel and Python services designed for throughput, not just for the happy path."
      },
      {
        "title": "Full Stack Development",
        "description": "One team across the whole stack, so nothing falls between frontend and backend."
      },
      {
        "title": "CMS Development",
        "description": "WordPress, Shopify and headless CMS setups your marketing team can actually run alone."
      },
      {
        "title": "Database Engineering",
        "description": "PostgreSQL, MySQL and MongoDB schemas designed for the queries you will actually run."
      },
      {
        "title": "DevOps Stack",
        "description": "AWS, Docker and GitHub Actions wired up so deployment stops being a manual ritual."
      }
    ],
    "subServices": [
      {
        "title": "Web Application Development",
        "description": "End-to-end platforms that replace spreadsheets and manual process with something reliable."
      },
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      }
    ],
    "features": [
      {
        "title": "Clean, documented codebase",
        "description": "Readable code with real documentation, so any team can pick it up later without a rewrite."
      },
      {
        "title": "Performance budgets from day one",
        "description": "Speed targets set before the first commit and enforced in CI, not retrofitted after launch."
      },
      {
        "title": "Automated test coverage",
        "description": "Unit, integration and end-to-end suites that catch regressions before your users do."
      },
      {
        "title": "Secure by design",
        "description": "Authentication, authorisation and data handling reviewed at design time, not bolted on later."
      },
      {
        "title": "Scalable architecture",
        "description": "Clean service boundaries so traffic, features and team size can all grow without a rebuild."
      },
      {
        "title": "Third-party integrations",
        "description": "Payments, CRMs, ERPs, analytics and messaging wired in through stable, tested connectors."
      }
    ],
    "benefits": [
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "faqs": [
      {
        "q": "How long does a Web Development project take?",
        "a": "Most Web Development engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does Web Development cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      }
    ],
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "custom-api-development",
    "label": "Custom API Development",
    "title": "Custom API Development Services",
    "icon": "Plug",
    "category": "Development",
    "tagline": "Achivora delivers API layer built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Our API layer engagements are run by senior engineers who have shipped this before. You get a clear scope, a fixed cadence of demos, and a build you can inspect at any point rather than a black box that appears at the end.",
      "We work in your timezone, join your stand-ups if you want us to, and keep the whole roadmap visible so you always know what is shipping next and what it will cost."
    ],
    "capabilities": [
      {
        "title": "Backend Development",
        "description": "Node.js, Laravel and Python services designed for throughput, not just for the happy path."
      },
      {
        "title": "Full Stack Development",
        "description": "One team across the whole stack, so nothing falls between frontend and backend."
      },
      {
        "title": "CMS Development",
        "description": "WordPress, Shopify and headless CMS setups your marketing team can actually run alone."
      },
      {
        "title": "Database Engineering",
        "description": "PostgreSQL, MySQL and MongoDB schemas designed for the queries you will actually run."
      },
      {
        "title": "DevOps Stack",
        "description": "AWS, Docker and GitHub Actions wired up so deployment stops being a manual ritual."
      },
      {
        "title": "Frontend Development",
        "description": "Intuitive interfaces built with HTML5, CSS3, TypeScript and React, tested on real devices."
      }
    ],
    "subServices": [
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      },
      {
        "title": "Custom Portal Solutions",
        "description": "Secure customer, partner or employee portals with role-based access throughout."
      }
    ],
    "features": [
      {
        "title": "Performance budgets from day one",
        "description": "Speed targets set before the first commit and enforced in CI, not retrofitted after launch."
      },
      {
        "title": "Automated test coverage",
        "description": "Unit, integration and end-to-end suites that catch regressions before your users do."
      },
      {
        "title": "Secure by design",
        "description": "Authentication, authorisation and data handling reviewed at design time, not bolted on later."
      },
      {
        "title": "Scalable architecture",
        "description": "Clean service boundaries so traffic, features and team size can all grow without a rebuild."
      },
      {
        "title": "Third-party integrations",
        "description": "Payments, CRMs, ERPs, analytics and messaging wired in through stable, tested connectors."
      },
      {
        "title": "CI/CD pipeline included",
        "description": "Every merge builds, tests and deploys automatically, so releases stop being an event."
      }
    ],
    "benefits": [
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "faqs": [
      {
        "q": "How much does Custom API Development cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      }
    ],
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "saas-application-development",
    "label": "SaaS Application Development",
    "title": "SaaS Application Development",
    "icon": "Cloud",
    "category": "Development",
    "tagline": "Achivora delivers SaaS product built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "We treat SaaS product as a product problem rather than a ticket queue. That means measuring what the work is supposed to move, shipping in small increments, and cutting anything that does not earn its place.",
      "Pricing is transparent and scoped before we start. If something changes mid-project, you hear about the cost implication before the work happens, not on the invoice."
    ],
    "capabilities": [
      {
        "title": "Frontend Development",
        "description": "Intuitive interfaces built with HTML5, CSS3, TypeScript and React, tested on real devices."
      },
      {
        "title": "Backend Development",
        "description": "Node.js, Laravel and Python services designed for throughput, not just for the happy path."
      },
      {
        "title": "Full Stack Development",
        "description": "One team across the whole stack, so nothing falls between frontend and backend."
      },
      {
        "title": "CMS Development",
        "description": "WordPress, Shopify and headless CMS setups your marketing team can actually run alone."
      },
      {
        "title": "Database Engineering",
        "description": "PostgreSQL, MySQL and MongoDB schemas designed for the queries you will actually run."
      },
      {
        "title": "DevOps Stack",
        "description": "AWS, Docker and GitHub Actions wired up so deployment stops being a manual ritual."
      }
    ],
    "subServices": [
      {
        "title": "Web Application Development",
        "description": "End-to-end platforms that replace spreadsheets and manual process with something reliable."
      },
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      }
    ],
    "features": [
      {
        "title": "Automated test coverage",
        "description": "Unit, integration and end-to-end suites that catch regressions before your users do."
      },
      {
        "title": "Secure by design",
        "description": "Authentication, authorisation and data handling reviewed at design time, not bolted on later."
      },
      {
        "title": "Scalable architecture",
        "description": "Clean service boundaries so traffic, features and team size can all grow without a rebuild."
      },
      {
        "title": "Third-party integrations",
        "description": "Payments, CRMs, ERPs, analytics and messaging wired in through stable, tested connectors."
      },
      {
        "title": "CI/CD pipeline included",
        "description": "Every merge builds, tests and deploys automatically, so releases stop being an event."
      },
      {
        "title": "Post-launch support",
        "description": "Monitoring, patching and improvements under an agreed response time."
      }
    ],
    "benefits": [
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "faqs": [
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      }
    ],
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "custom-web-application",
    "label": "Custom Web Application",
    "title": "Custom Web Application Development",
    "icon": "AppWindow",
    "category": "Development",
    "tagline": "Achivora delivers web application built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "For over a decade we have delivered web application projects for Indian businesses of every size, from first-time founders to enterprise IT teams modernising something that has been running since 2012.",
      "Every engagement includes discovery, design, build, QA and post-launch support. One accountable team handles all of it, so nothing is lost in a handoff between the people who designed it and the people who built it."
    ],
    "capabilities": [
      {
        "title": "Backend Development",
        "description": "Node.js, Laravel and Python services designed for throughput, not just for the happy path."
      },
      {
        "title": "Full Stack Development",
        "description": "One team across the whole stack, so nothing falls between frontend and backend."
      },
      {
        "title": "CMS Development",
        "description": "WordPress, Shopify and headless CMS setups your marketing team can actually run alone."
      },
      {
        "title": "Database Engineering",
        "description": "PostgreSQL, MySQL and MongoDB schemas designed for the queries you will actually run."
      },
      {
        "title": "DevOps Stack",
        "description": "AWS, Docker and GitHub Actions wired up so deployment stops being a manual ritual."
      },
      {
        "title": "Frontend Development",
        "description": "Intuitive interfaces built with HTML5, CSS3, TypeScript and React, tested on real devices."
      }
    ],
    "subServices": [
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      },
      {
        "title": "Custom Portal Solutions",
        "description": "Secure customer, partner or employee portals with role-based access throughout."
      }
    ],
    "features": [
      {
        "title": "Clean, documented codebase",
        "description": "Readable code with real documentation, so any team can pick it up later without a rewrite."
      },
      {
        "title": "Performance budgets from day one",
        "description": "Speed targets set before the first commit and enforced in CI, not retrofitted after launch."
      },
      {
        "title": "Automated test coverage",
        "description": "Unit, integration and end-to-end suites that catch regressions before your users do."
      },
      {
        "title": "Secure by design",
        "description": "Authentication, authorisation and data handling reviewed at design time, not bolted on later."
      },
      {
        "title": "Scalable architecture",
        "description": "Clean service boundaries so traffic, features and team size can all grow without a rebuild."
      },
      {
        "title": "Third-party integrations",
        "description": "Payments, CRMs, ERPs, analytics and messaging wired in through stable, tested connectors."
      }
    ],
    "benefits": [
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "faqs": [
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a Custom Web Application project take?",
        "a": "Most Custom Web Application engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      }
    ],
    "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "laravel-development",
    "label": "Laravel Development",
    "title": "Laravel Development Services",
    "icon": "Code2",
    "category": "Development",
    "tagline": "Achivora delivers Laravel application built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Achivora builds Laravel application work that holds up in production. We start with the business outcome you need, map the workflow around it, and only then pick the stack, which is why our Laravel application projects tend to survive contact with real users.",
      "You own the code and the infrastructure from day one. No proprietary lock-in, no licence you have to keep paying to keep your own product running."
    ],
    "capabilities": [
      {
        "title": "Frontend Development",
        "description": "Intuitive interfaces built with HTML5, CSS3, TypeScript and React, tested on real devices."
      },
      {
        "title": "Backend Development",
        "description": "Node.js, Laravel and Python services designed for throughput, not just for the happy path."
      },
      {
        "title": "Full Stack Development",
        "description": "One team across the whole stack, so nothing falls between frontend and backend."
      },
      {
        "title": "CMS Development",
        "description": "WordPress, Shopify and headless CMS setups your marketing team can actually run alone."
      },
      {
        "title": "Database Engineering",
        "description": "PostgreSQL, MySQL and MongoDB schemas designed for the queries you will actually run."
      },
      {
        "title": "DevOps Stack",
        "description": "AWS, Docker and GitHub Actions wired up so deployment stops being a manual ritual."
      }
    ],
    "subServices": [
      {
        "title": "Web Application Development",
        "description": "End-to-end platforms that replace spreadsheets and manual process with something reliable."
      },
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      }
    ],
    "features": [
      {
        "title": "Performance budgets from day one",
        "description": "Speed targets set before the first commit and enforced in CI, not retrofitted after launch."
      },
      {
        "title": "Automated test coverage",
        "description": "Unit, integration and end-to-end suites that catch regressions before your users do."
      },
      {
        "title": "Secure by design",
        "description": "Authentication, authorisation and data handling reviewed at design time, not bolted on later."
      },
      {
        "title": "Scalable architecture",
        "description": "Clean service boundaries so traffic, features and team size can all grow without a rebuild."
      },
      {
        "title": "Third-party integrations",
        "description": "Payments, CRMs, ERPs, analytics and messaging wired in through stable, tested connectors."
      },
      {
        "title": "CI/CD pipeline included",
        "description": "Every merge builds, tests and deploys automatically, so releases stop being an event."
      }
    ],
    "benefits": [
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "faqs": [
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a Laravel Development project take?",
        "a": "Most Laravel Development engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does Laravel Development cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      }
    ],
    "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "mobile-app-development",
    "label": "Mobile App Development",
    "title": "Mobile App Development Services",
    "icon": "Smartphone",
    "category": "Development",
    "tagline": "Achivora delivers mobile app built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Our mobile app engagements are run by senior engineers who have shipped this before. You get a clear scope, a fixed cadence of demos, and a build you can inspect at any point rather than a black box that appears at the end.",
      "We work in your timezone, join your stand-ups if you want us to, and keep the whole roadmap visible so you always know what is shipping next and what it will cost."
    ],
    "capabilities": [
      {
        "title": "Backend Development",
        "description": "Node.js, Laravel and Python services designed for throughput, not just for the happy path."
      },
      {
        "title": "Full Stack Development",
        "description": "One team across the whole stack, so nothing falls between frontend and backend."
      },
      {
        "title": "CMS Development",
        "description": "WordPress, Shopify and headless CMS setups your marketing team can actually run alone."
      },
      {
        "title": "Database Engineering",
        "description": "PostgreSQL, MySQL and MongoDB schemas designed for the queries you will actually run."
      },
      {
        "title": "DevOps Stack",
        "description": "AWS, Docker and GitHub Actions wired up so deployment stops being a manual ritual."
      },
      {
        "title": "Frontend Development",
        "description": "Intuitive interfaces built with HTML5, CSS3, TypeScript and React, tested on real devices."
      }
    ],
    "subServices": [
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      },
      {
        "title": "Custom Portal Solutions",
        "description": "Secure customer, partner or employee portals with role-based access throughout."
      }
    ],
    "features": [
      {
        "title": "Automated test coverage",
        "description": "Unit, integration and end-to-end suites that catch regressions before your users do."
      },
      {
        "title": "Secure by design",
        "description": "Authentication, authorisation and data handling reviewed at design time, not bolted on later."
      },
      {
        "title": "Scalable architecture",
        "description": "Clean service boundaries so traffic, features and team size can all grow without a rebuild."
      },
      {
        "title": "Third-party integrations",
        "description": "Payments, CRMs, ERPs, analytics and messaging wired in through stable, tested connectors."
      },
      {
        "title": "CI/CD pipeline included",
        "description": "Every merge builds, tests and deploys automatically, so releases stop being an event."
      },
      {
        "title": "Post-launch support",
        "description": "Monitoring, patching and improvements under an agreed response time."
      }
    ],
    "benefits": [
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "faqs": [
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a Mobile App Development project take?",
        "a": "Most Mobile App Development engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does Mobile App Development cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      }
    ],
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "react-js-development",
    "label": "React JS Development",
    "title": "React JS Development Services",
    "icon": "Atom",
    "category": "Development",
    "tagline": "Achivora delivers React front-end built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "We treat React front-end as a product problem rather than a ticket queue. That means measuring what the work is supposed to move, shipping in small increments, and cutting anything that does not earn its place.",
      "Pricing is transparent and scoped before we start. If something changes mid-project, you hear about the cost implication before the work happens, not on the invoice."
    ],
    "capabilities": [
      {
        "title": "Frontend Development",
        "description": "Intuitive interfaces built with HTML5, CSS3, TypeScript and React, tested on real devices."
      },
      {
        "title": "Backend Development",
        "description": "Node.js, Laravel and Python services designed for throughput, not just for the happy path."
      },
      {
        "title": "Full Stack Development",
        "description": "One team across the whole stack, so nothing falls between frontend and backend."
      },
      {
        "title": "CMS Development",
        "description": "WordPress, Shopify and headless CMS setups your marketing team can actually run alone."
      },
      {
        "title": "Database Engineering",
        "description": "PostgreSQL, MySQL and MongoDB schemas designed for the queries you will actually run."
      },
      {
        "title": "DevOps Stack",
        "description": "AWS, Docker and GitHub Actions wired up so deployment stops being a manual ritual."
      }
    ],
    "subServices": [
      {
        "title": "Web Application Development",
        "description": "End-to-end platforms that replace spreadsheets and manual process with something reliable."
      },
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      }
    ],
    "features": [
      {
        "title": "Clean, documented codebase",
        "description": "Readable code with real documentation, so any team can pick it up later without a rewrite."
      },
      {
        "title": "Performance budgets from day one",
        "description": "Speed targets set before the first commit and enforced in CI, not retrofitted after launch."
      },
      {
        "title": "Automated test coverage",
        "description": "Unit, integration and end-to-end suites that catch regressions before your users do."
      },
      {
        "title": "Secure by design",
        "description": "Authentication, authorisation and data handling reviewed at design time, not bolted on later."
      },
      {
        "title": "Scalable architecture",
        "description": "Clean service boundaries so traffic, features and team size can all grow without a rebuild."
      },
      {
        "title": "Third-party integrations",
        "description": "Payments, CRMs, ERPs, analytics and messaging wired in through stable, tested connectors."
      }
    ],
    "benefits": [
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "faqs": [
      {
        "q": "How long does a React JS Development project take?",
        "a": "Most React JS Development engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does React JS Development cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      }
    ],
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "custom-php-development",
    "label": "Custom PHP Development",
    "title": "Custom PHP Development Services",
    "icon": "Code",
    "category": "Development",
    "tagline": "Achivora delivers PHP application built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "For over a decade we have delivered PHP application projects for Indian businesses of every size, from first-time founders to enterprise IT teams modernising something that has been running since 2012.",
      "Every engagement includes discovery, design, build, QA and post-launch support. One accountable team handles all of it, so nothing is lost in a handoff between the people who designed it and the people who built it."
    ],
    "capabilities": [
      {
        "title": "Backend Development",
        "description": "Node.js, Laravel and Python services designed for throughput, not just for the happy path."
      },
      {
        "title": "Full Stack Development",
        "description": "One team across the whole stack, so nothing falls between frontend and backend."
      },
      {
        "title": "CMS Development",
        "description": "WordPress, Shopify and headless CMS setups your marketing team can actually run alone."
      },
      {
        "title": "Database Engineering",
        "description": "PostgreSQL, MySQL and MongoDB schemas designed for the queries you will actually run."
      },
      {
        "title": "DevOps Stack",
        "description": "AWS, Docker and GitHub Actions wired up so deployment stops being a manual ritual."
      },
      {
        "title": "Frontend Development",
        "description": "Intuitive interfaces built with HTML5, CSS3, TypeScript and React, tested on real devices."
      }
    ],
    "subServices": [
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      },
      {
        "title": "Custom Portal Solutions",
        "description": "Secure customer, partner or employee portals with role-based access throughout."
      }
    ],
    "features": [
      {
        "title": "Performance budgets from day one",
        "description": "Speed targets set before the first commit and enforced in CI, not retrofitted after launch."
      },
      {
        "title": "Automated test coverage",
        "description": "Unit, integration and end-to-end suites that catch regressions before your users do."
      },
      {
        "title": "Secure by design",
        "description": "Authentication, authorisation and data handling reviewed at design time, not bolted on later."
      },
      {
        "title": "Scalable architecture",
        "description": "Clean service boundaries so traffic, features and team size can all grow without a rebuild."
      },
      {
        "title": "Third-party integrations",
        "description": "Payments, CRMs, ERPs, analytics and messaging wired in through stable, tested connectors."
      },
      {
        "title": "CI/CD pipeline included",
        "description": "Every merge builds, tests and deploys automatically, so releases stop being an event."
      }
    ],
    "benefits": [
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "faqs": [
      {
        "q": "How much does Custom PHP Development cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      }
    ],
    "image": "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "codeigniter-development",
    "label": "CodeIgniter Development",
    "title": "CodeIgniter Development Company",
    "icon": "Code2",
    "category": "Development",
    "tagline": "Achivora delivers CodeIgniter application built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Achivora builds CodeIgniter application work that holds up in production. We start with the business outcome you need, map the workflow around it, and only then pick the stack, which is why our CodeIgniter application projects tend to survive contact with real users.",
      "You own the code and the infrastructure from day one. No proprietary lock-in, no licence you have to keep paying to keep your own product running."
    ],
    "capabilities": [
      {
        "title": "Frontend Development",
        "description": "Intuitive interfaces built with HTML5, CSS3, TypeScript and React, tested on real devices."
      },
      {
        "title": "Backend Development",
        "description": "Node.js, Laravel and Python services designed for throughput, not just for the happy path."
      },
      {
        "title": "Full Stack Development",
        "description": "One team across the whole stack, so nothing falls between frontend and backend."
      },
      {
        "title": "CMS Development",
        "description": "WordPress, Shopify and headless CMS setups your marketing team can actually run alone."
      },
      {
        "title": "Database Engineering",
        "description": "PostgreSQL, MySQL and MongoDB schemas designed for the queries you will actually run."
      },
      {
        "title": "DevOps Stack",
        "description": "AWS, Docker and GitHub Actions wired up so deployment stops being a manual ritual."
      }
    ],
    "subServices": [
      {
        "title": "Web Application Development",
        "description": "End-to-end platforms that replace spreadsheets and manual process with something reliable."
      },
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      }
    ],
    "features": [
      {
        "title": "Automated test coverage",
        "description": "Unit, integration and end-to-end suites that catch regressions before your users do."
      },
      {
        "title": "Secure by design",
        "description": "Authentication, authorisation and data handling reviewed at design time, not bolted on later."
      },
      {
        "title": "Scalable architecture",
        "description": "Clean service boundaries so traffic, features and team size can all grow without a rebuild."
      },
      {
        "title": "Third-party integrations",
        "description": "Payments, CRMs, ERPs, analytics and messaging wired in through stable, tested connectors."
      },
      {
        "title": "CI/CD pipeline included",
        "description": "Every merge builds, tests and deploys automatically, so releases stop being an event."
      },
      {
        "title": "Post-launch support",
        "description": "Monitoring, patching and improvements under an agreed response time."
      }
    ],
    "benefits": [
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "faqs": [
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      }
    ],
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "wordpress-development",
    "label": "WordPress Development",
    "title": "Custom WordPress Development Services",
    "icon": "Layout",
    "category": "Development",
    "tagline": "Achivora delivers WordPress site built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Our WordPress site engagements are run by senior engineers who have shipped this before. You get a clear scope, a fixed cadence of demos, and a build you can inspect at any point rather than a black box that appears at the end.",
      "We work in your timezone, join your stand-ups if you want us to, and keep the whole roadmap visible so you always know what is shipping next and what it will cost."
    ],
    "capabilities": [
      {
        "title": "Backend Development",
        "description": "Node.js, Laravel and Python services designed for throughput, not just for the happy path."
      },
      {
        "title": "Full Stack Development",
        "description": "One team across the whole stack, so nothing falls between frontend and backend."
      },
      {
        "title": "CMS Development",
        "description": "WordPress, Shopify and headless CMS setups your marketing team can actually run alone."
      },
      {
        "title": "Database Engineering",
        "description": "PostgreSQL, MySQL and MongoDB schemas designed for the queries you will actually run."
      },
      {
        "title": "DevOps Stack",
        "description": "AWS, Docker and GitHub Actions wired up so deployment stops being a manual ritual."
      },
      {
        "title": "Frontend Development",
        "description": "Intuitive interfaces built with HTML5, CSS3, TypeScript and React, tested on real devices."
      }
    ],
    "subServices": [
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      },
      {
        "title": "Custom Portal Solutions",
        "description": "Secure customer, partner or employee portals with role-based access throughout."
      }
    ],
    "features": [
      {
        "title": "Clean, documented codebase",
        "description": "Readable code with real documentation, so any team can pick it up later without a rewrite."
      },
      {
        "title": "Performance budgets from day one",
        "description": "Speed targets set before the first commit and enforced in CI, not retrofitted after launch."
      },
      {
        "title": "Automated test coverage",
        "description": "Unit, integration and end-to-end suites that catch regressions before your users do."
      },
      {
        "title": "Secure by design",
        "description": "Authentication, authorisation and data handling reviewed at design time, not bolted on later."
      },
      {
        "title": "Scalable architecture",
        "description": "Clean service boundaries so traffic, features and team size can all grow without a rebuild."
      },
      {
        "title": "Third-party integrations",
        "description": "Payments, CRMs, ERPs, analytics and messaging wired in through stable, tested connectors."
      }
    ],
    "benefits": [
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "faqs": [
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a WordPress Development project take?",
        "a": "Most WordPress Development engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      }
    ],
    "image": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "woocommerce-development",
    "label": "WooCommerce Development",
    "title": "WooCommerce Development Services",
    "icon": "ShoppingCart",
    "category": "Development",
    "tagline": "Achivora delivers WooCommerce store built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "We treat WooCommerce store as a product problem rather than a ticket queue. That means measuring what the work is supposed to move, shipping in small increments, and cutting anything that does not earn its place.",
      "Pricing is transparent and scoped before we start. If something changes mid-project, you hear about the cost implication before the work happens, not on the invoice."
    ],
    "capabilities": [
      {
        "title": "Frontend Development",
        "description": "Intuitive interfaces built with HTML5, CSS3, TypeScript and React, tested on real devices."
      },
      {
        "title": "Backend Development",
        "description": "Node.js, Laravel and Python services designed for throughput, not just for the happy path."
      },
      {
        "title": "Full Stack Development",
        "description": "One team across the whole stack, so nothing falls between frontend and backend."
      },
      {
        "title": "CMS Development",
        "description": "WordPress, Shopify and headless CMS setups your marketing team can actually run alone."
      },
      {
        "title": "Database Engineering",
        "description": "PostgreSQL, MySQL and MongoDB schemas designed for the queries you will actually run."
      },
      {
        "title": "DevOps Stack",
        "description": "AWS, Docker and GitHub Actions wired up so deployment stops being a manual ritual."
      }
    ],
    "subServices": [
      {
        "title": "Web Application Development",
        "description": "End-to-end platforms that replace spreadsheets and manual process with something reliable."
      },
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      }
    ],
    "features": [
      {
        "title": "Performance budgets from day one",
        "description": "Speed targets set before the first commit and enforced in CI, not retrofitted after launch."
      },
      {
        "title": "Automated test coverage",
        "description": "Unit, integration and end-to-end suites that catch regressions before your users do."
      },
      {
        "title": "Secure by design",
        "description": "Authentication, authorisation and data handling reviewed at design time, not bolted on later."
      },
      {
        "title": "Scalable architecture",
        "description": "Clean service boundaries so traffic, features and team size can all grow without a rebuild."
      },
      {
        "title": "Third-party integrations",
        "description": "Payments, CRMs, ERPs, analytics and messaging wired in through stable, tested connectors."
      },
      {
        "title": "CI/CD pipeline included",
        "description": "Every merge builds, tests and deploys automatically, so releases stop being an event."
      }
    ],
    "benefits": [
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "faqs": [
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a WooCommerce Development project take?",
        "a": "Most WooCommerce Development engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does WooCommerce Development cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      }
    ],
    "image": "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "cms-development",
    "label": "CMS Development",
    "title": "CMS Development Services",
    "icon": "Files",
    "category": "Development",
    "tagline": "Achivora delivers content platform built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "For over a decade we have delivered content platform projects for Indian businesses of every size, from first-time founders to enterprise IT teams modernising something that has been running since 2012.",
      "Every engagement includes discovery, design, build, QA and post-launch support. One accountable team handles all of it, so nothing is lost in a handoff between the people who designed it and the people who built it."
    ],
    "capabilities": [
      {
        "title": "Backend Development",
        "description": "Node.js, Laravel and Python services designed for throughput, not just for the happy path."
      },
      {
        "title": "Full Stack Development",
        "description": "One team across the whole stack, so nothing falls between frontend and backend."
      },
      {
        "title": "CMS Development",
        "description": "WordPress, Shopify and headless CMS setups your marketing team can actually run alone."
      },
      {
        "title": "Database Engineering",
        "description": "PostgreSQL, MySQL and MongoDB schemas designed for the queries you will actually run."
      },
      {
        "title": "DevOps Stack",
        "description": "AWS, Docker and GitHub Actions wired up so deployment stops being a manual ritual."
      },
      {
        "title": "Frontend Development",
        "description": "Intuitive interfaces built with HTML5, CSS3, TypeScript and React, tested on real devices."
      }
    ],
    "subServices": [
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      },
      {
        "title": "Custom Portal Solutions",
        "description": "Secure customer, partner or employee portals with role-based access throughout."
      }
    ],
    "features": [
      {
        "title": "Automated test coverage",
        "description": "Unit, integration and end-to-end suites that catch regressions before your users do."
      },
      {
        "title": "Secure by design",
        "description": "Authentication, authorisation and data handling reviewed at design time, not bolted on later."
      },
      {
        "title": "Scalable architecture",
        "description": "Clean service boundaries so traffic, features and team size can all grow without a rebuild."
      },
      {
        "title": "Third-party integrations",
        "description": "Payments, CRMs, ERPs, analytics and messaging wired in through stable, tested connectors."
      },
      {
        "title": "CI/CD pipeline included",
        "description": "Every merge builds, tests and deploys automatically, so releases stop being an event."
      },
      {
        "title": "Post-launch support",
        "description": "Monitoring, patching and improvements under an agreed response time."
      }
    ],
    "benefits": [
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "faqs": [
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a CMS Development project take?",
        "a": "Most CMS Development engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does CMS Development cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      }
    ],
    "image": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "flutter-app-development",
    "label": "Flutter App Development",
    "title": "Flutter App Development Company",
    "icon": "Smartphone",
    "category": "Development",
    "tagline": "Achivora delivers Flutter app built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Achivora builds Flutter app work that holds up in production. We start with the business outcome you need, map the workflow around it, and only then pick the stack, which is why our Flutter app projects tend to survive contact with real users.",
      "You own the code and the infrastructure from day one. No proprietary lock-in, no licence you have to keep paying to keep your own product running."
    ],
    "capabilities": [
      {
        "title": "Frontend Development",
        "description": "Intuitive interfaces built with HTML5, CSS3, TypeScript and React, tested on real devices."
      },
      {
        "title": "Backend Development",
        "description": "Node.js, Laravel and Python services designed for throughput, not just for the happy path."
      },
      {
        "title": "Full Stack Development",
        "description": "One team across the whole stack, so nothing falls between frontend and backend."
      },
      {
        "title": "CMS Development",
        "description": "WordPress, Shopify and headless CMS setups your marketing team can actually run alone."
      },
      {
        "title": "Database Engineering",
        "description": "PostgreSQL, MySQL and MongoDB schemas designed for the queries you will actually run."
      },
      {
        "title": "DevOps Stack",
        "description": "AWS, Docker and GitHub Actions wired up so deployment stops being a manual ritual."
      }
    ],
    "subServices": [
      {
        "title": "Web Application Development",
        "description": "End-to-end platforms that replace spreadsheets and manual process with something reliable."
      },
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      }
    ],
    "features": [
      {
        "title": "Clean, documented codebase",
        "description": "Readable code with real documentation, so any team can pick it up later without a rewrite."
      },
      {
        "title": "Performance budgets from day one",
        "description": "Speed targets set before the first commit and enforced in CI, not retrofitted after launch."
      },
      {
        "title": "Automated test coverage",
        "description": "Unit, integration and end-to-end suites that catch regressions before your users do."
      },
      {
        "title": "Secure by design",
        "description": "Authentication, authorisation and data handling reviewed at design time, not bolted on later."
      },
      {
        "title": "Scalable architecture",
        "description": "Clean service boundaries so traffic, features and team size can all grow without a rebuild."
      },
      {
        "title": "Third-party integrations",
        "description": "Payments, CRMs, ERPs, analytics and messaging wired in through stable, tested connectors."
      }
    ],
    "benefits": [
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "faqs": [
      {
        "q": "How long does a Flutter App Development project take?",
        "a": "Most Flutter App Development engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does Flutter App Development cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      }
    ],
    "image": "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "api-integration",
    "label": "API Integration",
    "title": "API Integration Services",
    "icon": "Workflow",
    "category": "Development",
    "tagline": "Achivora delivers integration layer built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Our integration layer engagements are run by senior engineers who have shipped this before. You get a clear scope, a fixed cadence of demos, and a build you can inspect at any point rather than a black box that appears at the end.",
      "We work in your timezone, join your stand-ups if you want us to, and keep the whole roadmap visible so you always know what is shipping next and what it will cost."
    ],
    "capabilities": [
      {
        "title": "Backend Development",
        "description": "Node.js, Laravel and Python services designed for throughput, not just for the happy path."
      },
      {
        "title": "Full Stack Development",
        "description": "One team across the whole stack, so nothing falls between frontend and backend."
      },
      {
        "title": "CMS Development",
        "description": "WordPress, Shopify and headless CMS setups your marketing team can actually run alone."
      },
      {
        "title": "Database Engineering",
        "description": "PostgreSQL, MySQL and MongoDB schemas designed for the queries you will actually run."
      },
      {
        "title": "DevOps Stack",
        "description": "AWS, Docker and GitHub Actions wired up so deployment stops being a manual ritual."
      },
      {
        "title": "Frontend Development",
        "description": "Intuitive interfaces built with HTML5, CSS3, TypeScript and React, tested on real devices."
      }
    ],
    "subServices": [
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      },
      {
        "title": "Custom Portal Solutions",
        "description": "Secure customer, partner or employee portals with role-based access throughout."
      }
    ],
    "features": [
      {
        "title": "Performance budgets from day one",
        "description": "Speed targets set before the first commit and enforced in CI, not retrofitted after launch."
      },
      {
        "title": "Automated test coverage",
        "description": "Unit, integration and end-to-end suites that catch regressions before your users do."
      },
      {
        "title": "Secure by design",
        "description": "Authentication, authorisation and data handling reviewed at design time, not bolted on later."
      },
      {
        "title": "Scalable architecture",
        "description": "Clean service boundaries so traffic, features and team size can all grow without a rebuild."
      },
      {
        "title": "Third-party integrations",
        "description": "Payments, CRMs, ERPs, analytics and messaging wired in through stable, tested connectors."
      },
      {
        "title": "CI/CD pipeline included",
        "description": "Every merge builds, tests and deploys automatically, so releases stop being an event."
      }
    ],
    "benefits": [
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "faqs": [
      {
        "q": "How much does API Integration cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      }
    ],
    "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "web-design",
    "label": "Web Design",
    "title": "Web Design Services",
    "icon": "Palette",
    "category": "Design",
    "tagline": "Achivora delivers website design built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "We treat website design as a product problem rather than a ticket queue. That means measuring what the work is supposed to move, shipping in small increments, and cutting anything that does not earn its place.",
      "Pricing is transparent and scoped before we start. If something changes mid-project, you hear about the cost implication before the work happens, not on the invoice."
    ],
    "capabilities": [
      {
        "title": "User Research",
        "description": "Interviews and usability testing with your real customers before any pixels get pushed."
      },
      {
        "title": "Wireframing",
        "description": "Low-fidelity structure agreed first, so we argue about layout before we argue about colour."
      },
      {
        "title": "Visual Design",
        "description": "High-fidelity screens that look like the finished product, not an approximation of it."
      },
      {
        "title": "Design Systems",
        "description": "Reusable components and tokens that keep the product consistent as the team grows."
      },
      {
        "title": "Prototyping",
        "description": "Clickable flows you can put in front of users before committing engineering budget."
      },
      {
        "title": "Design QA",
        "description": "We review the built product against the designs and file the differences ourselves."
      }
    ],
    "subServices": [
      {
        "title": "Website Design",
        "description": "Marketing sites structured around what you need the visitor to do next."
      },
      {
        "title": "Mobile App Design",
        "description": "Native-feeling iOS and Android interfaces that respect each platform's conventions."
      },
      {
        "title": "Dashboard & SaaS Design",
        "description": "Dense, information-rich screens that stay readable under real data."
      },
      {
        "title": "Design System Build",
        "description": "A component library and token set your engineers can build against directly."
      },
      {
        "title": "Landing Page Design",
        "description": "Single-purpose pages built and iterated against a conversion target."
      },
      {
        "title": "Brand Identity",
        "description": "Logo, palette, type and usage rules documented so the brand stays consistent."
      },
      {
        "title": "Illustration & Iconography",
        "description": "Custom visual assets so your product does not look like every other one."
      },
      {
        "title": "Design Audit",
        "description": "A structured review of an existing product with prioritised, costed fixes."
      }
    ],
    "features": [
      {
        "title": "Accessible by default",
        "description": "WCAG AA contrast, keyboard navigation and screen-reader semantics built in."
      },
      {
        "title": "Responsive across every device",
        "description": "Layouts tested on real phones and tablets, not just a browser resize."
      },
      {
        "title": "Interactive prototypes",
        "description": "Clickable flows you can test with users before committing engineering time."
      },
      {
        "title": "Conversion-focused layouts",
        "description": "Page structure driven by what you need the visitor to do next."
      },
      {
        "title": "Brand-consistent visuals",
        "description": "Type, colour and imagery that stay recognisably yours across every touchpoint."
      },
      {
        "title": "Developer-ready handoff",
        "description": "Specs, tokens and assets packaged so engineering never has to guess."
      }
    ],
    "benefits": [
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "Figma",
      "Design Tokens",
      "Storybook",
      "Framer",
      "Adobe CC",
      "Lottie"
    ],
    "faqs": [
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      }
    ],
    "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "ui-ux-design",
    "label": "UI/UX Design",
    "title": "UI/UX Design Services",
    "icon": "PenTool",
    "category": "Design",
    "tagline": "Achivora delivers product experience built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "For over a decade we have delivered product experience projects for Indian businesses of every size, from first-time founders to enterprise IT teams modernising something that has been running since 2012.",
      "Every engagement includes discovery, design, build, QA and post-launch support. One accountable team handles all of it, so nothing is lost in a handoff between the people who designed it and the people who built it."
    ],
    "capabilities": [
      {
        "title": "Wireframing",
        "description": "Low-fidelity structure agreed first, so we argue about layout before we argue about colour."
      },
      {
        "title": "Visual Design",
        "description": "High-fidelity screens that look like the finished product, not an approximation of it."
      },
      {
        "title": "Design Systems",
        "description": "Reusable components and tokens that keep the product consistent as the team grows."
      },
      {
        "title": "Prototyping",
        "description": "Clickable flows you can put in front of users before committing engineering budget."
      },
      {
        "title": "Design QA",
        "description": "We review the built product against the designs and file the differences ourselves."
      },
      {
        "title": "User Research",
        "description": "Interviews and usability testing with your real customers before any pixels get pushed."
      }
    ],
    "subServices": [
      {
        "title": "Mobile App Design",
        "description": "Native-feeling iOS and Android interfaces that respect each platform's conventions."
      },
      {
        "title": "Dashboard & SaaS Design",
        "description": "Dense, information-rich screens that stay readable under real data."
      },
      {
        "title": "Design System Build",
        "description": "A component library and token set your engineers can build against directly."
      },
      {
        "title": "Landing Page Design",
        "description": "Single-purpose pages built and iterated against a conversion target."
      },
      {
        "title": "Brand Identity",
        "description": "Logo, palette, type and usage rules documented so the brand stays consistent."
      },
      {
        "title": "Illustration & Iconography",
        "description": "Custom visual assets so your product does not look like every other one."
      },
      {
        "title": "Design Audit",
        "description": "A structured review of an existing product with prioritised, costed fixes."
      },
      {
        "title": "Website Design",
        "description": "Marketing sites structured around what you need the visitor to do next."
      }
    ],
    "features": [
      {
        "title": "Research-led design",
        "description": "We talk to your actual users before drawing a single screen."
      },
      {
        "title": "Design system, not one-off screens",
        "description": "Reusable components and tokens so the product stays consistent as it grows."
      },
      {
        "title": "Accessible by default",
        "description": "WCAG AA contrast, keyboard navigation and screen-reader semantics built in."
      },
      {
        "title": "Responsive across every device",
        "description": "Layouts tested on real phones and tablets, not just a browser resize."
      },
      {
        "title": "Interactive prototypes",
        "description": "Clickable flows you can test with users before committing engineering time."
      },
      {
        "title": "Conversion-focused layouts",
        "description": "Page structure driven by what you need the visitor to do next."
      }
    ],
    "benefits": [
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "Figma",
      "Design Tokens",
      "Storybook",
      "Framer",
      "Adobe CC",
      "Lottie"
    ],
    "faqs": [
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a UI/UX Design project take?",
        "a": "Most UI/UX Design engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      }
    ],
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "brand-design",
    "label": "Brand Design",
    "title": "Brand Design Services",
    "icon": "Sparkles",
    "category": "Design",
    "tagline": "Achivora delivers brand identity built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Achivora builds brand identity work that holds up in production. We start with the business outcome you need, map the workflow around it, and only then pick the stack, which is why our brand identity projects tend to survive contact with real users.",
      "You own the code and the infrastructure from day one. No proprietary lock-in, no licence you have to keep paying to keep your own product running."
    ],
    "capabilities": [
      {
        "title": "User Research",
        "description": "Interviews and usability testing with your real customers before any pixels get pushed."
      },
      {
        "title": "Wireframing",
        "description": "Low-fidelity structure agreed first, so we argue about layout before we argue about colour."
      },
      {
        "title": "Visual Design",
        "description": "High-fidelity screens that look like the finished product, not an approximation of it."
      },
      {
        "title": "Design Systems",
        "description": "Reusable components and tokens that keep the product consistent as the team grows."
      },
      {
        "title": "Prototyping",
        "description": "Clickable flows you can put in front of users before committing engineering budget."
      },
      {
        "title": "Design QA",
        "description": "We review the built product against the designs and file the differences ourselves."
      }
    ],
    "subServices": [
      {
        "title": "Website Design",
        "description": "Marketing sites structured around what you need the visitor to do next."
      },
      {
        "title": "Mobile App Design",
        "description": "Native-feeling iOS and Android interfaces that respect each platform's conventions."
      },
      {
        "title": "Dashboard & SaaS Design",
        "description": "Dense, information-rich screens that stay readable under real data."
      },
      {
        "title": "Design System Build",
        "description": "A component library and token set your engineers can build against directly."
      },
      {
        "title": "Landing Page Design",
        "description": "Single-purpose pages built and iterated against a conversion target."
      },
      {
        "title": "Brand Identity",
        "description": "Logo, palette, type and usage rules documented so the brand stays consistent."
      },
      {
        "title": "Illustration & Iconography",
        "description": "Custom visual assets so your product does not look like every other one."
      },
      {
        "title": "Design Audit",
        "description": "A structured review of an existing product with prioritised, costed fixes."
      }
    ],
    "features": [
      {
        "title": "Design system, not one-off screens",
        "description": "Reusable components and tokens so the product stays consistent as it grows."
      },
      {
        "title": "Accessible by default",
        "description": "WCAG AA contrast, keyboard navigation and screen-reader semantics built in."
      },
      {
        "title": "Responsive across every device",
        "description": "Layouts tested on real phones and tablets, not just a browser resize."
      },
      {
        "title": "Interactive prototypes",
        "description": "Clickable flows you can test with users before committing engineering time."
      },
      {
        "title": "Conversion-focused layouts",
        "description": "Page structure driven by what you need the visitor to do next."
      },
      {
        "title": "Brand-consistent visuals",
        "description": "Type, colour and imagery that stay recognisably yours across every touchpoint."
      }
    ],
    "benefits": [
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "Figma",
      "Design Tokens",
      "Storybook",
      "Framer",
      "Adobe CC",
      "Lottie"
    ],
    "faqs": [
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a Brand Design project take?",
        "a": "Most Brand Design engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does Brand Design cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      }
    ],
    "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "seo-services",
    "label": "SEO Services",
    "title": "SEO Services",
    "icon": "TrendingUp",
    "category": "Marketing",
    "tagline": "Achivora delivers search visibility built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Our search visibility engagements are run by senior engineers who have shipped this before. You get a clear scope, a fixed cadence of demos, and a build you can inspect at any point rather than a black box that appears at the end.",
      "We work in your timezone, join your stand-ups if you want us to, and keep the whole roadmap visible so you always know what is shipping next and what it will cost."
    ],
    "capabilities": [
      {
        "title": "Keyword Strategy",
        "description": "Targeting search intent that converts, not just terms with impressive volume."
      },
      {
        "title": "On-Page Optimisation",
        "description": "Titles, structure, internal linking and schema, applied page by page."
      },
      {
        "title": "Content Production",
        "description": "Briefs, drafts and edits from writers who research the topic properly."
      },
      {
        "title": "Off-Page & Authority",
        "description": "Digital PR and genuinely earned links, never a bought network."
      },
      {
        "title": "Reporting & Attribution",
        "description": "Dashboards that connect channel activity to actual pipeline."
      },
      {
        "title": "Technical Audit",
        "description": "A full crawl of the site to find what is actively holding rankings back."
      }
    ],
    "subServices": [
      {
        "title": "Local SEO",
        "description": "Google Business Profile, citations and local landing pages for each area you serve."
      },
      {
        "title": "Pay-Per-Click Advertising",
        "description": "Google and Meta campaigns managed against cost per qualified lead."
      },
      {
        "title": "Social Media Management",
        "description": "Content calendars, production and community management across channels."
      },
      {
        "title": "Content Strategy",
        "description": "A publishing plan built from search demand and real customer questions."
      },
      {
        "title": "Email & Automation",
        "description": "Lifecycle sequences that stay useful instead of purely promotional."
      },
      {
        "title": "Conversion Rate Optimisation",
        "description": "Structured testing on the pages that already get traffic."
      },
      {
        "title": "Analytics & Reporting",
        "description": "Clean tracking setup so the numbers you report can be trusted."
      },
      {
        "title": "Search Engine Optimisation",
        "description": "Technical, on-page and content work aimed at qualified organic traffic."
      }
    ],
    "features": [
      {
        "title": "Competitor and gap analysis",
        "description": "We map where you are actually losing to see where the fastest wins are."
      },
      {
        "title": "Keyword and intent research",
        "description": "Targeting the searches that lead to revenue, not the ones with vanity volume."
      },
      {
        "title": "Content built for humans first",
        "description": "Written to be genuinely useful, structured so search engines can read it."
      },
      {
        "title": "Technical foundation fixed first",
        "description": "Speed, crawlability and structure sorted before spending on promotion."
      },
      {
        "title": "Conversion tracking wired in",
        "description": "Proper attribution so you know which channel actually produced the enquiry."
      },
      {
        "title": "No long lock-in contracts",
        "description": "Month to month once the initial engagement ends. We keep the work, not the contract."
      }
    ],
    "benefits": [
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "GA4",
      "Search Console",
      "Ahrefs",
      "Semrush",
      "Looker Studio",
      "Meta Ads",
      "Google Ads"
    ],
    "faqs": [
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a SEO Services project take?",
        "a": "Most SEO Services engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does SEO Services cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      }
    ],
    "image": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "technical-seo",
    "label": "Technical SEO",
    "title": "Technical SEO Services",
    "icon": "Wrench",
    "category": "Marketing",
    "tagline": "Achivora delivers technical SEO built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "We treat technical SEO as a product problem rather than a ticket queue. That means measuring what the work is supposed to move, shipping in small increments, and cutting anything that does not earn its place.",
      "Pricing is transparent and scoped before we start. If something changes mid-project, you hear about the cost implication before the work happens, not on the invoice."
    ],
    "capabilities": [
      {
        "title": "Technical Audit",
        "description": "A full crawl of the site to find what is actively holding rankings back."
      },
      {
        "title": "Keyword Strategy",
        "description": "Targeting search intent that converts, not just terms with impressive volume."
      },
      {
        "title": "On-Page Optimisation",
        "description": "Titles, structure, internal linking and schema, applied page by page."
      },
      {
        "title": "Content Production",
        "description": "Briefs, drafts and edits from writers who research the topic properly."
      },
      {
        "title": "Off-Page & Authority",
        "description": "Digital PR and genuinely earned links, never a bought network."
      },
      {
        "title": "Reporting & Attribution",
        "description": "Dashboards that connect channel activity to actual pipeline."
      }
    ],
    "subServices": [
      {
        "title": "Search Engine Optimisation",
        "description": "Technical, on-page and content work aimed at qualified organic traffic."
      },
      {
        "title": "Local SEO",
        "description": "Google Business Profile, citations and local landing pages for each area you serve."
      },
      {
        "title": "Pay-Per-Click Advertising",
        "description": "Google and Meta campaigns managed against cost per qualified lead."
      },
      {
        "title": "Social Media Management",
        "description": "Content calendars, production and community management across channels."
      },
      {
        "title": "Content Strategy",
        "description": "A publishing plan built from search demand and real customer questions."
      },
      {
        "title": "Email & Automation",
        "description": "Lifecycle sequences that stay useful instead of purely promotional."
      },
      {
        "title": "Conversion Rate Optimisation",
        "description": "Structured testing on the pages that already get traffic."
      },
      {
        "title": "Analytics & Reporting",
        "description": "Clean tracking setup so the numbers you report can be trusted."
      }
    ],
    "features": [
      {
        "title": "Measurable targets agreed upfront",
        "description": "We define what success looks like in numbers before the work starts."
      },
      {
        "title": "Transparent monthly reporting",
        "description": "A dashboard you can read yourself, plus a call to explain what changed and why."
      },
      {
        "title": "Competitor and gap analysis",
        "description": "We map where you are actually losing to see where the fastest wins are."
      },
      {
        "title": "Keyword and intent research",
        "description": "Targeting the searches that lead to revenue, not the ones with vanity volume."
      },
      {
        "title": "Content built for humans first",
        "description": "Written to be genuinely useful, structured so search engines can read it."
      },
      {
        "title": "Technical foundation fixed first",
        "description": "Speed, crawlability and structure sorted before spending on promotion."
      }
    ],
    "benefits": [
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "GA4",
      "Search Console",
      "Ahrefs",
      "Semrush",
      "Looker Studio",
      "Meta Ads",
      "Google Ads"
    ],
    "faqs": [
      {
        "q": "How long does a Technical SEO project take?",
        "a": "Most Technical SEO engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does Technical SEO cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      }
    ],
    "image": "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "local-seo",
    "label": "Local SEO",
    "title": "Local SEO Services",
    "icon": "MapPin",
    "category": "Marketing",
    "tagline": "Achivora delivers local search presence built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "For over a decade we have delivered local search presence projects for Indian businesses of every size, from first-time founders to enterprise IT teams modernising something that has been running since 2012.",
      "Every engagement includes discovery, design, build, QA and post-launch support. One accountable team handles all of it, so nothing is lost in a handoff between the people who designed it and the people who built it."
    ],
    "capabilities": [
      {
        "title": "Keyword Strategy",
        "description": "Targeting search intent that converts, not just terms with impressive volume."
      },
      {
        "title": "On-Page Optimisation",
        "description": "Titles, structure, internal linking and schema, applied page by page."
      },
      {
        "title": "Content Production",
        "description": "Briefs, drafts and edits from writers who research the topic properly."
      },
      {
        "title": "Off-Page & Authority",
        "description": "Digital PR and genuinely earned links, never a bought network."
      },
      {
        "title": "Reporting & Attribution",
        "description": "Dashboards that connect channel activity to actual pipeline."
      },
      {
        "title": "Technical Audit",
        "description": "A full crawl of the site to find what is actively holding rankings back."
      }
    ],
    "subServices": [
      {
        "title": "Local SEO",
        "description": "Google Business Profile, citations and local landing pages for each area you serve."
      },
      {
        "title": "Pay-Per-Click Advertising",
        "description": "Google and Meta campaigns managed against cost per qualified lead."
      },
      {
        "title": "Social Media Management",
        "description": "Content calendars, production and community management across channels."
      },
      {
        "title": "Content Strategy",
        "description": "A publishing plan built from search demand and real customer questions."
      },
      {
        "title": "Email & Automation",
        "description": "Lifecycle sequences that stay useful instead of purely promotional."
      },
      {
        "title": "Conversion Rate Optimisation",
        "description": "Structured testing on the pages that already get traffic."
      },
      {
        "title": "Analytics & Reporting",
        "description": "Clean tracking setup so the numbers you report can be trusted."
      },
      {
        "title": "Search Engine Optimisation",
        "description": "Technical, on-page and content work aimed at qualified organic traffic."
      }
    ],
    "features": [
      {
        "title": "Transparent monthly reporting",
        "description": "A dashboard you can read yourself, plus a call to explain what changed and why."
      },
      {
        "title": "Competitor and gap analysis",
        "description": "We map where you are actually losing to see where the fastest wins are."
      },
      {
        "title": "Keyword and intent research",
        "description": "Targeting the searches that lead to revenue, not the ones with vanity volume."
      },
      {
        "title": "Content built for humans first",
        "description": "Written to be genuinely useful, structured so search engines can read it."
      },
      {
        "title": "Technical foundation fixed first",
        "description": "Speed, crawlability and structure sorted before spending on promotion."
      },
      {
        "title": "Conversion tracking wired in",
        "description": "Proper attribution so you know which channel actually produced the enquiry."
      }
    ],
    "benefits": [
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "GA4",
      "Search Console",
      "Ahrefs",
      "Semrush",
      "Looker Studio",
      "Meta Ads",
      "Google Ads"
    ],
    "faqs": [
      {
        "q": "How much does Local SEO cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      }
    ],
    "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "seo-audit",
    "label": "SEO Audit",
    "title": "SEO Audit Services",
    "icon": "Search",
    "category": "Marketing",
    "tagline": "Achivora delivers SEO audit built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Achivora builds SEO audit work that holds up in production. We start with the business outcome you need, map the workflow around it, and only then pick the stack, which is why our SEO audit projects tend to survive contact with real users.",
      "You own the code and the infrastructure from day one. No proprietary lock-in, no licence you have to keep paying to keep your own product running."
    ],
    "capabilities": [
      {
        "title": "Technical Audit",
        "description": "A full crawl of the site to find what is actively holding rankings back."
      },
      {
        "title": "Keyword Strategy",
        "description": "Targeting search intent that converts, not just terms with impressive volume."
      },
      {
        "title": "On-Page Optimisation",
        "description": "Titles, structure, internal linking and schema, applied page by page."
      },
      {
        "title": "Content Production",
        "description": "Briefs, drafts and edits from writers who research the topic properly."
      },
      {
        "title": "Off-Page & Authority",
        "description": "Digital PR and genuinely earned links, never a bought network."
      },
      {
        "title": "Reporting & Attribution",
        "description": "Dashboards that connect channel activity to actual pipeline."
      }
    ],
    "subServices": [
      {
        "title": "Search Engine Optimisation",
        "description": "Technical, on-page and content work aimed at qualified organic traffic."
      },
      {
        "title": "Local SEO",
        "description": "Google Business Profile, citations and local landing pages for each area you serve."
      },
      {
        "title": "Pay-Per-Click Advertising",
        "description": "Google and Meta campaigns managed against cost per qualified lead."
      },
      {
        "title": "Social Media Management",
        "description": "Content calendars, production and community management across channels."
      },
      {
        "title": "Content Strategy",
        "description": "A publishing plan built from search demand and real customer questions."
      },
      {
        "title": "Email & Automation",
        "description": "Lifecycle sequences that stay useful instead of purely promotional."
      },
      {
        "title": "Conversion Rate Optimisation",
        "description": "Structured testing on the pages that already get traffic."
      },
      {
        "title": "Analytics & Reporting",
        "description": "Clean tracking setup so the numbers you report can be trusted."
      }
    ],
    "features": [
      {
        "title": "Competitor and gap analysis",
        "description": "We map where you are actually losing to see where the fastest wins are."
      },
      {
        "title": "Keyword and intent research",
        "description": "Targeting the searches that lead to revenue, not the ones with vanity volume."
      },
      {
        "title": "Content built for humans first",
        "description": "Written to be genuinely useful, structured so search engines can read it."
      },
      {
        "title": "Technical foundation fixed first",
        "description": "Speed, crawlability and structure sorted before spending on promotion."
      },
      {
        "title": "Conversion tracking wired in",
        "description": "Proper attribution so you know which channel actually produced the enquiry."
      },
      {
        "title": "No long lock-in contracts",
        "description": "Month to month once the initial engagement ends. We keep the work, not the contract."
      }
    ],
    "benefits": [
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "GA4",
      "Search Console",
      "Ahrefs",
      "Semrush",
      "Looker Studio",
      "Meta Ads",
      "Google Ads"
    ],
    "faqs": [
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      }
    ],
    "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "link-building",
    "label": "Link Building",
    "title": "Link Building Services",
    "icon": "Link",
    "category": "Marketing",
    "tagline": "Achivora delivers backlink profile built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Our backlink profile engagements are run by senior engineers who have shipped this before. You get a clear scope, a fixed cadence of demos, and a build you can inspect at any point rather than a black box that appears at the end.",
      "We work in your timezone, join your stand-ups if you want us to, and keep the whole roadmap visible so you always know what is shipping next and what it will cost."
    ],
    "capabilities": [
      {
        "title": "Keyword Strategy",
        "description": "Targeting search intent that converts, not just terms with impressive volume."
      },
      {
        "title": "On-Page Optimisation",
        "description": "Titles, structure, internal linking and schema, applied page by page."
      },
      {
        "title": "Content Production",
        "description": "Briefs, drafts and edits from writers who research the topic properly."
      },
      {
        "title": "Off-Page & Authority",
        "description": "Digital PR and genuinely earned links, never a bought network."
      },
      {
        "title": "Reporting & Attribution",
        "description": "Dashboards that connect channel activity to actual pipeline."
      },
      {
        "title": "Technical Audit",
        "description": "A full crawl of the site to find what is actively holding rankings back."
      }
    ],
    "subServices": [
      {
        "title": "Local SEO",
        "description": "Google Business Profile, citations and local landing pages for each area you serve."
      },
      {
        "title": "Pay-Per-Click Advertising",
        "description": "Google and Meta campaigns managed against cost per qualified lead."
      },
      {
        "title": "Social Media Management",
        "description": "Content calendars, production and community management across channels."
      },
      {
        "title": "Content Strategy",
        "description": "A publishing plan built from search demand and real customer questions."
      },
      {
        "title": "Email & Automation",
        "description": "Lifecycle sequences that stay useful instead of purely promotional."
      },
      {
        "title": "Conversion Rate Optimisation",
        "description": "Structured testing on the pages that already get traffic."
      },
      {
        "title": "Analytics & Reporting",
        "description": "Clean tracking setup so the numbers you report can be trusted."
      },
      {
        "title": "Search Engine Optimisation",
        "description": "Technical, on-page and content work aimed at qualified organic traffic."
      }
    ],
    "features": [
      {
        "title": "Measurable targets agreed upfront",
        "description": "We define what success looks like in numbers before the work starts."
      },
      {
        "title": "Transparent monthly reporting",
        "description": "A dashboard you can read yourself, plus a call to explain what changed and why."
      },
      {
        "title": "Competitor and gap analysis",
        "description": "We map where you are actually losing to see where the fastest wins are."
      },
      {
        "title": "Keyword and intent research",
        "description": "Targeting the searches that lead to revenue, not the ones with vanity volume."
      },
      {
        "title": "Content built for humans first",
        "description": "Written to be genuinely useful, structured so search engines can read it."
      },
      {
        "title": "Technical foundation fixed first",
        "description": "Speed, crawlability and structure sorted before spending on promotion."
      }
    ],
    "benefits": [
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "GA4",
      "Search Console",
      "Ahrefs",
      "Semrush",
      "Looker Studio",
      "Meta Ads",
      "Google Ads"
    ],
    "faqs": [
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a Link Building project take?",
        "a": "Most Link Building engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      }
    ],
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "digital-marketing",
    "label": "Digital Marketing",
    "title": "Digital Marketing Services",
    "icon": "Megaphone",
    "category": "Marketing",
    "tagline": "Achivora delivers digital marketing programme built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "We treat digital marketing programme as a product problem rather than a ticket queue. That means measuring what the work is supposed to move, shipping in small increments, and cutting anything that does not earn its place.",
      "Pricing is transparent and scoped before we start. If something changes mid-project, you hear about the cost implication before the work happens, not on the invoice."
    ],
    "capabilities": [
      {
        "title": "Technical Audit",
        "description": "A full crawl of the site to find what is actively holding rankings back."
      },
      {
        "title": "Keyword Strategy",
        "description": "Targeting search intent that converts, not just terms with impressive volume."
      },
      {
        "title": "On-Page Optimisation",
        "description": "Titles, structure, internal linking and schema, applied page by page."
      },
      {
        "title": "Content Production",
        "description": "Briefs, drafts and edits from writers who research the topic properly."
      },
      {
        "title": "Off-Page & Authority",
        "description": "Digital PR and genuinely earned links, never a bought network."
      },
      {
        "title": "Reporting & Attribution",
        "description": "Dashboards that connect channel activity to actual pipeline."
      }
    ],
    "subServices": [
      {
        "title": "Search Engine Optimisation",
        "description": "Technical, on-page and content work aimed at qualified organic traffic."
      },
      {
        "title": "Local SEO",
        "description": "Google Business Profile, citations and local landing pages for each area you serve."
      },
      {
        "title": "Pay-Per-Click Advertising",
        "description": "Google and Meta campaigns managed against cost per qualified lead."
      },
      {
        "title": "Social Media Management",
        "description": "Content calendars, production and community management across channels."
      },
      {
        "title": "Content Strategy",
        "description": "A publishing plan built from search demand and real customer questions."
      },
      {
        "title": "Email & Automation",
        "description": "Lifecycle sequences that stay useful instead of purely promotional."
      },
      {
        "title": "Conversion Rate Optimisation",
        "description": "Structured testing on the pages that already get traffic."
      },
      {
        "title": "Analytics & Reporting",
        "description": "Clean tracking setup so the numbers you report can be trusted."
      }
    ],
    "features": [
      {
        "title": "Transparent monthly reporting",
        "description": "A dashboard you can read yourself, plus a call to explain what changed and why."
      },
      {
        "title": "Competitor and gap analysis",
        "description": "We map where you are actually losing to see where the fastest wins are."
      },
      {
        "title": "Keyword and intent research",
        "description": "Targeting the searches that lead to revenue, not the ones with vanity volume."
      },
      {
        "title": "Content built for humans first",
        "description": "Written to be genuinely useful, structured so search engines can read it."
      },
      {
        "title": "Technical foundation fixed first",
        "description": "Speed, crawlability and structure sorted before spending on promotion."
      },
      {
        "title": "Conversion tracking wired in",
        "description": "Proper attribution so you know which channel actually produced the enquiry."
      }
    ],
    "benefits": [
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "GA4",
      "Search Console",
      "Ahrefs",
      "Semrush",
      "Looker Studio",
      "Meta Ads",
      "Google Ads"
    ],
    "faqs": [
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a Digital Marketing project take?",
        "a": "Most Digital Marketing engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does Digital Marketing cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      }
    ],
    "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "social-media-marketing",
    "label": "Social Media Marketing",
    "title": "Social Media Marketing Services",
    "icon": "Share2",
    "category": "Marketing",
    "tagline": "Achivora delivers social presence built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "For over a decade we have delivered social presence projects for Indian businesses of every size, from first-time founders to enterprise IT teams modernising something that has been running since 2012.",
      "Every engagement includes discovery, design, build, QA and post-launch support. One accountable team handles all of it, so nothing is lost in a handoff between the people who designed it and the people who built it."
    ],
    "capabilities": [
      {
        "title": "Keyword Strategy",
        "description": "Targeting search intent that converts, not just terms with impressive volume."
      },
      {
        "title": "On-Page Optimisation",
        "description": "Titles, structure, internal linking and schema, applied page by page."
      },
      {
        "title": "Content Production",
        "description": "Briefs, drafts and edits from writers who research the topic properly."
      },
      {
        "title": "Off-Page & Authority",
        "description": "Digital PR and genuinely earned links, never a bought network."
      },
      {
        "title": "Reporting & Attribution",
        "description": "Dashboards that connect channel activity to actual pipeline."
      },
      {
        "title": "Technical Audit",
        "description": "A full crawl of the site to find what is actively holding rankings back."
      }
    ],
    "subServices": [
      {
        "title": "Local SEO",
        "description": "Google Business Profile, citations and local landing pages for each area you serve."
      },
      {
        "title": "Pay-Per-Click Advertising",
        "description": "Google and Meta campaigns managed against cost per qualified lead."
      },
      {
        "title": "Social Media Management",
        "description": "Content calendars, production and community management across channels."
      },
      {
        "title": "Content Strategy",
        "description": "A publishing plan built from search demand and real customer questions."
      },
      {
        "title": "Email & Automation",
        "description": "Lifecycle sequences that stay useful instead of purely promotional."
      },
      {
        "title": "Conversion Rate Optimisation",
        "description": "Structured testing on the pages that already get traffic."
      },
      {
        "title": "Analytics & Reporting",
        "description": "Clean tracking setup so the numbers you report can be trusted."
      },
      {
        "title": "Search Engine Optimisation",
        "description": "Technical, on-page and content work aimed at qualified organic traffic."
      }
    ],
    "features": [
      {
        "title": "Competitor and gap analysis",
        "description": "We map where you are actually losing to see where the fastest wins are."
      },
      {
        "title": "Keyword and intent research",
        "description": "Targeting the searches that lead to revenue, not the ones with vanity volume."
      },
      {
        "title": "Content built for humans first",
        "description": "Written to be genuinely useful, structured so search engines can read it."
      },
      {
        "title": "Technical foundation fixed first",
        "description": "Speed, crawlability and structure sorted before spending on promotion."
      },
      {
        "title": "Conversion tracking wired in",
        "description": "Proper attribution so you know which channel actually produced the enquiry."
      },
      {
        "title": "No long lock-in contracts",
        "description": "Month to month once the initial engagement ends. We keep the work, not the contract."
      }
    ],
    "benefits": [
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "GA4",
      "Search Console",
      "Ahrefs",
      "Semrush",
      "Looker Studio",
      "Meta Ads",
      "Google Ads"
    ],
    "faqs": [
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a Social Media Marketing project take?",
        "a": "Most Social Media Marketing engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does Social Media Marketing cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      }
    ],
    "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "content-marketing",
    "label": "Content Marketing",
    "title": "Content Marketing Services",
    "icon": "FileText",
    "category": "Marketing",
    "tagline": "Achivora delivers content engine built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Achivora builds content engine work that holds up in production. We start with the business outcome you need, map the workflow around it, and only then pick the stack, which is why our content engine projects tend to survive contact with real users.",
      "You own the code and the infrastructure from day one. No proprietary lock-in, no licence you have to keep paying to keep your own product running."
    ],
    "capabilities": [
      {
        "title": "Technical Audit",
        "description": "A full crawl of the site to find what is actively holding rankings back."
      },
      {
        "title": "Keyword Strategy",
        "description": "Targeting search intent that converts, not just terms with impressive volume."
      },
      {
        "title": "On-Page Optimisation",
        "description": "Titles, structure, internal linking and schema, applied page by page."
      },
      {
        "title": "Content Production",
        "description": "Briefs, drafts and edits from writers who research the topic properly."
      },
      {
        "title": "Off-Page & Authority",
        "description": "Digital PR and genuinely earned links, never a bought network."
      },
      {
        "title": "Reporting & Attribution",
        "description": "Dashboards that connect channel activity to actual pipeline."
      }
    ],
    "subServices": [
      {
        "title": "Search Engine Optimisation",
        "description": "Technical, on-page and content work aimed at qualified organic traffic."
      },
      {
        "title": "Local SEO",
        "description": "Google Business Profile, citations and local landing pages for each area you serve."
      },
      {
        "title": "Pay-Per-Click Advertising",
        "description": "Google and Meta campaigns managed against cost per qualified lead."
      },
      {
        "title": "Social Media Management",
        "description": "Content calendars, production and community management across channels."
      },
      {
        "title": "Content Strategy",
        "description": "A publishing plan built from search demand and real customer questions."
      },
      {
        "title": "Email & Automation",
        "description": "Lifecycle sequences that stay useful instead of purely promotional."
      },
      {
        "title": "Conversion Rate Optimisation",
        "description": "Structured testing on the pages that already get traffic."
      },
      {
        "title": "Analytics & Reporting",
        "description": "Clean tracking setup so the numbers you report can be trusted."
      }
    ],
    "features": [
      {
        "title": "Measurable targets agreed upfront",
        "description": "We define what success looks like in numbers before the work starts."
      },
      {
        "title": "Transparent monthly reporting",
        "description": "A dashboard you can read yourself, plus a call to explain what changed and why."
      },
      {
        "title": "Competitor and gap analysis",
        "description": "We map where you are actually losing to see where the fastest wins are."
      },
      {
        "title": "Keyword and intent research",
        "description": "Targeting the searches that lead to revenue, not the ones with vanity volume."
      },
      {
        "title": "Content built for humans first",
        "description": "Written to be genuinely useful, structured so search engines can read it."
      },
      {
        "title": "Technical foundation fixed first",
        "description": "Speed, crawlability and structure sorted before spending on promotion."
      }
    ],
    "benefits": [
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "GA4",
      "Search Console",
      "Ahrefs",
      "Semrush",
      "Looker Studio",
      "Meta Ads",
      "Google Ads"
    ],
    "faqs": [
      {
        "q": "How long does a Content Marketing project take?",
        "a": "Most Content Marketing engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does Content Marketing cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      }
    ],
    "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "paid-marketing",
    "label": "Paid Marketing",
    "title": "Paid Marketing Services",
    "icon": "Target",
    "category": "Marketing",
    "tagline": "Achivora delivers paid media programme built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Our paid media programme engagements are run by senior engineers who have shipped this before. You get a clear scope, a fixed cadence of demos, and a build you can inspect at any point rather than a black box that appears at the end.",
      "We work in your timezone, join your stand-ups if you want us to, and keep the whole roadmap visible so you always know what is shipping next and what it will cost."
    ],
    "capabilities": [
      {
        "title": "Keyword Strategy",
        "description": "Targeting search intent that converts, not just terms with impressive volume."
      },
      {
        "title": "On-Page Optimisation",
        "description": "Titles, structure, internal linking and schema, applied page by page."
      },
      {
        "title": "Content Production",
        "description": "Briefs, drafts and edits from writers who research the topic properly."
      },
      {
        "title": "Off-Page & Authority",
        "description": "Digital PR and genuinely earned links, never a bought network."
      },
      {
        "title": "Reporting & Attribution",
        "description": "Dashboards that connect channel activity to actual pipeline."
      },
      {
        "title": "Technical Audit",
        "description": "A full crawl of the site to find what is actively holding rankings back."
      }
    ],
    "subServices": [
      {
        "title": "Local SEO",
        "description": "Google Business Profile, citations and local landing pages for each area you serve."
      },
      {
        "title": "Pay-Per-Click Advertising",
        "description": "Google and Meta campaigns managed against cost per qualified lead."
      },
      {
        "title": "Social Media Management",
        "description": "Content calendars, production and community management across channels."
      },
      {
        "title": "Content Strategy",
        "description": "A publishing plan built from search demand and real customer questions."
      },
      {
        "title": "Email & Automation",
        "description": "Lifecycle sequences that stay useful instead of purely promotional."
      },
      {
        "title": "Conversion Rate Optimisation",
        "description": "Structured testing on the pages that already get traffic."
      },
      {
        "title": "Analytics & Reporting",
        "description": "Clean tracking setup so the numbers you report can be trusted."
      },
      {
        "title": "Search Engine Optimisation",
        "description": "Technical, on-page and content work aimed at qualified organic traffic."
      }
    ],
    "features": [
      {
        "title": "Transparent monthly reporting",
        "description": "A dashboard you can read yourself, plus a call to explain what changed and why."
      },
      {
        "title": "Competitor and gap analysis",
        "description": "We map where you are actually losing to see where the fastest wins are."
      },
      {
        "title": "Keyword and intent research",
        "description": "Targeting the searches that lead to revenue, not the ones with vanity volume."
      },
      {
        "title": "Content built for humans first",
        "description": "Written to be genuinely useful, structured so search engines can read it."
      },
      {
        "title": "Technical foundation fixed first",
        "description": "Speed, crawlability and structure sorted before spending on promotion."
      },
      {
        "title": "Conversion tracking wired in",
        "description": "Proper attribution so you know which channel actually produced the enquiry."
      }
    ],
    "benefits": [
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "GA4",
      "Search Console",
      "Ahrefs",
      "Semrush",
      "Looker Studio",
      "Meta Ads",
      "Google Ads"
    ],
    "faqs": [
      {
        "q": "How much does Paid Marketing cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      }
    ],
    "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "email-marketing",
    "label": "Email Marketing",
    "title": "Email Marketing Services",
    "icon": "Mail",
    "category": "Marketing",
    "tagline": "Achivora delivers email programme built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "We treat email programme as a product problem rather than a ticket queue. That means measuring what the work is supposed to move, shipping in small increments, and cutting anything that does not earn its place.",
      "Pricing is transparent and scoped before we start. If something changes mid-project, you hear about the cost implication before the work happens, not on the invoice."
    ],
    "capabilities": [
      {
        "title": "Technical Audit",
        "description": "A full crawl of the site to find what is actively holding rankings back."
      },
      {
        "title": "Keyword Strategy",
        "description": "Targeting search intent that converts, not just terms with impressive volume."
      },
      {
        "title": "On-Page Optimisation",
        "description": "Titles, structure, internal linking and schema, applied page by page."
      },
      {
        "title": "Content Production",
        "description": "Briefs, drafts and edits from writers who research the topic properly."
      },
      {
        "title": "Off-Page & Authority",
        "description": "Digital PR and genuinely earned links, never a bought network."
      },
      {
        "title": "Reporting & Attribution",
        "description": "Dashboards that connect channel activity to actual pipeline."
      }
    ],
    "subServices": [
      {
        "title": "Search Engine Optimisation",
        "description": "Technical, on-page and content work aimed at qualified organic traffic."
      },
      {
        "title": "Local SEO",
        "description": "Google Business Profile, citations and local landing pages for each area you serve."
      },
      {
        "title": "Pay-Per-Click Advertising",
        "description": "Google and Meta campaigns managed against cost per qualified lead."
      },
      {
        "title": "Social Media Management",
        "description": "Content calendars, production and community management across channels."
      },
      {
        "title": "Content Strategy",
        "description": "A publishing plan built from search demand and real customer questions."
      },
      {
        "title": "Email & Automation",
        "description": "Lifecycle sequences that stay useful instead of purely promotional."
      },
      {
        "title": "Conversion Rate Optimisation",
        "description": "Structured testing on the pages that already get traffic."
      },
      {
        "title": "Analytics & Reporting",
        "description": "Clean tracking setup so the numbers you report can be trusted."
      }
    ],
    "features": [
      {
        "title": "Competitor and gap analysis",
        "description": "We map where you are actually losing to see where the fastest wins are."
      },
      {
        "title": "Keyword and intent research",
        "description": "Targeting the searches that lead to revenue, not the ones with vanity volume."
      },
      {
        "title": "Content built for humans first",
        "description": "Written to be genuinely useful, structured so search engines can read it."
      },
      {
        "title": "Technical foundation fixed first",
        "description": "Speed, crawlability and structure sorted before spending on promotion."
      },
      {
        "title": "Conversion tracking wired in",
        "description": "Proper attribution so you know which channel actually produced the enquiry."
      },
      {
        "title": "No long lock-in contracts",
        "description": "Month to month once the initial engagement ends. We keep the work, not the contract."
      }
    ],
    "benefits": [
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "GA4",
      "Search Console",
      "Ahrefs",
      "Semrush",
      "Looker Studio",
      "Meta Ads",
      "Google Ads"
    ],
    "faqs": [
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      }
    ],
    "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "lead-generation",
    "label": "Lead Generation",
    "title": "Lead Generation Services",
    "icon": "Filter",
    "category": "Marketing",
    "tagline": "Achivora delivers lead pipeline built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "For over a decade we have delivered lead pipeline projects for Indian businesses of every size, from first-time founders to enterprise IT teams modernising something that has been running since 2012.",
      "Every engagement includes discovery, design, build, QA and post-launch support. One accountable team handles all of it, so nothing is lost in a handoff between the people who designed it and the people who built it."
    ],
    "capabilities": [
      {
        "title": "Keyword Strategy",
        "description": "Targeting search intent that converts, not just terms with impressive volume."
      },
      {
        "title": "On-Page Optimisation",
        "description": "Titles, structure, internal linking and schema, applied page by page."
      },
      {
        "title": "Content Production",
        "description": "Briefs, drafts and edits from writers who research the topic properly."
      },
      {
        "title": "Off-Page & Authority",
        "description": "Digital PR and genuinely earned links, never a bought network."
      },
      {
        "title": "Reporting & Attribution",
        "description": "Dashboards that connect channel activity to actual pipeline."
      },
      {
        "title": "Technical Audit",
        "description": "A full crawl of the site to find what is actively holding rankings back."
      }
    ],
    "subServices": [
      {
        "title": "Local SEO",
        "description": "Google Business Profile, citations and local landing pages for each area you serve."
      },
      {
        "title": "Pay-Per-Click Advertising",
        "description": "Google and Meta campaigns managed against cost per qualified lead."
      },
      {
        "title": "Social Media Management",
        "description": "Content calendars, production and community management across channels."
      },
      {
        "title": "Content Strategy",
        "description": "A publishing plan built from search demand and real customer questions."
      },
      {
        "title": "Email & Automation",
        "description": "Lifecycle sequences that stay useful instead of purely promotional."
      },
      {
        "title": "Conversion Rate Optimisation",
        "description": "Structured testing on the pages that already get traffic."
      },
      {
        "title": "Analytics & Reporting",
        "description": "Clean tracking setup so the numbers you report can be trusted."
      },
      {
        "title": "Search Engine Optimisation",
        "description": "Technical, on-page and content work aimed at qualified organic traffic."
      }
    ],
    "features": [
      {
        "title": "Measurable targets agreed upfront",
        "description": "We define what success looks like in numbers before the work starts."
      },
      {
        "title": "Transparent monthly reporting",
        "description": "A dashboard you can read yourself, plus a call to explain what changed and why."
      },
      {
        "title": "Competitor and gap analysis",
        "description": "We map where you are actually losing to see where the fastest wins are."
      },
      {
        "title": "Keyword and intent research",
        "description": "Targeting the searches that lead to revenue, not the ones with vanity volume."
      },
      {
        "title": "Content built for humans first",
        "description": "Written to be genuinely useful, structured so search engines can read it."
      },
      {
        "title": "Technical foundation fixed first",
        "description": "Speed, crawlability and structure sorted before spending on promotion."
      }
    ],
    "benefits": [
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "GA4",
      "Search Console",
      "Ahrefs",
      "Semrush",
      "Looker Studio",
      "Meta Ads",
      "Google Ads"
    ],
    "faqs": [
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a Lead Generation project take?",
        "a": "Most Lead Generation engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      }
    ],
    "image": "https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "reputation-management",
    "label": "Reputation Management",
    "title": "Online Reputation Management Company",
    "icon": "ShieldCheck",
    "category": "Marketing",
    "tagline": "Achivora delivers online reputation built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Achivora builds online reputation work that holds up in production. We start with the business outcome you need, map the workflow around it, and only then pick the stack, which is why our online reputation projects tend to survive contact with real users.",
      "You own the code and the infrastructure from day one. No proprietary lock-in, no licence you have to keep paying to keep your own product running."
    ],
    "capabilities": [
      {
        "title": "Technical Audit",
        "description": "A full crawl of the site to find what is actively holding rankings back."
      },
      {
        "title": "Keyword Strategy",
        "description": "Targeting search intent that converts, not just terms with impressive volume."
      },
      {
        "title": "On-Page Optimisation",
        "description": "Titles, structure, internal linking and schema, applied page by page."
      },
      {
        "title": "Content Production",
        "description": "Briefs, drafts and edits from writers who research the topic properly."
      },
      {
        "title": "Off-Page & Authority",
        "description": "Digital PR and genuinely earned links, never a bought network."
      },
      {
        "title": "Reporting & Attribution",
        "description": "Dashboards that connect channel activity to actual pipeline."
      }
    ],
    "subServices": [
      {
        "title": "Search Engine Optimisation",
        "description": "Technical, on-page and content work aimed at qualified organic traffic."
      },
      {
        "title": "Local SEO",
        "description": "Google Business Profile, citations and local landing pages for each area you serve."
      },
      {
        "title": "Pay-Per-Click Advertising",
        "description": "Google and Meta campaigns managed against cost per qualified lead."
      },
      {
        "title": "Social Media Management",
        "description": "Content calendars, production and community management across channels."
      },
      {
        "title": "Content Strategy",
        "description": "A publishing plan built from search demand and real customer questions."
      },
      {
        "title": "Email & Automation",
        "description": "Lifecycle sequences that stay useful instead of purely promotional."
      },
      {
        "title": "Conversion Rate Optimisation",
        "description": "Structured testing on the pages that already get traffic."
      },
      {
        "title": "Analytics & Reporting",
        "description": "Clean tracking setup so the numbers you report can be trusted."
      }
    ],
    "features": [
      {
        "title": "Transparent monthly reporting",
        "description": "A dashboard you can read yourself, plus a call to explain what changed and why."
      },
      {
        "title": "Competitor and gap analysis",
        "description": "We map where you are actually losing to see where the fastest wins are."
      },
      {
        "title": "Keyword and intent research",
        "description": "Targeting the searches that lead to revenue, not the ones with vanity volume."
      },
      {
        "title": "Content built for humans first",
        "description": "Written to be genuinely useful, structured so search engines can read it."
      },
      {
        "title": "Technical foundation fixed first",
        "description": "Speed, crawlability and structure sorted before spending on promotion."
      },
      {
        "title": "Conversion tracking wired in",
        "description": "Proper attribution so you know which channel actually produced the enquiry."
      }
    ],
    "benefits": [
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "GA4",
      "Search Console",
      "Ahrefs",
      "Semrush",
      "Looker Studio",
      "Meta Ads",
      "Google Ads"
    ],
    "faqs": [
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a Reputation Management project take?",
        "a": "Most Reputation Management engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does Reputation Management cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      }
    ],
    "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "app-store-optimization",
    "label": "App Store Optimization",
    "title": "App Store Optimization Services",
    "icon": "Rocket",
    "category": "Marketing",
    "tagline": "Achivora delivers app store listing built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Our app store listing engagements are run by senior engineers who have shipped this before. You get a clear scope, a fixed cadence of demos, and a build you can inspect at any point rather than a black box that appears at the end.",
      "We work in your timezone, join your stand-ups if you want us to, and keep the whole roadmap visible so you always know what is shipping next and what it will cost."
    ],
    "capabilities": [
      {
        "title": "Keyword Strategy",
        "description": "Targeting search intent that converts, not just terms with impressive volume."
      },
      {
        "title": "On-Page Optimisation",
        "description": "Titles, structure, internal linking and schema, applied page by page."
      },
      {
        "title": "Content Production",
        "description": "Briefs, drafts and edits from writers who research the topic properly."
      },
      {
        "title": "Off-Page & Authority",
        "description": "Digital PR and genuinely earned links, never a bought network."
      },
      {
        "title": "Reporting & Attribution",
        "description": "Dashboards that connect channel activity to actual pipeline."
      },
      {
        "title": "Technical Audit",
        "description": "A full crawl of the site to find what is actively holding rankings back."
      }
    ],
    "subServices": [
      {
        "title": "Local SEO",
        "description": "Google Business Profile, citations and local landing pages for each area you serve."
      },
      {
        "title": "Pay-Per-Click Advertising",
        "description": "Google and Meta campaigns managed against cost per qualified lead."
      },
      {
        "title": "Social Media Management",
        "description": "Content calendars, production and community management across channels."
      },
      {
        "title": "Content Strategy",
        "description": "A publishing plan built from search demand and real customer questions."
      },
      {
        "title": "Email & Automation",
        "description": "Lifecycle sequences that stay useful instead of purely promotional."
      },
      {
        "title": "Conversion Rate Optimisation",
        "description": "Structured testing on the pages that already get traffic."
      },
      {
        "title": "Analytics & Reporting",
        "description": "Clean tracking setup so the numbers you report can be trusted."
      },
      {
        "title": "Search Engine Optimisation",
        "description": "Technical, on-page and content work aimed at qualified organic traffic."
      }
    ],
    "features": [
      {
        "title": "Competitor and gap analysis",
        "description": "We map where you are actually losing to see where the fastest wins are."
      },
      {
        "title": "Keyword and intent research",
        "description": "Targeting the searches that lead to revenue, not the ones with vanity volume."
      },
      {
        "title": "Content built for humans first",
        "description": "Written to be genuinely useful, structured so search engines can read it."
      },
      {
        "title": "Technical foundation fixed first",
        "description": "Speed, crawlability and structure sorted before spending on promotion."
      },
      {
        "title": "Conversion tracking wired in",
        "description": "Proper attribution so you know which channel actually produced the enquiry."
      },
      {
        "title": "No long lock-in contracts",
        "description": "Month to month once the initial engagement ends. We keep the work, not the contract."
      }
    ],
    "benefits": [
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "GA4",
      "Search Console",
      "Ahrefs",
      "Semrush",
      "Looker Studio",
      "Meta Ads",
      "Google Ads"
    ],
    "faqs": [
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a App Store Optimization project take?",
        "a": "Most App Store Optimization engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does App Store Optimization cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      }
    ],
    "image": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "content-writing",
    "label": "Content Writing",
    "title": "Content Writing Services",
    "icon": "PenLine",
    "category": "Marketing",
    "tagline": "Achivora delivers content library built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "We treat content library as a product problem rather than a ticket queue. That means measuring what the work is supposed to move, shipping in small increments, and cutting anything that does not earn its place.",
      "Pricing is transparent and scoped before we start. If something changes mid-project, you hear about the cost implication before the work happens, not on the invoice."
    ],
    "capabilities": [
      {
        "title": "Technical Audit",
        "description": "A full crawl of the site to find what is actively holding rankings back."
      },
      {
        "title": "Keyword Strategy",
        "description": "Targeting search intent that converts, not just terms with impressive volume."
      },
      {
        "title": "On-Page Optimisation",
        "description": "Titles, structure, internal linking and schema, applied page by page."
      },
      {
        "title": "Content Production",
        "description": "Briefs, drafts and edits from writers who research the topic properly."
      },
      {
        "title": "Off-Page & Authority",
        "description": "Digital PR and genuinely earned links, never a bought network."
      },
      {
        "title": "Reporting & Attribution",
        "description": "Dashboards that connect channel activity to actual pipeline."
      }
    ],
    "subServices": [
      {
        "title": "Search Engine Optimisation",
        "description": "Technical, on-page and content work aimed at qualified organic traffic."
      },
      {
        "title": "Local SEO",
        "description": "Google Business Profile, citations and local landing pages for each area you serve."
      },
      {
        "title": "Pay-Per-Click Advertising",
        "description": "Google and Meta campaigns managed against cost per qualified lead."
      },
      {
        "title": "Social Media Management",
        "description": "Content calendars, production and community management across channels."
      },
      {
        "title": "Content Strategy",
        "description": "A publishing plan built from search demand and real customer questions."
      },
      {
        "title": "Email & Automation",
        "description": "Lifecycle sequences that stay useful instead of purely promotional."
      },
      {
        "title": "Conversion Rate Optimisation",
        "description": "Structured testing on the pages that already get traffic."
      },
      {
        "title": "Analytics & Reporting",
        "description": "Clean tracking setup so the numbers you report can be trusted."
      }
    ],
    "features": [
      {
        "title": "Measurable targets agreed upfront",
        "description": "We define what success looks like in numbers before the work starts."
      },
      {
        "title": "Transparent monthly reporting",
        "description": "A dashboard you can read yourself, plus a call to explain what changed and why."
      },
      {
        "title": "Competitor and gap analysis",
        "description": "We map where you are actually losing to see where the fastest wins are."
      },
      {
        "title": "Keyword and intent research",
        "description": "Targeting the searches that lead to revenue, not the ones with vanity volume."
      },
      {
        "title": "Content built for humans first",
        "description": "Written to be genuinely useful, structured so search engines can read it."
      },
      {
        "title": "Technical foundation fixed first",
        "description": "Speed, crawlability and structure sorted before spending on promotion."
      }
    ],
    "benefits": [
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "GA4",
      "Search Console",
      "Ahrefs",
      "Semrush",
      "Looker Studio",
      "Meta Ads",
      "Google Ads"
    ],
    "faqs": [
      {
        "q": "How long does a Content Writing project take?",
        "a": "Most Content Writing engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does Content Writing cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      }
    ],
    "image": "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "data-analysis-entry",
    "label": "Data Analysis & Entry",
    "title": "Data Analysis and Entry Services",
    "icon": "Database",
    "category": "Operations",
    "tagline": "Achivora delivers data operations built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "For over a decade we have delivered data operations projects for Indian businesses of every size, from first-time founders to enterprise IT teams modernising something that has been running since 2012.",
      "Every engagement includes discovery, design, build, QA and post-launch support. One accountable team handles all of it, so nothing is lost in a handoff between the people who designed it and the people who built it."
    ],
    "capabilities": [
      {
        "title": "Backend Development",
        "description": "Node.js, Laravel and Python services designed for throughput, not just for the happy path."
      },
      {
        "title": "Full Stack Development",
        "description": "One team across the whole stack, so nothing falls between frontend and backend."
      },
      {
        "title": "CMS Development",
        "description": "WordPress, Shopify and headless CMS setups your marketing team can actually run alone."
      },
      {
        "title": "Database Engineering",
        "description": "PostgreSQL, MySQL and MongoDB schemas designed for the queries you will actually run."
      },
      {
        "title": "DevOps Stack",
        "description": "AWS, Docker and GitHub Actions wired up so deployment stops being a manual ritual."
      },
      {
        "title": "Frontend Development",
        "description": "Intuitive interfaces built with HTML5, CSS3, TypeScript and React, tested on real devices."
      }
    ],
    "subServices": [
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      },
      {
        "title": "Custom Portal Solutions",
        "description": "Secure customer, partner or employee portals with role-based access throughout."
      }
    ],
    "features": [
      {
        "title": "Performance budgets from day one",
        "description": "Speed targets set before the first commit and enforced in CI, not retrofitted after launch."
      },
      {
        "title": "Automated test coverage",
        "description": "Unit, integration and end-to-end suites that catch regressions before your users do."
      },
      {
        "title": "Secure by design",
        "description": "Authentication, authorisation and data handling reviewed at design time, not bolted on later."
      },
      {
        "title": "Scalable architecture",
        "description": "Clean service boundaries so traffic, features and team size can all grow without a rebuild."
      },
      {
        "title": "Third-party integrations",
        "description": "Payments, CRMs, ERPs, analytics and messaging wired in through stable, tested connectors."
      },
      {
        "title": "CI/CD pipeline included",
        "description": "Every merge builds, tests and deploys automatically, so releases stop being an event."
      }
    ],
    "benefits": [
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "faqs": [
      {
        "q": "How much does Data Analysis & Entry cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      }
    ],
    "image": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "quality-assurance",
    "label": "Quality Assurance",
    "title": "Quality Assurance Services",
    "icon": "CheckCircle2",
    "category": "Engineering",
    "tagline": "Achivora delivers QA process built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Achivora builds QA process work that holds up in production. We start with the business outcome you need, map the workflow around it, and only then pick the stack, which is why our QA process projects tend to survive contact with real users.",
      "You own the code and the infrastructure from day one. No proprietary lock-in, no licence you have to keep paying to keep your own product running."
    ],
    "capabilities": [
      {
        "title": "Frontend Development",
        "description": "Intuitive interfaces built with HTML5, CSS3, TypeScript and React, tested on real devices."
      },
      {
        "title": "Backend Development",
        "description": "Node.js, Laravel and Python services designed for throughput, not just for the happy path."
      },
      {
        "title": "Full Stack Development",
        "description": "One team across the whole stack, so nothing falls between frontend and backend."
      },
      {
        "title": "CMS Development",
        "description": "WordPress, Shopify and headless CMS setups your marketing team can actually run alone."
      },
      {
        "title": "Database Engineering",
        "description": "PostgreSQL, MySQL and MongoDB schemas designed for the queries you will actually run."
      },
      {
        "title": "DevOps Stack",
        "description": "AWS, Docker and GitHub Actions wired up so deployment stops being a manual ritual."
      }
    ],
    "subServices": [
      {
        "title": "Web Application Development",
        "description": "End-to-end platforms that replace spreadsheets and manual process with something reliable."
      },
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      }
    ],
    "features": [
      {
        "title": "Automated test coverage",
        "description": "Unit, integration and end-to-end suites that catch regressions before your users do."
      },
      {
        "title": "Secure by design",
        "description": "Authentication, authorisation and data handling reviewed at design time, not bolted on later."
      },
      {
        "title": "Scalable architecture",
        "description": "Clean service boundaries so traffic, features and team size can all grow without a rebuild."
      },
      {
        "title": "Third-party integrations",
        "description": "Payments, CRMs, ERPs, analytics and messaging wired in through stable, tested connectors."
      },
      {
        "title": "CI/CD pipeline included",
        "description": "Every merge builds, tests and deploys automatically, so releases stop being an event."
      },
      {
        "title": "Post-launch support",
        "description": "Monitoring, patching and improvements under an agreed response time."
      }
    ],
    "benefits": [
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Laravel",
      "PostgreSQL",
      "Redis",
      "Docker"
    ],
    "faqs": [
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      }
    ],
    "image": "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "cloud-consulting",
    "label": "Cloud Consulting",
    "title": "Cloud Consulting Services",
    "icon": "Cloud",
    "category": "Cloud",
    "tagline": "Achivora delivers cloud estate built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Our cloud estate engagements are run by senior engineers who have shipped this before. You get a clear scope, a fixed cadence of demos, and a build you can inspect at any point rather than a black box that appears at the end.",
      "We work in your timezone, join your stand-ups if you want us to, and keep the whole roadmap visible so you always know what is shipping next and what it will cost."
    ],
    "capabilities": [
      {
        "title": "Migration Planning",
        "description": "A phased move with rollback at every stage, so there is no point of no return."
      },
      {
        "title": "Infrastructure as Code",
        "description": "Terraform modules that make your environment reproducible and reviewable."
      },
      {
        "title": "CI/CD Pipelines",
        "description": "Automated build, test and deploy so releases become routine rather than risky."
      },
      {
        "title": "Observability",
        "description": "Metrics, logs and traces wired into dashboards and alerts that people actually read."
      },
      {
        "title": "Cost Optimisation",
        "description": "Right-sizing and reserved capacity planning that usually pays for the engagement."
      },
      {
        "title": "Architecture Review",
        "description": "An honest assessment of the current estate before anyone proposes a rebuild."
      }
    ],
    "subServices": [
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      },
      {
        "title": "Custom Portal Solutions",
        "description": "Secure customer, partner or employee portals with role-based access throughout."
      }
    ],
    "features": [
      {
        "title": "Cost visibility and control",
        "description": "Right-sizing and budget alerts so the monthly bill stops surprising you."
      },
      {
        "title": "Zero-downtime deployments",
        "description": "Blue-green and rolling releases, so shipping never means a maintenance window."
      },
      {
        "title": "Infrastructure as code",
        "description": "Your whole environment reproducible from a repository, not from someone's memory."
      },
      {
        "title": "Monitoring and alerting",
        "description": "Dashboards and on-call alerts that catch problems before customers report them."
      },
      {
        "title": "Automated backups and recovery",
        "description": "Tested restore procedures, not just backups nobody has ever tried to use."
      },
      {
        "title": "Security and compliance posture",
        "description": "Least-privilege access, encryption at rest and in transit, audit trails throughout."
      }
    ],
    "benefits": [
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Grafana"
    ],
    "faqs": [
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      },
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a Cloud Consulting project take?",
        "a": "Most Cloud Consulting engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      }
    ],
    "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "cloud-migration",
    "label": "Cloud Migration",
    "title": "Cloud Migration Services",
    "icon": "UploadCloud",
    "category": "Cloud",
    "tagline": "Achivora delivers cloud migration built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "We treat cloud migration as a product problem rather than a ticket queue. That means measuring what the work is supposed to move, shipping in small increments, and cutting anything that does not earn its place.",
      "Pricing is transparent and scoped before we start. If something changes mid-project, you hear about the cost implication before the work happens, not on the invoice."
    ],
    "capabilities": [
      {
        "title": "Architecture Review",
        "description": "An honest assessment of the current estate before anyone proposes a rebuild."
      },
      {
        "title": "Migration Planning",
        "description": "A phased move with rollback at every stage, so there is no point of no return."
      },
      {
        "title": "Infrastructure as Code",
        "description": "Terraform modules that make your environment reproducible and reviewable."
      },
      {
        "title": "CI/CD Pipelines",
        "description": "Automated build, test and deploy so releases become routine rather than risky."
      },
      {
        "title": "Observability",
        "description": "Metrics, logs and traces wired into dashboards and alerts that people actually read."
      },
      {
        "title": "Cost Optimisation",
        "description": "Right-sizing and reserved capacity planning that usually pays for the engagement."
      }
    ],
    "subServices": [
      {
        "title": "Web Application Development",
        "description": "End-to-end platforms that replace spreadsheets and manual process with something reliable."
      },
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      }
    ],
    "features": [
      {
        "title": "Zero-downtime deployments",
        "description": "Blue-green and rolling releases, so shipping never means a maintenance window."
      },
      {
        "title": "Infrastructure as code",
        "description": "Your whole environment reproducible from a repository, not from someone's memory."
      },
      {
        "title": "Monitoring and alerting",
        "description": "Dashboards and on-call alerts that catch problems before customers report them."
      },
      {
        "title": "Automated backups and recovery",
        "description": "Tested restore procedures, not just backups nobody has ever tried to use."
      },
      {
        "title": "Security and compliance posture",
        "description": "Least-privilege access, encryption at rest and in transit, audit trails throughout."
      },
      {
        "title": "Autoscaling under load",
        "description": "Capacity that follows demand instead of being sized for the worst day of the year."
      }
    ],
    "benefits": [
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Grafana"
    ],
    "faqs": [
      {
        "q": "Can you work with our existing team?",
        "a": "Yes. We regularly extend in-house teams, plugging into your repos, tooling and rituals. Staff augmentation is one of our most common engagement models."
      },
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a Cloud Migration project take?",
        "a": "Most Cloud Migration engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does Cloud Migration cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      }
    ],
    "image": "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "devops-consulting",
    "label": "DevOps Consulting",
    "title": "DevOps Consulting Services",
    "icon": "GitBranch",
    "category": "Cloud",
    "tagline": "Achivora delivers delivery pipeline built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "For over a decade we have delivered delivery pipeline projects for Indian businesses of every size, from first-time founders to enterprise IT teams modernising something that has been running since 2012.",
      "Every engagement includes discovery, design, build, QA and post-launch support. One accountable team handles all of it, so nothing is lost in a handoff between the people who designed it and the people who built it."
    ],
    "capabilities": [
      {
        "title": "Migration Planning",
        "description": "A phased move with rollback at every stage, so there is no point of no return."
      },
      {
        "title": "Infrastructure as Code",
        "description": "Terraform modules that make your environment reproducible and reviewable."
      },
      {
        "title": "CI/CD Pipelines",
        "description": "Automated build, test and deploy so releases become routine rather than risky."
      },
      {
        "title": "Observability",
        "description": "Metrics, logs and traces wired into dashboards and alerts that people actually read."
      },
      {
        "title": "Cost Optimisation",
        "description": "Right-sizing and reserved capacity planning that usually pays for the engagement."
      },
      {
        "title": "Architecture Review",
        "description": "An honest assessment of the current estate before anyone proposes a rebuild."
      }
    ],
    "subServices": [
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      },
      {
        "title": "Custom Portal Solutions",
        "description": "Secure customer, partner or employee portals with role-based access throughout."
      }
    ],
    "features": [
      {
        "title": "Infrastructure as code",
        "description": "Your whole environment reproducible from a repository, not from someone's memory."
      },
      {
        "title": "Monitoring and alerting",
        "description": "Dashboards and on-call alerts that catch problems before customers report them."
      },
      {
        "title": "Automated backups and recovery",
        "description": "Tested restore procedures, not just backups nobody has ever tried to use."
      },
      {
        "title": "Security and compliance posture",
        "description": "Least-privilege access, encryption at rest and in transit, audit trails throughout."
      },
      {
        "title": "Autoscaling under load",
        "description": "Capacity that follows demand instead of being sized for the worst day of the year."
      },
      {
        "title": "Migration with a rollback plan",
        "description": "Every move has a documented way back, so there is no point of no return."
      }
    ],
    "benefits": [
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      },
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Grafana"
    ],
    "faqs": [
      {
        "q": "Can you take over an existing project?",
        "a": "We do this often. We start with a short audit of the current codebase and infrastructure, then give you an honest view on whether to continue, refactor or rebuild."
      },
      {
        "q": "How long does a DevOps Consulting project take?",
        "a": "Most DevOps Consulting engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does DevOps Consulting cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      }
    ],
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop"
  },
  {
    "slug": "ai-consulting",
    "label": "AI Consulting",
    "title": "AI Consulting Services",
    "icon": "Brain",
    "category": "AI",
    "tagline": "Achivora delivers AI roadmap built for Indian businesses that need it to work, not just to launch.",
    "subheading": "Your Vision, Our Expertise",
    "intro": [
      "Achivora builds AI roadmap work that holds up in production. We start with the business outcome you need, map the workflow around it, and only then pick the stack, which is why our AI roadmap projects tend to survive contact with real users.",
      "You own the code and the infrastructure from day one. No proprietary lock-in, no licence you have to keep paying to keep your own product running."
    ],
    "capabilities": [
      {
        "title": "Use-Case Discovery",
        "description": "We start by finding where AI actually pays back, and say so when it does not."
      },
      {
        "title": "Data Preparation",
        "description": "Cleaning, structuring and indexing your content so models have something to work with."
      },
      {
        "title": "Model Selection",
        "description": "Choosing by accuracy, latency and cost on your task, not by whatever is trending."
      },
      {
        "title": "Evaluation Harness",
        "description": "A measured test set, so you know the accuracy before it reaches customers."
      },
      {
        "title": "Integration",
        "description": "AI surfaced inside the tools your team already uses, not as another separate portal."
      },
      {
        "title": "Monitoring & Guardrails",
        "description": "Tracing, output validation and fallbacks for when the model is unsure."
      }
    ],
    "subServices": [
      {
        "title": "Web Application Development",
        "description": "End-to-end platforms that replace spreadsheets and manual process with something reliable."
      },
      {
        "title": "E-commerce Development",
        "description": "Fast, secure stores with a checkout designed around reducing abandonment."
      },
      {
        "title": "Custom Website Development",
        "description": "Built from your requirements and market research rather than a bought template."
      },
      {
        "title": "Multi-vendor Marketplace",
        "description": "Seller onboarding, commission handling and payouts built into the platform."
      },
      {
        "title": "CMS Development",
        "description": "Content platforms your marketing team can update without raising a ticket."
      },
      {
        "title": "CRM Development",
        "description": "Customer records, pipelines and automation shaped around how you actually sell."
      },
      {
        "title": "WordPress Development",
        "description": "Properly engineered WordPress builds, not a pile of conflicting plugins."
      },
      {
        "title": "Website Maintenance",
        "description": "Updates, monitoring, security patching and small improvements on a monthly retainer."
      }
    ],
    "features": [
      {
        "title": "Grounded in your own data",
        "description": "Models and agents that answer from your content, with citations you can verify."
      },
      {
        "title": "Evaluation before deployment",
        "description": "Measured accuracy on real examples, so you know what you are shipping."
      },
      {
        "title": "Human-in-the-loop by default",
        "description": "Review steps wherever a wrong answer would actually cost something."
      },
      {
        "title": "Cost and latency budgets",
        "description": "Model choice driven by what the task needs, not by what sounds impressive."
      },
      {
        "title": "Guardrails and safety review",
        "description": "Prompt hardening, output validation and abuse handling built into the design."
      },
      {
        "title": "Integrates with existing tools",
        "description": "AI that lives inside the systems your team already uses every day."
      }
    ],
    "benefits": [
      {
        "title": "Senior engineers only",
        "description": "No junior-heavy teams learning on your budget. The people scoping the work are the people building it."
      },
      {
        "title": "Fixed, transparent pricing",
        "description": "You approve scope and cost before work starts, and hear about any change before it happens."
      },
      {
        "title": "Two-week demo cadence",
        "description": "You see working software every fortnight, so direction is corrected early instead of at the end."
      },
      {
        "title": "Full ownership handover",
        "description": "Code, designs, infrastructure and documentation are yours from the first day."
      }
    ],
    "comparison": [
      {
        "aspect": "Uniqueness",
        "custom": "Fully unique, built to your brief",
        "template": "Pre-made theme, lightly modified"
      },
      {
        "aspect": "Scalability",
        "custom": "High, designed to grow with you",
        "template": "Limited by the theme's assumptions"
      },
      {
        "aspect": "Upfront cost",
        "custom": "Higher initial investment",
        "template": "Budget-friendly to start"
      },
      {
        "aspect": "Launch speed",
        "custom": "Longer, typically 6 to 16 weeks",
        "template": "Faster, often 2 to 4 weeks"
      },
      {
        "aspect": "Performance",
        "custom": "Tuned, only the code you need",
        "template": "Carries unused theme weight"
      },
      {
        "aspect": "Best suited to",
        "custom": "Complex sites and real products",
        "template": "Small sites, MVPs and pilots"
      }
    ],
    "performance": [
      {
        "title": "PageSpeed-optimised builds",
        "description": "We set a Lighthouse target before starting and hold the build to it in CI."
      },
      {
        "title": "Core Web Vitals compliance",
        "description": "LCP, INP and CLS measured on real devices, not just on a fast laptop."
      },
      {
        "title": "Technical SEO from day one",
        "description": "Clean markup, sitemaps, canonicals and schema shipped with the first release."
      },
      {
        "title": "Fully responsive design",
        "description": "Tested on real phones and tablets across the browsers your audience actually uses."
      },
      {
        "title": "Built for fast indexing",
        "description": "Server-rendered where it matters, so search engines see the content immediately."
      }
    ],
    "compliance": [
      {
        "title": "Accessibility (WCAG 2.1 AA)",
        "description": "Contrast, keyboard navigation and screen-reader semantics checked before launch."
      },
      {
        "title": "Security by default",
        "description": "TLS everywhere, hardened headers, dependency scanning and least-privilege access."
      },
      {
        "title": "Data protection (DPDP Act)",
        "description": "Consent capture, retention rules and deletion flows aligned to Indian data law."
      },
      {
        "title": "Payment & PCI readiness",
        "description": "Card data handled by certified gateways, never stored on your own infrastructure."
      }
    ],
    "industriesServed": [
      {
        "title": "E-commerce & Retail",
        "description": "Catalogue structure, product pages and a checkout tuned for conversion."
      },
      {
        "title": "Healthcare & Wellness",
        "description": "Appointment platforms and patient portals that handle sensitive data properly."
      },
      {
        "title": "Real Estate & Construction",
        "description": "Listings, virtual tours and agent tooling in a single connected platform."
      },
      {
        "title": "EdTech & SaaS Startups",
        "description": "Cloud learning platforms and subscription products built to scale from day one."
      },
      {
        "title": "Finance & Legal",
        "description": "Secure portals with audit trails and compliance baked into the design."
      },
      {
        "title": "Logistics & Manufacturing",
        "description": "Tracking, telemetry and operations dashboards for teams running physical work."
      }
    ],
    "achievements": [
      {
        "value": "1560",
        "suffix": "+",
        "label": "Projects Delivered"
      },
      {
        "value": "120",
        "suffix": "+",
        "label": "Cities Served"
      },
      {
        "value": "98",
        "suffix": "%",
        "label": "Customer Retention"
      },
      {
        "value": "10",
        "suffix": "+",
        "label": "Years In Operation"
      }
    ],
    "tech": [
      "Python",
      "PyTorch",
      "LangChain",
      "Vector DB",
      "OpenAI API",
      "Hugging Face",
      "FastAPI"
    ],
    "faqs": [
      {
        "q": "How long does a AI Consulting project take?",
        "a": "Most AI Consulting engagements run between four and sixteen weeks depending on scope. After a short discovery call we give you a written timeline with milestones, so you know what lands when."
      },
      {
        "q": "How much does AI Consulting cost?",
        "a": "Cost depends on scope, integrations and how much design work is involved. Share a brief and you will have a written estimate within two working days, broken down so you can see what drives the number."
      },
      {
        "q": "Do you provide support after the project ends?",
        "a": "Yes. Support plans cover monitoring, bug fixes, security patches and small improvements, with response times agreed in advance. Most clients stay on a monthly retainer."
      },
      {
        "q": "Will I own the code and assets?",
        "a": "Completely. All source code, design files and infrastructure configuration are handed over and belong to you. There is no licence to keep paying and no lock-in."
      }
    ],
    "image": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop"
  }
];

