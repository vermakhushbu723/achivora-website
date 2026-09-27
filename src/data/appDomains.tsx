import type { ScreenSpec } from '@/components/showcase/screens';

/**
 * Per-product screen sets. Each entry maps one or more catalogue slugs to the
 * apps that make up that product and the screens those apps actually contain,
 * so a food-delivery page shows delivery tracking while a fintech page shows
 * a wallet and a matrimonial page shows profiles.
 */
export interface AppRoleSpec {
  title: string;
  icon: string;
  description: string;
  features: string[];
  screens: { label: string; spec: ScreenSpec }[];
}

export interface AppDomain {
  key: string;
  label: string;
  /** Catalogue slugs this domain applies to. */
  slugs: string[];
  roles: AppRoleSpec[];
}

/* Reusable role blurbs keep the data compact without making pages identical. */
const adminRole = (
  what: string,
  stats: { v: string; l: string }[],
  rows: { k: string; v: string }[],
): AppRoleSpec => ({
  title: 'Admin Panel',
  icon: 'LayoutDashboard',
  description: `The control room — every ${what} visible and actionable in one place.`,
  features: [
    'Real-time operations dashboard',
    'User and partner management',
    'Payments, refunds and payouts',
    'Pricing, offers and configuration',
    'Reports and data exports',
  ],
  screens: [
    {
      label: 'Operations dashboard',
      spec: {
        kind: 'dashboard',
        title: 'Admin Panel',
        sub: 'Platform overview',
        stats,
        chartLabel: 'This week',
        rows,
      },
    },
  ],
});

export const APP_DOMAINS: AppDomain[] = [
  /* ── App Solutions ──────────────────────────────────────────────────── */
  {
    key: 'food-delivery',
    label: 'Food Delivery App',
    slugs: ['food-delivery-app-development', 'restaurant-website-design'],
    roles: [
      {
        title: 'Customer App',
        icon: 'User',
        description: 'Browse restaurants, order in a few taps and watch it arrive live.',
        features: [
          'Location-aware restaurant discovery',
          'Menu, customisation and cart',
          'Coupons, wallet and UPI checkout',
          'Live rider tracking on map',
          'Reorder and rate past orders',
        ],
        screens: [
          {
            label: 'Restaurant discovery',
            spec: {
              kind: 'list',
              place: 'Sector 62, Noida',
              searchHint: 'Search restaurants, dishes…',
              chips: ['All', 'Veg', 'Fast', 'Offers'],
              items: [
                { title: 'Spice Garden', meta: '25 min · ₹200 for two', badge: '4.6' },
                { title: 'Urban Tandoor', meta: '32 min · ₹350 for two', badge: '4.4' },
                { title: 'Green Bowl Co.', meta: '18 min · ₹180 for two', badge: '4.8' },
              ],
            },
          },
          {
            label: 'Menu & cart',
            spec: {
              kind: 'detail',
              title: 'Spice Garden',
              sub: 'North Indian · Biryani · 25 min',
              tags: ['4.6 rating', '50% OFF'],
              rows: [
                { name: 'Paneer Butter Masala', meta: '₹240', action: 'ADD' },
                { name: 'Hyderabadi Biryani', meta: '₹300', action: 'ADD' },
                { name: 'Garlic Naan', meta: '₹60', action: 'ADD' },
              ],
              cta: 'View Cart',
              ctaMeta: '2 items · ₹540',
            },
          },
          {
            label: 'Live order tracking',
            spec: {
              kind: 'map',
              status: 'Arriving in 12 min',
              agent: 'Rahul is on the way',
              agentMeta: 'DL 3C AB 1234',
              steps: [
                ['Order confirmed', true],
                ['Being prepared', true],
                ['Out for delivery', true],
                ['Delivered', false],
              ],
            },
          },
        ],
      },
      {
        title: 'Restaurant App',
        icon: 'Store',
        description: 'Accept orders, manage the menu and keep the kitchen moving.',
        features: [
          'Instant order alerts',
          'Menu and stock management',
          'Accept, prepare, dispatch flow',
          'Daily settlement view',
          'Performance analytics',
        ],
        screens: [
          {
            label: 'Live orders',
            spec: {
              kind: 'dashboard',
              title: 'Restaurant Partner',
              sub: 'Live orders',
              stats: [
                { v: '12', l: 'Active' },
                { v: '₹8.4k', l: 'Today' },
                { v: '4.7', l: 'Rating' },
                { v: '96%', l: 'Accept rate' },
              ],
              chartLabel: 'Orders this week',
              rows: [
                { k: 'Order #4821 · New', v: '₹640' },
                { k: 'Order #4820 · Preparing', v: '₹410' },
              ],
            },
          },
          {
            label: 'Settlements',
            spec: {
              kind: 'wallet',
              label: 'Restaurant payouts',
              amount: '₹1,24,800',
              sub: 'Settled weekly · next on Friday',
              chartLabel: 'Revenue this week',
              rows: [
                { k: 'Orders (312)', v: '+₹1,48,200' },
                { k: 'Platform commission', v: '-₹23,400', up: false },
              ],
            },
          },
        ],
      },
      {
        title: 'Delivery Partner App',
        icon: 'Bike',
        description: 'Built for one hand and a moving bike — big targets, clear next action.',
        features: [
          'Order requests with pay preview',
          'Turn-by-turn navigation',
          'Proof of delivery capture',
          'Live earnings and incentives',
          'Shift and availability control',
        ],
        screens: [
          {
            label: 'Earnings',
            spec: {
              kind: 'wallet',
              label: "Today's earnings",
              amount: '₹1,240',
              sub: '18 deliveries · 6h 20m online',
              chartLabel: 'This week',
              rows: [
                { k: 'Order #4821', v: '+₹78' },
                { k: 'Incentive bonus', v: '+₹150' },
              ],
            },
          },
          {
            label: 'Active delivery',
            spec: {
              kind: 'map',
              status: 'Drop in 8 min',
              agent: 'Deliver to Ananya',
              agentMeta: 'B-42, Sector 62 · 2.4 km',
              steps: [
                ['Reached restaurant', true],
                ['Order picked up', true],
                ['On the way', true],
                ['Delivered', false],
              ],
            },
          },
        ],
      },
      adminRole(
        'order, restaurant, rider and payout',
        [
          { v: '2,480', l: 'Orders' },
          { v: '₹4.2L', l: 'GMV' },
          { v: '142', l: 'Restaurants' },
          { v: '96%', l: 'On-time' },
        ],
        [
          { k: 'Spice Garden', v: '₹42k' },
          { k: 'Urban Tandoor', v: '₹36k' },
        ],
      ),
    ],
  },

  {
    key: 'grocery',
    label: 'Grocery Delivery App',
    slugs: ['grocery-app-development', 'medicine-delivery-app-development'],
    roles: [
      {
        title: 'Shopper App',
        icon: 'ShoppingBasket',
        description: 'Aisle-style browsing, big baskets and slot-based delivery.',
        features: [
          'Category and aisle navigation',
          'Repeat basket in one tap',
          'Slot selection at checkout',
          'Substitutions with approval',
          'Live rider tracking',
        ],
        screens: [
          {
            label: 'Aisles & search',
            spec: {
              kind: 'list',
              place: 'Home · Sector 62',
              searchHint: 'Search atta, milk, vegetables…',
              chips: ['All', 'Fruits', 'Dairy', 'Snacks'],
              items: [
                { title: 'Fresh Vegetables', meta: '120+ items · 10 min', badge: '4.7' },
                { title: 'Dairy & Bakery', meta: '85+ items · 10 min', badge: '4.6' },
                { title: 'Household Care', meta: '210+ items · 15 min', badge: '4.5' },
              ],
            },
          },
          {
            label: 'Basket & slots',
            spec: {
              kind: 'detail',
              title: 'Your basket',
              sub: '14 items · delivery in 10 min',
              tags: ['FREE DELIVERY', 'SLOT 6-7 PM'],
              rows: [
                { name: 'Amul Milk 1L × 2', meta: '₹132', action: 'EDIT' },
                { name: 'Tomato 1kg', meta: '₹48', action: 'EDIT' },
                { name: 'Aashirvaad Atta 5kg', meta: '₹285', action: 'EDIT' },
              ],
              cta: 'Checkout',
              ctaMeta: '14 items · ₹1,240',
            },
          },
          {
            label: 'Order tracking',
            spec: {
              kind: 'map',
              status: 'Packed · arriving 6:40 PM',
              agent: 'Vikram is picking your order',
              agentMeta: 'Dark store · Sector 63',
              steps: [
                ['Order placed', true],
                ['Picking items', true],
                ['Out for delivery', false],
                ['Delivered', false],
              ],
            },
          },
        ],
      },
      {
        title: 'Dark Store App',
        icon: 'Store',
        description: 'Pick lists, stock counts and dispatch, tuned for speed on the floor.',
        features: [
          'Optimised pick paths',
          'Live stock and expiry tracking',
          'Substitution suggestions',
          'Batch dispatch to riders',
          'Wastage and audit logs',
        ],
        screens: [
          {
            label: 'Store operations',
            spec: {
              kind: 'dashboard',
              title: 'Dark Store',
              sub: 'Sector 63 hub',
              stats: [
                { v: '38', l: 'To pick' },
                { v: '9 min', l: 'Avg pick' },
                { v: '412', l: 'SKUs low' },
                { v: '99%', l: 'Fill rate' },
              ],
              chartLabel: 'Orders per hour',
              rows: [
                { k: 'Batch #221 · 6 orders', v: 'Picking' },
                { k: 'Batch #220 · 8 orders', v: 'Dispatched' },
              ],
            },
          },
        ],
      },
      {
        title: 'Rider App',
        icon: 'Bike',
        description: 'Multi-drop routes with the next stop always front and centre.',
        features: [
          'Batched multi-drop routing',
          'Cash and prepaid handling',
          'Contactless delivery proof',
          'Per-trip earnings breakdown',
          'Offline-tolerant sync',
        ],
        screens: [
          {
            label: 'Route & drops',
            spec: {
              kind: 'map',
              status: '3 drops · 4.8 km',
              agent: 'Next: B-42, Sector 62',
              agentMeta: 'Prepaid · no cash to collect',
              steps: [
                ['Picked from store', true],
                ['Drop 1 delivered', true],
                ['Drop 2 in progress', false],
                ['Drop 3 pending', false],
              ],
            },
          },
          {
            label: 'Earnings',
            spec: {
              kind: 'wallet',
              label: "Today's earnings",
              amount: '₹1,060',
              sub: '24 drops · 7h online',
              chartLabel: 'This week',
              rows: [
                { k: 'Batch #221', v: '+₹210' },
                { k: 'Peak hour bonus', v: '+₹120' },
              ],
            },
          },
        ],
      },
      adminRole(
        'store, SKU, rider and refund',
        [
          { v: '5,120', l: 'Orders' },
          { v: '₹6.8L', l: 'GMV' },
          { v: '14', l: 'Dark stores' },
          { v: '11 min', l: 'Avg ETA' },
        ],
        [
          { k: 'Sector 63 hub', v: '₹92k' },
          { k: 'Sector 18 hub', v: '₹74k' },
        ],
      ),
    ],
  },

  {
    key: 'taxi',
    label: 'Taxi Booking App',
    slugs: [
      'taxi-service-application',
      'taxi-booking-app-development',
      'car-rental-website-design',
    ],
    roles: [
      {
        title: 'Rider App',
        icon: 'User',
        description: 'Book in seconds, see the fare up front and track the car live.',
        features: [
          'Pickup and drop with map pins',
          'Ride classes with upfront fares',
          'Live driver tracking and ETA',
          'In-app payments and wallet',
          'Trip history and invoices',
        ],
        screens: [
          {
            label: 'Choose your ride',
            spec: {
              kind: 'list',
              place: 'Sector 62 to Connaught Place',
              searchHint: 'Where would you like to go?',
              chips: ['Now', 'Schedule', 'Rentals', 'Outstation'],
              items: [
                { title: 'Achivora Go · Hatchback', meta: '3 min away · ₹248', badge: '4.8' },
                { title: 'Achivora Sedan', meta: '5 min away · ₹324', badge: '4.7' },
                { title: 'Achivora XL · SUV', meta: '7 min away · ₹468', badge: '4.6' },
              ],
            },
          },
          {
            label: 'Live trip',
            spec: {
              kind: 'map',
              status: 'Arriving in 3 min',
              agent: 'Suresh · DL 1C AA 4821',
              agentMeta: 'White Swift Dzire · 4.8 rating',
              steps: [
                ['Driver assigned', true],
                ['Arriving at pickup', true],
                ['Trip in progress', false],
                ['Trip completed', false],
              ],
            },
          },
          {
            label: 'Fare & payment',
            spec: {
              kind: 'wallet',
              label: 'Trip fare',
              amount: '₹248',
              sub: '12.4 km · 34 min · Sector 62 to CP',
              chartLabel: 'Your spend this week',
              rows: [
                { k: 'Base fare', v: '₹198' },
                { k: 'Wallet applied', v: '-₹50', up: false },
              ],
            },
          },
        ],
      },
      {
        title: 'Driver App',
        icon: 'Car',
        description: 'Accept trips, navigate and watch earnings build through the shift.',
        features: [
          'Ride requests with fare preview',
          'Turn-by-turn navigation',
          'Duty on/off and heat maps',
          'Daily and weekly earnings',
          'Ratings and incentive tracker',
        ],
        screens: [
          {
            label: 'Trip request',
            spec: {
              kind: 'map',
              status: 'New request · ₹248',
              agent: 'Pickup: Sector 62, Noida',
              agentMeta: '3.2 km away · 34 min trip',
              steps: [
                ['Request received', true],
                ['Heading to pickup', false],
                ['Trip started', false],
                ['Trip completed', false],
              ],
            },
          },
          {
            label: 'Earnings',
            spec: {
              kind: 'wallet',
              label: "Today's earnings",
              amount: '₹2,180',
              sub: '14 trips · 8h 10m online',
              chartLabel: 'This week',
              rows: [
                { k: 'Trip fares', v: '+₹1,930' },
                { k: 'Peak incentive', v: '+₹250' },
              ],
            },
          },
        ],
      },
      {
        title: 'Fleet Owner App',
        icon: 'Truck',
        description: 'For operators running many cars — utilisation, drivers and settlements.',
        features: [
          'Vehicle and driver assignment',
          'Utilisation and idle time',
          'Document and permit expiry',
          'Per-vehicle profit and loss',
          'Automated driver settlements',
        ],
        screens: [
          {
            label: 'Fleet overview',
            spec: {
              kind: 'dashboard',
              title: 'Fleet Owner',
              sub: '24 vehicles active',
              stats: [
                { v: '24', l: 'Vehicles' },
                { v: '82%', l: 'Utilisation' },
                { v: '₹1.8L', l: 'Week revenue' },
                { v: '3', l: 'Docs expiring' },
              ],
              chartLabel: 'Trips per day',
              rows: [
                { k: 'DL 1C AA 4821', v: '₹8.2k' },
                { k: 'DL 1C AB 9012', v: '₹7.4k' },
              ],
            },
          },
        ],
      },
      adminRole(
        'trip, driver, fare and dispute',
        [
          { v: '18.2k', l: 'Trips' },
          { v: '₹32L', l: 'GMV' },
          { v: '860', l: 'Drivers' },
          { v: '4.7', l: 'Avg rating' },
        ],
        [
          { k: 'Noida zone', v: '₹6.2L' },
          { k: 'Delhi zone', v: '₹9.8L' },
        ],
      ),
    ],
  },

  {
    key: 'fintech',
    label: 'Fintech App',
    slugs: ['fintech-app-development', 'finance-insurance-app', 'finance-insurance'],
    roles: [
      {
        title: 'Customer App',
        icon: 'Wallet',
        description: 'Accounts, payments and investments in a surface people trust.',
        features: [
          'KYC onboarding with DigiLocker',
          'UPI, cards and bank transfers',
          'Spend analytics and budgets',
          'Investments and goals',
          'Biometric and device binding',
        ],
        screens: [
          {
            label: 'Onboarding & KYC',
            spec: {
              kind: 'auth',
              title: 'Banking that keeps up',
              sub: 'Open an account in under 4 minutes with Aadhaar-based KYC.',
              cta: 'Get started',
              hint: 'Mobile number',
            },
          },
          {
            label: 'Wallet & balance',
            spec: {
              kind: 'wallet',
              label: 'Available balance',
              amount: '₹84,260',
              sub: 'Savings · **** 4821',
              chartLabel: 'Spend this week',
              rows: [
                { k: 'Salary credit', v: '+₹92,000' },
                { k: 'Rent payment', v: '-₹28,000', up: false },
                { k: 'SIP · Index Fund', v: '-₹10,000', up: false },
              ],
            },
          },
          {
            label: 'Spend insights',
            spec: {
              kind: 'dashboard',
              title: 'Insights',
              sub: 'August 2026',
              stats: [
                { v: '₹42.8k', l: 'Spent' },
                { v: '₹18.2k', l: 'Saved' },
                { v: '12%', l: 'vs last month' },
                { v: '4', l: 'Goals on track' },
              ],
              chartLabel: 'Category spend',
              rows: [
                { k: 'Food & dining', v: '₹9.4k' },
                { k: 'Transport', v: '₹4.2k' },
              ],
            },
          },
        ],
      },
      {
        title: 'Merchant App',
        icon: 'Store',
        description: 'Collect payments, reconcile settlements and see the day at a glance.',
        features: [
          'QR and link-based collection',
          'Instant payment notifications',
          'Daily settlement reconciliation',
          'Refunds and chargebacks',
          'GST-ready reporting',
        ],
        screens: [
          {
            label: 'Collections',
            spec: {
              kind: 'wallet',
              label: "Today's collections",
              amount: '₹1,48,200',
              sub: '312 transactions · settles T+1',
              chartLabel: 'Collections this week',
              rows: [
                { k: 'UPI', v: '+₹98,400' },
                { k: 'Cards', v: '+₹49,800' },
              ],
            },
          },
          {
            label: 'Business dashboard',
            spec: {
              kind: 'dashboard',
              title: 'Merchant',
              sub: 'Store performance',
              stats: [
                { v: '312', l: 'Txns' },
                { v: '₹475', l: 'Avg ticket' },
                { v: '99.2%', l: 'Success' },
                { v: '4', l: 'Refunds' },
              ],
              chartLabel: 'Revenue this week',
              rows: [
                { k: 'Counter 1', v: '₹82k' },
                { k: 'Online orders', v: '₹66k' },
              ],
            },
          },
        ],
      },
      {
        title: 'Lending & Claims',
        icon: 'Landmark',
        description: 'Applications, underwriting and disbursal with a full audit trail.',
        features: [
          'Digital application journey',
          'Bureau and bank-statement pulls',
          'Rule-based underwriting',
          'e-Sign and e-Mandate',
          'Collections and recovery',
        ],
        screens: [
          {
            label: 'Application status',
            spec: {
              kind: 'map',
              status: 'Approved · ₹4,00,000',
              agent: 'Personal loan application',
              agentMeta: 'Ref #LN-48210 · 11.4% p.a.',
              steps: [
                ['Application submitted', true],
                ['Documents verified', true],
                ['Underwriting cleared', true],
                ['Disbursal pending', false],
              ],
            },
          },
        ],
      },
      adminRole(
        'transaction, ledger, KYC and dispute',
        [
          { v: '2.4L', l: 'Txns' },
          { v: '₹18Cr', l: 'TPV' },
          { v: '99.4%', l: 'Success' },
          { v: '12', l: 'Open disputes' },
        ],
        [
          { k: 'UPI rail', v: '₹11Cr' },
          { k: 'Card rail', v: '₹7Cr' },
        ],
      ),
    ],
  },

  {
    key: 'fitness',
    label: 'Fitness & Gym App',
    slugs: ['fitness-app-development', 'gym-web-design'],
    roles: [
      {
        title: 'Member App',
        icon: 'Dumbbell',
        description: 'Plans, classes and progress — the reason members keep renewing.',
        features: [
          'Personalised workout plans',
          'Class booking and waitlists',
          'Progress and body metrics',
          'Nutrition and habit tracking',
          'Membership and renewals',
        ],
        screens: [
          {
            label: 'Class booking',
            spec: {
              kind: 'calendar',
              title: 'Book a class',
              month: 'August 2026',
              slots: [
                { time: '06:30', label: 'HIIT · Coach Anjali', tone: 'free' },
                { time: '08:00', label: 'Strength · Coach Vikram', tone: 'busy' },
                { time: '18:30', label: 'Yoga Flow · Coach Neha', tone: 'free' },
                { time: '20:00', label: 'Spin · Coach Rohit', tone: 'done' },
              ],
            },
          },
          {
            label: 'Workout plan',
            spec: {
              kind: 'detail',
              title: 'Week 4 · Upper body',
              sub: 'Strength block · 48 min',
              tags: ['ON TRACK', 'DAY 3 OF 5'],
              rows: [
                { name: 'Bench press', meta: '4 × 8 · 60 kg', action: 'LOG' },
                { name: 'Seated row', meta: '4 × 10 · 45 kg', action: 'LOG' },
                { name: 'Face pulls', meta: '3 × 15 · 25 kg', action: 'LOG' },
              ],
              cta: 'Finish',
              ctaMeta: '2 of 6 done',
            },
          },
          {
            label: 'Progress',
            spec: {
              kind: 'dashboard',
              title: 'Your progress',
              sub: 'Last 8 weeks',
              stats: [
                { v: '-4.2 kg', l: 'Weight' },
                { v: '32', l: 'Sessions' },
                { v: '+18%', l: 'Strength' },
                { v: '86%', l: 'Attendance' },
              ],
              chartLabel: 'Sessions per week',
              rows: [
                { k: 'Personal best · Squat', v: '110 kg' },
                { k: 'Longest streak', v: '21 days' },
              ],
            },
          },
        ],
      },
      {
        title: 'Trainer App',
        icon: 'User',
        description: 'Client rosters, plan assignment and remote check-ins.',
        features: [
          'Client roster and notes',
          'Plan builder and templates',
          'Form-check video review',
          'Progress alerts and nudges',
          'Session and payout tracking',
        ],
        screens: [
          {
            label: 'Client roster',
            spec: {
              kind: 'list',
              searchHint: 'Search your clients…',
              chips: ['Active', 'At risk', 'New', 'Paused'],
              items: [
                { title: 'Ananya Roy', meta: 'Week 4 · 86% adherence', badge: '4.9' },
                { title: 'Karan Mehta', meta: 'Week 2 · 62% adherence', badge: '4.5' },
                { title: 'Priya Nair', meta: 'Week 9 · 94% adherence', badge: '5.0' },
              ],
            },
          },
          {
            label: 'Schedule',
            spec: {
              kind: 'calendar',
              title: 'Your sessions',
              month: 'August 2026',
              slots: [
                { time: '07:00', label: 'PT · Ananya Roy', tone: 'done' },
                { time: '09:30', label: 'PT · Karan Mehta', tone: 'busy' },
                { time: '17:00', label: 'Group HIIT', tone: 'free' },
              ],
            },
          },
        ],
      },
      {
        title: 'Gym Owner App',
        icon: 'Store',
        description: 'Memberships, footfall and revenue for the people running the floor.',
        features: [
          'Membership and renewal pipeline',
          'Footfall and peak-hour analytics',
          'Trainer utilisation',
          'Payments and dues follow-up',
          'Equipment maintenance log',
        ],
        screens: [
          {
            label: 'Gym dashboard',
            spec: {
              kind: 'dashboard',
              title: 'Gym Owner',
              sub: 'Sector 62 branch',
              stats: [
                { v: '842', l: 'Members' },
                { v: '₹6.4L', l: 'MRR' },
                { v: '68', l: 'Renewals due' },
                { v: '12%', l: 'Churn' },
              ],
              chartLabel: 'Daily footfall',
              rows: [
                { k: 'New joins this month', v: '48' },
                { k: 'Pending dues', v: '₹84k' },
              ],
            },
          },
        ],
      },
      adminRole(
        'branch, member, trainer and payment',
        [
          { v: '4', l: 'Branches' },
          { v: '3,120', l: 'Members' },
          { v: '₹22L', l: 'MRR' },
          { v: '9%', l: 'Churn' },
        ],
        [
          { k: 'Sector 62', v: '₹6.4L' },
          { k: 'Sector 18', v: '₹5.8L' },
        ],
      ),
    ],
  },

  {
    key: 'astrology',
    label: 'Astrology App',
    slugs: ['astrology-website-design'],
    roles: [
      {
        title: 'Seeker App',
        icon: 'Star',
        description: 'Charts, daily readings and paid consultations with real astrologers.',
        features: [
          'Birth chart and kundli generation',
          'Daily, weekly and yearly readings',
          'Astrologer discovery with ratings',
          'Per-minute chat and call billing',
          'Wallet and recharge',
        ],
        screens: [
          {
            label: 'Find an astrologer',
            spec: {
              kind: 'list',
              searchHint: 'Search by skill, language…',
              chips: ['All', 'Vedic', 'Tarot', 'Numerology'],
              items: [
                { title: 'Pandit Ramesh', meta: 'Vedic · Hindi · ₹22/min', badge: '4.9' },
                { title: 'Acharya Sunita', meta: 'Tarot · English · ₹30/min', badge: '4.8' },
                { title: 'Guru Prakash', meta: 'Numerology · ₹18/min', badge: '4.7' },
              ],
            },
          },
          {
            label: 'Kundli & reading',
            spec: {
              kind: 'detail',
              title: 'Your Kundli',
              sub: 'Born 14 Mar 1996 · 06:20 · Lucknow',
              tags: ['MESHA LAGNA', 'GURU MAHADASHA'],
              rows: [
                { name: 'Career & finance', meta: 'Strong 10th house', action: 'READ' },
                { name: 'Relationships', meta: 'Venus favourable', action: 'READ' },
                { name: 'Health', meta: 'Watch 6th house', action: 'READ' },
              ],
              cta: 'Consult now',
              ctaMeta: 'Wallet ₹480',
            },
          },
          {
            label: 'Live consultation',
            spec: {
              kind: 'chat',
              title: 'Pandit Ramesh',
              sub: 'Online · ₹22/min',
              messages: [
                { text: 'Namaste. Please share your birth details.' },
                { me: true, text: '14 March 1996, 6:20 AM, Lucknow' },
                { text: 'Your Guru mahadasha begins next month — a strong window for career moves.' },
                { me: true, text: 'Should I change jobs then?' },
              ],
              inputHint: 'Type your question…',
            },
          },
        ],
      },
      {
        title: 'Astrologer App',
        icon: 'User',
        description: 'Manage availability, take consultations and track earnings.',
        features: [
          'Online/offline availability toggle',
          'Chat, call and video consults',
          'Auto per-minute billing',
          'Client history and notes',
          'Weekly payout statements',
        ],
        screens: [
          {
            label: 'Earnings',
            spec: {
              kind: 'wallet',
              label: "Today's earnings",
              amount: '₹4,820',
              sub: '18 consultations · 3h 42m billed',
              chartLabel: 'This week',
              rows: [
                { k: 'Chat consultations', v: '+₹2,940' },
                { k: 'Call consultations', v: '+₹1,880' },
              ],
            },
          },
          {
            label: 'Consultation queue',
            spec: {
              kind: 'calendar',
              title: 'Your schedule',
              month: 'August 2026',
              slots: [
                { time: '10:00', label: 'Call · Ananya R.', tone: 'done' },
                { time: '11:30', label: 'Chat · Karan M.', tone: 'busy' },
                { time: '16:00', label: 'Open slot', tone: 'free' },
              ],
            },
          },
        ],
      },
      adminRole(
        'consultation, astrologer, wallet and payout',
        [
          { v: '12.4k', l: 'Consults' },
          { v: '₹38L', l: 'Revenue' },
          { v: '240', l: 'Astrologers' },
          { v: '4.8', l: 'Avg rating' },
        ],
        [
          { k: 'Chat revenue', v: '₹22L' },
          { k: 'Call revenue', v: '₹16L' },
        ],
      ),
    ],
  },

  {
    key: 'matrimonial',
    label: 'Matrimonial App',
    slugs: ['matrimonial-application', 'matrimonial-website-design'],
    roles: [
      {
        title: 'Member App',
        icon: 'Heart',
        description: 'Verified profiles, serious intent and family-friendly privacy controls.',
        features: [
          'Detailed profile with verification',
          'Partner preference matching',
          'Interest, shortlist and accept flow',
          'Photo privacy and blur controls',
          'Horoscope and kundli matching',
        ],
        screens: [
          {
            label: 'Match discovery',
            spec: {
              kind: 'list',
              searchHint: 'Search by community, city, profession…',
              chips: ['Matches', 'New', 'Shortlisted', 'Nearby'],
              items: [
                { title: 'Ananya, 27', meta: 'Bengaluru · CA · 5\'4"', badge: '92% match' },
                { title: 'Priya, 26', meta: 'Pune · Doctor · 5\'3"', badge: '88% match' },
                { title: 'Ishita, 28', meta: 'Delhi · Architect · 5\'6"', badge: '85% match' },
              ],
            },
          },
          {
            label: 'Profile view',
            spec: {
              kind: 'profile',
              name: 'Ananya Sharma, 27',
              meta: 'Chartered Accountant · Bengaluru',
              badges: ['ID VERIFIED', '92% MATCH', 'PREMIUM'],
              rows: [
                { k: 'Height', v: "5' 4\"" },
                { k: 'Education', v: 'CA, B.Com' },
                { k: 'Family', v: 'Nuclear, Bengaluru' },
                { k: 'Horoscope', v: 'Manglik: No' },
              ],
              actions: ['Shortlist', 'Send interest'],
            },
          },
          {
            label: 'Conversation',
            spec: {
              kind: 'chat',
              title: 'Ananya S.',
              sub: 'Interest accepted',
              messages: [
                { text: 'Hi! Thanks for reaching out.' },
                { me: true, text: 'Hello! Your profile really stood out.' },
                { text: 'Likewise. Are your families based in Bengaluru too?' },
              ],
              inputHint: 'Write a message…',
            },
          },
        ],
      },
      {
        title: 'Family Access',
        icon: 'Users',
        description: 'Parents and siblings can shortlist and shortlist together, safely.',
        features: [
          'Shared family shortlist',
          'Parent-managed profiles',
          'Controlled contact sharing',
          'Meeting scheduling',
          'Activity visibility settings',
        ],
        screens: [
          {
            label: 'Family shortlist',
            spec: {
              kind: 'list',
              searchHint: 'Shared shortlist…',
              chips: ['Shortlisted', 'Approved', 'Declined'],
              items: [
                { title: 'Ananya, 27', meta: 'Approved by Mother', badge: '92%' },
                { title: 'Priya, 26', meta: 'Pending family review', badge: '88%' },
              ],
            },
          },
        ],
      },
      {
        title: 'Relationship Manager',
        icon: 'UserCog',
        description: 'For premium plans — a human curating matches and coordinating meetings.',
        features: [
          'Assigned member portfolio',
          'Curated match suggestions',
          'Meeting coordination',
          'Feedback capture after meetings',
          'Renewal and upgrade tracking',
        ],
        screens: [
          {
            label: 'Member portfolio',
            spec: {
              kind: 'dashboard',
              title: 'Relationship Manager',
              sub: '42 premium members',
              stats: [
                { v: '42', l: 'Members' },
                { v: '18', l: 'Meetings set' },
                { v: '6', l: 'Engaged' },
                { v: '4.8', l: 'Satisfaction' },
              ],
              chartLabel: 'Matches sent weekly',
              rows: [
                { k: 'Ananya S. · 3 meetings', v: 'Active' },
                { k: 'Karan M. · renewal due', v: '7 days' },
              ],
            },
          },
        ],
      },
      adminRole(
        'profile, verification, subscription and report',
        [
          { v: '2.8L', l: 'Profiles' },
          { v: '₹1.4Cr', l: 'Revenue' },
          { v: '94%', l: 'ID verified' },
          { v: '18', l: 'Open reports' },
        ],
        [
          { k: 'Premium plans', v: '₹92L' },
          { k: 'Elite plans', v: '₹48L' },
        ],
      ),
    ],
  },

  {
    key: 'dating',
    label: 'Dating App',
    slugs: ['dating-app-development', 'social-media-app-development'],
    roles: [
      {
        title: 'Discovery App',
        icon: 'Heart',
        description: 'Swipe, match and chat — with safety controls that actually work.',
        features: [
          'Swipe and match mechanics',
          'Interest and vibe based matching',
          'Photo verification badges',
          'Block, report and safe mode',
          'Super likes and boosts',
        ],
        screens: [
          {
            label: 'Discover',
            spec: {
              kind: 'profile',
              name: 'Riya, 25',
              meta: '3 km away · Designer',
              badges: ['VERIFIED', 'ONLINE NOW'],
              rows: [
                { k: 'Interests', v: 'Travel, indie music' },
                { k: 'Looking for', v: 'Something serious' },
                { k: 'Height', v: "5' 5\"" },
              ],
              actions: ['Pass', 'Like'],
            },
          },
          {
            label: 'Matches',
            spec: {
              kind: 'list',
              searchHint: 'Search your matches…',
              chips: ['New', 'Chats', 'Likes you', 'Nearby'],
              items: [
                { title: 'Riya', meta: 'Matched 2h ago · Say hi', badge: 'NEW' },
                { title: 'Meera', meta: 'You: See you Saturday!', badge: '2' },
                { title: 'Aditi', meta: 'Matched yesterday', badge: 'NEW' },
              ],
            },
          },
          {
            label: 'Chat',
            spec: {
              kind: 'chat',
              title: 'Riya',
              sub: 'Online now',
              messages: [
                { text: 'Hey! Loved your travel photos.' },
                { me: true, text: 'Thanks! That was Spiti last winter.' },
                { text: 'No way, it is on my list. Coffee this weekend?' },
              ],
              inputHint: 'Say something…',
            },
          },
        ],
      },
      {
        title: 'Premium & Boosts',
        icon: 'Sparkles',
        description: 'The monetisation surface — subscriptions, boosts and super likes.',
        features: [
          'Tiered subscription plans',
          'Boost and spotlight purchases',
          'See-who-liked-you unlock',
          'Rewind and unlimited likes',
          'In-app purchase reconciliation',
        ],
        screens: [
          {
            label: 'Plans & wallet',
            spec: {
              kind: 'wallet',
              label: 'Achivora Gold',
              amount: '₹799/mo',
              sub: 'Unlimited likes · see who liked you',
              chartLabel: 'Your matches this week',
              rows: [
                { k: '5 Boosts', v: '₹499' },
                { k: '10 Super Likes', v: '₹299' },
              ],
            },
          },
        ],
      },
      {
        title: 'Safety & Moderation',
        icon: 'ShieldCheck',
        description: 'Verification, reporting and review tooling that keeps the community usable.',
        features: [
          'Selfie-based photo verification',
          'Automated content screening',
          'Report queue with evidence',
          'Shadow-ban and appeal flow',
          'Safety centre and resources',
        ],
        screens: [
          {
            label: 'Moderation queue',
            spec: {
              kind: 'dashboard',
              title: 'Trust & Safety',
              sub: 'Live moderation',
              stats: [
                { v: '124', l: 'In queue' },
                { v: '8 min', l: 'Avg review' },
                { v: '96%', l: 'Auto-cleared' },
                { v: '12', l: 'Escalations' },
              ],
              chartLabel: 'Reports per day',
              rows: [
                { k: 'Fake profile reports', v: '42' },
                { k: 'Harassment reports', v: '18' },
              ],
            },
          },
        ],
      },
      adminRole(
        'user, match, subscription and report',
        [
          { v: '1.2M', l: 'Users' },
          { v: '48M', l: 'Swipes' },
          { v: '₹2.4Cr', l: 'Revenue' },
          { v: '3.2%', l: 'Paid conv.' },
        ],
        [
          { k: 'Gold subscriptions', v: '₹1.6Cr' },
          { k: 'Boosts & add-ons', v: '₹78L' },
        ],
      ),
    ],
  },

  /* ── Enterprise Solutions ───────────────────────────────────────────── */
  {
    key: 'hrm',
    label: 'HRM Solution',
    slugs: ['hr-management-system'],
    roles: [
      {
        title: 'Employee App',
        icon: 'User',
        description: 'Attendance, leave, payslips and reimbursements without emailing HR.',
        features: [
          'Geo-fenced check-in/out',
          'Leave apply and balance view',
          'Payslips and tax declarations',
          'Expense claims with receipts',
          'Company directory and policies',
        ],
        screens: [
          {
            label: 'Attendance',
            spec: {
              kind: 'calendar',
              title: 'My attendance',
              month: 'August 2026',
              slots: [
                { time: '09:12', label: 'Checked in · Office', tone: 'done' },
                { time: '13:30', label: 'Lunch break', tone: 'done' },
                { time: '18:40', label: 'Check out pending', tone: 'free' },
              ],
            },
          },
          {
            label: 'Payslip',
            spec: {
              kind: 'wallet',
              label: 'Net pay · August',
              amount: '₹92,480',
              sub: 'Credited 31 Aug · HDFC **** 4821',
              chartLabel: 'Earnings trend',
              rows: [
                { k: 'Gross salary', v: '+₹1,18,000' },
                { k: 'TDS + PF', v: '-₹25,520', up: false },
              ],
            },
          },
          {
            label: 'Leave request',
            spec: {
              kind: 'detail',
              title: 'Apply for leave',
              sub: 'Earned leave · 12 days available',
              tags: ['12 EL', '6 CL'],
              rows: [
                { name: 'From', meta: '12 September 2026', action: 'EDIT' },
                { name: 'To', meta: '16 September 2026', action: 'EDIT' },
                { name: 'Approver', meta: 'Priya Sharma (Manager)' },
              ],
              cta: 'Submit',
              ctaMeta: '5 days requested',
            },
          },
        ],
      },
      {
        title: 'Manager App',
        icon: 'UserCog',
        description: 'Approvals, team attendance and appraisal cycles in one queue.',
        features: [
          'One-tap leave and expense approvals',
          'Team attendance and absence view',
          'Goal setting and check-ins',
          'Appraisal cycle management',
          'Headcount and hiring requests',
        ],
        screens: [
          {
            label: 'Approvals',
            spec: {
              kind: 'list',
              searchHint: 'Search pending approvals…',
              chips: ['Pending', 'Leave', 'Expense', 'Approved'],
              items: [
                { title: 'Ananya Roy · 5 days EL', meta: 'Sep 12 – Sep 16', badge: 'NEW' },
                { title: 'Karan Mehta · ₹4,200', meta: 'Client travel expense', badge: 'NEW' },
                { title: 'Rohit Verma · 1 day CL', meta: 'Sep 8', badge: '2d' },
              ],
            },
          },
          {
            label: 'Team overview',
            spec: {
              kind: 'dashboard',
              title: 'My team',
              sub: '18 direct reports',
              stats: [
                { v: '16', l: 'Present' },
                { v: '2', l: 'On leave' },
                { v: '4', l: 'Approvals' },
                { v: '92%', l: 'Goal progress' },
              ],
              chartLabel: 'Team attendance',
              rows: [
                { k: 'Appraisals due', v: '6' },
                { k: 'Open positions', v: '3' },
              ],
            },
          },
        ],
      },
      {
        title: 'HR Console',
        icon: 'Users',
        description: 'Hiring, onboarding, payroll runs and compliance in one console.',
        features: [
          'Applicant tracking and offers',
          'Digital onboarding checklists',
          'Payroll run with statutory filings',
          'PF, ESI, TDS compliance',
          'Attrition and headcount analytics',
        ],
        screens: [
          {
            label: 'HR dashboard',
            spec: {
              kind: 'dashboard',
              title: 'HR Console',
              sub: 'Company overview',
              stats: [
                { v: '482', l: 'Employees' },
                { v: '18', l: 'Joining' },
                { v: '₹4.2Cr', l: 'Payroll' },
                { v: '8.2%', l: 'Attrition' },
              ],
              chartLabel: 'Headcount trend',
              rows: [
                { k: 'Payroll run · August', v: 'Ready' },
                { k: 'PF filing due', v: '15 Sep' },
              ],
            },
          },
        ],
      },
      adminRole(
        'employee, payroll, policy and compliance record',
        [
          { v: '482', l: 'Employees' },
          { v: '6', l: 'Locations' },
          { v: '₹4.2Cr', l: 'Monthly payroll' },
          { v: '100%', l: 'Compliance' },
        ],
        [
          { k: 'Engineering', v: '214' },
          { k: 'Sales & marketing', v: '96' },
        ],
      ),
    ],
  },

  {
    key: 'crm',
    label: 'CRM Solution',
    slugs: ['crm-development'],
    roles: [
      {
        title: 'Sales Rep App',
        icon: 'User',
        description: 'Pipeline, calls and follow-ups from the field, not from a desk.',
        features: [
          'Lead and deal pipeline',
          'Click-to-call with auto logging',
          'Meeting notes and next steps',
          'Quotation generation',
          'Target and incentive tracker',
        ],
        screens: [
          {
            label: 'My pipeline',
            spec: {
              kind: 'list',
              searchHint: 'Search leads, accounts…',
              chips: ['All', 'Hot', 'This week', 'Overdue'],
              items: [
                { title: 'Corewave Pvt Ltd', meta: 'Proposal sent · ₹8.4L', badge: 'HOT' },
                { title: 'Lumina Retail', meta: 'Demo scheduled · ₹4.2L', badge: 'WARM' },
                { title: 'Skyforge Labs', meta: 'Negotiation · ₹12L', badge: 'HOT' },
              ],
            },
          },
          {
            label: 'Deal view',
            spec: {
              kind: 'detail',
              title: 'Corewave Pvt Ltd',
              sub: 'Proposal sent · closes 30 Sep',
              tags: ['₹8.4L', '70% PROBABILITY'],
              rows: [
                { name: 'Rohit Nair', meta: 'Decision maker · CTO', action: 'CALL' },
                { name: 'Proposal v2.pdf', meta: 'Sent 3 days ago', action: 'VIEW' },
                { name: 'Next: follow-up call', meta: 'Tomorrow 11:00', action: 'EDIT' },
              ],
              cta: 'Log activity',
              ctaMeta: 'Stage: Proposal',
            },
          },
          {
            label: 'My targets',
            spec: {
              kind: 'wallet',
              label: 'Quarter to date',
              amount: '₹42.8L',
              sub: '68% of ₹63L target · 24 days left',
              chartLabel: 'Closed per month',
              rows: [
                { k: 'Closed won', v: '+₹42.8L' },
                { k: 'Incentive earned', v: '+₹1.8L' },
              ],
            },
          },
        ],
      },
      {
        title: 'Sales Manager',
        icon: 'UserCog',
        description: 'Forecast, coach and unblock — with a pipeline you can actually trust.',
        features: [
          'Team pipeline and forecast',
          'Deal risk and stagnation alerts',
          'Call recording review',
          'Territory and lead assignment',
          'Quota and incentive planning',
        ],
        screens: [
          {
            label: 'Team forecast',
            spec: {
              kind: 'dashboard',
              title: 'Sales Manager',
              sub: 'Q3 forecast',
              stats: [
                { v: '₹2.8Cr', l: 'Pipeline' },
                { v: '₹1.1Cr', l: 'Committed' },
                { v: '32%', l: 'Win rate' },
                { v: '41 d', l: 'Avg cycle' },
              ],
              chartLabel: 'Closed won per month',
              rows: [
                { k: 'Ananya · 112% of quota', v: '₹18L' },
                { k: 'Karan · 74% of quota', v: '₹11L' },
              ],
            },
          },
        ],
      },
      {
        title: 'Support & Success',
        icon: 'Users',
        description: 'Tickets, renewals and health scores so revenue does not leak after the sale.',
        features: [
          'Omnichannel ticket inbox',
          'SLA timers and escalation',
          'Customer health scoring',
          'Renewal and upsell pipeline',
          'CSAT and NPS capture',
        ],
        screens: [
          {
            label: 'Ticket inbox',
            spec: {
              kind: 'list',
              searchHint: 'Search tickets…',
              chips: ['Open', 'Breaching', 'Mine', 'Resolved'],
              items: [
                { title: '#8421 · Login failure', meta: 'Corewave · SLA 2h left', badge: 'P1' },
                { title: '#8420 · Invoice query', meta: 'Lumina · SLA 1d left', badge: 'P3' },
                { title: '#8419 · Feature request', meta: 'Skyforge', badge: 'P4' },
              ],
            },
          },
        ],
      },
      adminRole(
        'account, deal, ticket and automation rule',
        [
          { v: '12.4k', l: 'Contacts' },
          { v: '₹8.2Cr', l: 'Pipeline' },
          { v: '482', l: 'Open deals' },
          { v: '94%', l: 'SLA met' },
        ],
        [
          { k: 'Inbound leads', v: '2,140' },
          { k: 'Outbound leads', v: '1,860' },
        ],
      ),
    ],
  },

  {
    key: 'erp',
    label: 'ERP Solution',
    slugs: ['custom-erp-software', 'manufacturing-application', 'manufacturing-website-design'],
    roles: [
      {
        title: 'Operations App',
        icon: 'Factory',
        description: 'Production, inventory and quality from the shop floor on a tablet.',
        features: [
          'Work orders and job cards',
          'Live inventory and bin locations',
          'Quality checks with photos',
          'Machine downtime logging',
          'Barcode and QR scanning',
        ],
        screens: [
          {
            label: 'Work orders',
            spec: {
              kind: 'list',
              searchHint: 'Search work orders, SKUs…',
              chips: ['Today', 'In progress', 'On hold', 'Done'],
              items: [
                { title: 'WO-4821 · Assembly A', meta: '820 / 1000 units', badge: '82%' },
                { title: 'WO-4820 · Paint line', meta: '450 / 450 units', badge: 'DONE' },
                { title: 'WO-4819 · Packaging', meta: 'On hold · material', badge: 'HOLD' },
              ],
            },
          },
          {
            label: 'Inventory',
            spec: {
              kind: 'detail',
              title: 'Raw material · Steel sheet',
              sub: 'SKU RM-1042 · Warehouse A',
              tags: ['IN STOCK', 'REORDER SOON'],
              rows: [
                { name: 'Available', meta: '2,480 kg', action: 'MOVE' },
                { name: 'Reserved', meta: '1,200 kg' },
                { name: 'Reorder level', meta: '2,000 kg', action: 'EDIT' },
              ],
              cta: 'Raise PO',
              ctaMeta: 'Lead time: 12 days',
            },
          },
        ],
      },
      {
        title: 'Finance Module',
        icon: 'Landmark',
        description: 'Ledgers, invoicing, GST and receivables that reconcile themselves.',
        features: [
          'Multi-entity general ledger',
          'GST-compliant invoicing',
          'Accounts payable and receivable',
          'Bank reconciliation',
          'Cost centre reporting',
        ],
        screens: [
          {
            label: 'Financials',
            spec: {
              kind: 'wallet',
              label: 'Receivables outstanding',
              amount: '₹1.82Cr',
              sub: '84 invoices · ₹42L overdue',
              chartLabel: 'Collections this quarter',
              rows: [
                { k: 'Collected this month', v: '+₹94L' },
                { k: 'Overdue > 90 days', v: '-₹18L', up: false },
              ],
            },
          },
        ],
      },
      {
        title: 'Procurement',
        icon: 'Boxes',
        description: 'Requisitions, vendor quotes and purchase orders with approval chains.',
        features: [
          'Requisition and approval workflow',
          'Vendor comparison and rating',
          'Purchase orders and GRN',
          'Three-way matching',
          'Contract and rate management',
        ],
        screens: [
          {
            label: 'Purchase orders',
            spec: {
              kind: 'dashboard',
              title: 'Procurement',
              sub: 'Open commitments',
              stats: [
                { v: '128', l: 'Open POs' },
                { v: '₹4.2Cr', l: 'Committed' },
                { v: '18', l: 'Pending GRN' },
                { v: '96%', l: 'On-time' },
              ],
              chartLabel: 'PO value per month',
              rows: [
                { k: 'Steel Traders Ltd', v: '₹82L' },
                { k: 'Precision Tools', v: '₹46L' },
              ],
            },
          },
        ],
      },
      adminRole(
        'module, entity, user role and approval chain',
        [
          { v: '6', l: 'Plants' },
          { v: '₹42Cr', l: 'Annual turnover' },
          { v: '1,240', l: 'SKUs' },
          { v: '482', l: 'Users' },
        ],
        [
          { k: 'Plant A · Noida', v: '₹18Cr' },
          { k: 'Plant B · Pune', v: '₹14Cr' },
        ],
      ),
    ],
  },

  {
    key: 'lms',
    label: 'LMS Solution',
    slugs: [
      'e-learning-app',
      'e-learning-website-design',
      'education-application',
      'small-business-website-design',
    ],
    roles: [
      {
        title: 'Learner App',
        icon: 'GraduationCap',
        description: 'Courses, live classes and practice tests that actually get finished.',
        features: [
          'Course catalogue and enrolment',
          'Video lessons with resume',
          'Live classes and recordings',
          'Adaptive practice tests',
          'Certificates and streaks',
        ],
        screens: [
          {
            label: 'Course catalogue',
            spec: {
              kind: 'list',
              searchHint: 'Search courses, subjects…',
              chips: ['Enrolled', 'Popular', 'Free', 'Live'],
              items: [
                { title: 'Full Stack Development', meta: '48 lessons · 62% done', badge: '4.8' },
                { title: 'Data Science Basics', meta: '36 lessons · Not started', badge: '4.7' },
                { title: 'UPSC Prelims 2027', meta: 'Live batch · Mon-Fri', badge: '4.9' },
              ],
            },
          },
          {
            label: 'Lesson & practice',
            spec: {
              kind: 'detail',
              title: 'React Fundamentals',
              sub: 'Module 4 of 9 · 62% complete',
              tags: ['IN PROGRESS', 'CERTIFICATE'],
              rows: [
                { name: 'Lesson 4.1 · Hooks', meta: '18 min video', action: 'PLAY' },
                { name: 'Practice quiz', meta: '10 questions', action: 'START' },
                { name: 'Assignment', meta: 'Due in 3 days', action: 'OPEN' },
              ],
              cta: 'Continue',
              ctaMeta: 'Next: useEffect',
            },
          },
          {
            label: 'Class schedule',
            spec: {
              kind: 'calendar',
              title: 'Live classes',
              month: 'August 2026',
              slots: [
                { time: '18:00', label: 'React Hooks · Live', tone: 'free' },
                { time: '19:30', label: 'Doubt session', tone: 'free' },
                { time: '10:00', label: 'Mock test 4', tone: 'done' },
              ],
            },
          },
        ],
      },
      {
        title: 'Instructor App',
        icon: 'User',
        description: 'Author courses, run live sessions and see who is falling behind.',
        features: [
          'Course and curriculum builder',
          'Live class hosting with polls',
          'Assignment grading queue',
          'At-risk learner alerts',
          'Revenue and payout view',
        ],
        screens: [
          {
            label: 'Teaching dashboard',
            spec: {
              kind: 'dashboard',
              title: 'Instructor',
              sub: '4 active courses',
              stats: [
                { v: '2,480', l: 'Learners' },
                { v: '68%', l: 'Completion' },
                { v: '4.8', l: 'Rating' },
                { v: '₹3.2L', l: 'Earnings' },
              ],
              chartLabel: 'Weekly engagement',
              rows: [
                { k: 'Assignments to grade', v: '42' },
                { k: 'At-risk learners', v: '18' },
              ],
            },
          },
        ],
      },
      {
        title: 'Institute Console',
        icon: 'Building2',
        description: 'Admissions, batches, fees and parent communication in one place.',
        features: [
          'Admissions and enquiry pipeline',
          'Batch and timetable management',
          'Fee collection and reminders',
          'Attendance and report cards',
          'Parent app and notifications',
        ],
        screens: [
          {
            label: 'Institute overview',
            spec: {
              kind: 'dashboard',
              title: 'Institute Console',
              sub: 'Academic year 2026-27',
              stats: [
                { v: '1,840', l: 'Students' },
                { v: '62', l: 'Batches' },
                { v: '₹2.4Cr', l: 'Fees due' },
                { v: '92%', l: 'Attendance' },
              ],
              chartLabel: 'Admissions per month',
              rows: [
                { k: 'Fee collected', v: '₹6.8Cr' },
                { k: 'Pending enquiries', v: '124' },
              ],
            },
          },
        ],
      },
      adminRole(
        'course, batch, learner and payment',
        [
          { v: '48', l: 'Courses' },
          { v: '24.8k', l: 'Learners' },
          { v: '₹1.2Cr', l: 'Revenue' },
          { v: '71%', l: 'Completion' },
        ],
        [
          { k: 'Self-paced courses', v: '₹68L' },
          { k: 'Live batches', v: '₹52L' },
        ],
      ),
    ],
  },

  {
    key: 'pos',
    label: 'POS Software',
    slugs: ['pos-software', 'jewellery-website-design'],
    roles: [
      {
        title: 'Counter App',
        icon: 'CreditCard',
        description: 'Billing that stays fast at peak hour, online or offline.',
        features: [
          'Barcode and quick-key billing',
          'Split payments and part-pay',
          'Offline mode with auto sync',
          'GST invoicing and e-bills',
          'Returns and exchanges',
        ],
        screens: [
          {
            label: 'Billing',
            spec: {
              kind: 'detail',
              title: 'Bill #4821',
              sub: 'Counter 1 · Ravi',
              tags: ['GST INVOICE', '3 ITEMS'],
              rows: [
                { name: 'Basmati Rice 5kg', meta: '1 × ₹640', action: '+' },
                { name: 'Sunflower Oil 1L', meta: '2 × ₹180', action: '+' },
                { name: 'Toor Dal 1kg', meta: '1 × ₹165', action: '+' },
              ],
              cta: 'Collect',
              ctaMeta: 'Total ₹1,165',
            },
          },
          {
            label: 'Day summary',
            spec: {
              kind: 'wallet',
              label: "Today's sales",
              amount: '₹1,48,200',
              sub: '312 bills · Counter 1 & 2',
              chartLabel: 'Sales by hour',
              rows: [
                { k: 'UPI', v: '+₹98,400' },
                { k: 'Cash', v: '+₹49,800' },
              ],
            },
          },
        ],
      },
      {
        title: 'Inventory App',
        icon: 'Boxes',
        description: 'Stock, purchase and expiry tracked against what actually sells.',
        features: [
          'Live stock across counters',
          'Purchase orders and GRN',
          'Batch and expiry tracking',
          'Auto reorder suggestions',
          'Stock audit and variance',
        ],
        screens: [
          {
            label: 'Stock levels',
            spec: {
              kind: 'list',
              searchHint: 'Search SKU, barcode…',
              chips: ['All', 'Low stock', 'Expiring', 'Fast moving'],
              items: [
                { title: 'Basmati Rice 5kg', meta: '42 in stock · reorder at 30', badge: 'OK' },
                { title: 'Sunflower Oil 1L', meta: '8 in stock · reorder now', badge: 'LOW' },
                { title: 'Milk 500ml', meta: 'Expires in 2 days', badge: 'EXP' },
              ],
            },
          },
        ],
      },
      {
        title: 'Store Owner App',
        icon: 'Store',
        description: 'Multi-outlet sales, margins and staff performance from the phone.',
        features: [
          'Multi-outlet consolidated sales',
          'Margin and profitability view',
          'Staff-wise billing performance',
          'Customer loyalty and credit',
          'GST filing-ready reports',
        ],
        screens: [
          {
            label: 'Business overview',
            spec: {
              kind: 'dashboard',
              title: 'Store Owner',
              sub: '3 outlets',
              stats: [
                { v: '₹4.2L', l: 'Today' },
                { v: '18%', l: 'Margin' },
                { v: '842', l: 'Bills' },
                { v: '₹92k', l: 'Credit due' },
              ],
              chartLabel: 'Sales this week',
              rows: [
                { k: 'Sector 62 outlet', v: '₹1.8L' },
                { k: 'Sector 18 outlet', v: '₹1.4L' },
              ],
            },
          },
        ],
      },
      adminRole(
        'outlet, SKU, tax rate and user permission',
        [
          { v: '3', l: 'Outlets' },
          { v: '4,820', l: 'SKUs' },
          { v: '₹1.2Cr', l: 'Monthly sales' },
          { v: '28', l: 'Staff' },
        ],
        [
          { k: 'Grocery category', v: '₹58L' },
          { k: 'Personal care', v: '₹24L' },
        ],
      ),
    ],
  },

  {
    key: 'fleet',
    label: 'Fleet Management Software',
    slugs: [
      'fleet-management-software',
      'logistics-app-development',
      'transportation-logistics',
    ],
    roles: [
      {
        title: 'Driver App',
        icon: 'Truck',
        description: 'Trip sheets, navigation and expense capture built for the road.',
        features: [
          'Assigned trips and route plan',
          'Turn-by-turn navigation',
          'Fuel and toll expense capture',
          'ePOD with photo and signature',
          'Duty hours and rest alerts',
        ],
        screens: [
          {
            label: 'Active trip',
            spec: {
              kind: 'map',
              status: 'ETA 4h 20m · 312 km left',
              agent: 'Trip TR-4821 · Noida to Jaipur',
              agentMeta: 'HR 55 AB 1234 · 18T container',
              steps: [
                ['Loaded at origin', true],
                ['In transit', true],
                ['Checkpoint cleared', false],
                ['Delivered', false],
              ],
            },
          },
          {
            label: 'Trip expenses',
            spec: {
              kind: 'wallet',
              label: 'Trip advance balance',
              amount: '₹4,200',
              sub: 'Advance ₹12,000 · spent ₹7,800',
              chartLabel: 'Expenses this trip',
              rows: [
                { k: 'Diesel · 180L', v: '-₹16,200', up: false },
                { k: 'Toll charges', v: '-₹2,400', up: false },
              ],
            },
          },
        ],
      },
      {
        title: 'Dispatcher Console',
        icon: 'LayoutDashboard',
        description: 'Assign loads, watch the map and react before a delay becomes a penalty.',
        features: [
          'Load and vehicle assignment',
          'Live GPS fleet map',
          'Geofence and route deviation alerts',
          'Delay prediction and re-routing',
          'Customer ETA notifications',
        ],
        screens: [
          {
            label: 'Fleet map',
            spec: {
              kind: 'map',
              status: '42 vehicles on road',
              agent: '3 vehicles delayed',
              agentMeta: 'TR-4821 · 40 min behind schedule',
              steps: [
                ['Dispatch complete', true],
                ['In transit', true],
                ['Delay flagged', true],
                ['Customer notified', false],
              ],
            },
          },
          {
            label: 'Fleet dashboard',
            spec: {
              kind: 'dashboard',
              title: 'Dispatcher',
              sub: 'Live operations',
              stats: [
                { v: '68', l: 'Vehicles' },
                { v: '42', l: 'On road' },
                { v: '94%', l: 'On-time' },
                { v: '3', l: 'Delayed' },
              ],
              chartLabel: 'Trips per day',
              rows: [
                { k: 'North corridor', v: '18 trips' },
                { k: 'West corridor', v: '14 trips' },
              ],
            },
          },
        ],
      },
      {
        title: 'Maintenance App',
        icon: 'Wrench',
        description: 'Service schedules, breakdowns and parts, so uptime stops being luck.',
        features: [
          'Preventive service scheduling',
          'Breakdown reporting with photos',
          'Spare parts inventory',
          'Fitness, permit and insurance expiry',
          'Cost per kilometre tracking',
        ],
        screens: [
          {
            label: 'Service schedule',
            spec: {
              kind: 'list',
              searchHint: 'Search vehicle, job card…',
              chips: ['Due', 'Overdue', 'In service', 'Done'],
              items: [
                { title: 'HR 55 AB 1234', meta: 'Service due in 800 km', badge: 'DUE' },
                { title: 'DL 1C AA 4821', meta: 'Insurance expires 12 Sep', badge: 'EXP' },
                { title: 'UP 16 CD 9012', meta: 'In workshop · brake job', badge: 'WIP' },
              ],
            },
          },
        ],
      },
      adminRole(
        'vehicle, trip, driver and maintenance cost',
        [
          { v: '68', l: 'Vehicles' },
          { v: '2.4L km', l: 'Monthly' },
          { v: '₹12.4', l: 'Cost / km' },
          { v: '94%', l: 'On-time' },
        ],
        [
          { k: 'Fuel spend', v: '₹28L' },
          { k: 'Maintenance', v: '₹6.2L' },
        ],
      ),
    ],
  },

  /* ── AI Solutions ───────────────────────────────────────────────────── */
  {
    key: 'ai-app',
    label: 'AI App',
    slugs: ['ai-app-development', 'ai-software-development'],
    roles: [
      {
        title: 'AI Assistant App',
        icon: 'Sparkles',
        description: 'A conversational surface grounded in your own content, with citations.',
        features: [
          'Natural language chat interface',
          'Answers grounded in your data',
          'Source citations on every reply',
          'Voice input and read-aloud',
          'Conversation history and sharing',
        ],
        screens: [
          {
            label: 'AI chat',
            spec: {
              kind: 'chat',
              title: 'Achivora AI',
              sub: 'Grounded on your workspace',
              messages: [
                { me: true, text: 'What was our refund rate last quarter?' },
                { text: 'Q2 refund rate was 2.4%, down from 3.1% in Q1. [Finance report, p.8]' },
                { me: true, text: 'Which product drove the drop?' },
                { text: 'Mostly the Pro plan — refunds fell 46% after the onboarding change.' },
              ],
              inputHint: 'Ask anything about your data…',
            },
          },
          {
            label: 'Insights feed',
            spec: {
              kind: 'list',
              searchHint: 'Search insights, reports…',
              chips: ['For you', 'Anomalies', 'Saved', 'Shared'],
              items: [
                { title: 'Refund rate down 23%', meta: 'Detected 2 days ago', badge: 'NEW' },
                { title: 'Churn risk: 18 accounts', meta: 'Confidence 86%', badge: 'HIGH' },
                { title: 'Support volume spike', meta: 'Tuesday 14:00–16:00', badge: 'INFO' },
              ],
            },
          },
          {
            label: 'Model usage',
            spec: {
              kind: 'dashboard',
              title: 'AI Usage',
              sub: 'This month',
              stats: [
                { v: '184k', l: 'Queries' },
                { v: '92%', l: 'Grounded' },
                { v: '1.2s', l: 'Avg latency' },
                { v: '₹42k', l: 'Model spend' },
              ],
              chartLabel: 'Queries per day',
              rows: [
                { k: 'Support assistant', v: '98k' },
                { k: 'Internal search', v: '52k' },
              ],
            },
          },
        ],
      },
      {
        title: 'Knowledge Console',
        icon: 'Database',
        description: 'Where your documents become an index the model can actually answer from.',
        features: [
          'Document and source ingestion',
          'Chunking and embedding pipeline',
          'Freshness and re-index scheduling',
          'Access control per source',
          'Coverage and gap reporting',
        ],
        screens: [
          {
            label: 'Sources',
            spec: {
              kind: 'list',
              searchHint: 'Search connected sources…',
              chips: ['All', 'Syncing', 'Stale', 'Errors'],
              items: [
                { title: 'Confluence · Product docs', meta: '4,820 pages · synced 2h ago', badge: 'OK' },
                { title: 'Zendesk · Tickets', meta: '128k tickets · syncing', badge: 'SYNC' },
                { title: 'Google Drive · Finance', meta: 'Last sync 9 days ago', badge: 'STALE' },
              ],
            },
          },
        ],
      },
      {
        title: 'Evaluation Console',
        icon: 'CheckCircle2',
        description: 'Measured accuracy on a real test set before anything reaches a customer.',
        features: [
          'Golden test-set management',
          'Accuracy, groundedness and refusal rates',
          'Regression alerts on model change',
          'Side-by-side prompt comparison',
          'Human review queue',
        ],
        screens: [
          {
            label: 'Eval results',
            spec: {
              kind: 'dashboard',
              title: 'Evaluation',
              sub: 'Release candidate v2.4',
              stats: [
                { v: '94.2%', l: 'Accuracy' },
                { v: '97%', l: 'Grounded' },
                { v: '2.1%', l: 'Hallucination' },
                { v: '480', l: 'Test cases' },
              ],
              chartLabel: 'Accuracy by category',
              rows: [
                { k: 'Billing questions', v: '96%' },
                { k: 'Technical support', v: '91%' },
              ],
            },
          },
        ],
      },
      adminRole(
        'prompt, model, source and cost record',
        [
          { v: '184k', l: 'Queries' },
          { v: '12', l: 'Sources' },
          { v: '₹42k', l: 'Spend' },
          { v: '99.9%', l: 'Uptime' },
        ],
        [
          { k: 'Primary model', v: '86%' },
          { k: 'Fallback model', v: '14%' },
        ],
      ),
    ],
  },

  {
    key: 'ai-integration',
    label: 'AI Integration',
    slugs: ['ai-integration', 'ai-chatbot-development'],
    roles: [
      {
        title: 'Embedded Assistant',
        icon: 'Sparkles',
        description: 'AI that lives inside the tools your team already opens every day.',
        features: [
          'In-product copilot panel',
          'Context passed from the current screen',
          'Suggested next actions',
          'One-click apply with undo',
          'Feedback capture on every answer',
        ],
        screens: [
          {
            label: 'In-app copilot',
            spec: {
              kind: 'chat',
              title: 'Copilot',
              sub: 'Sees this ticket',
              messages: [
                { text: 'This looks like the SSO redirect issue from last week.' },
                { me: true, text: 'Draft a reply for the customer.' },
                { text: 'Drafted — apologises, gives the workaround and links the status page. Apply?' },
              ],
              inputHint: 'Ask the copilot…',
            },
          },
          {
            label: 'Connected systems',
            spec: {
              kind: 'list',
              searchHint: 'Search integrations…',
              chips: ['Active', 'Available', 'Errors'],
              items: [
                { title: 'Salesforce', meta: 'Bi-directional · healthy', badge: 'LIVE' },
                { title: 'Zendesk', meta: 'Read + write · healthy', badge: 'LIVE' },
                { title: 'SAP', meta: 'Read only · auth expiring', badge: 'WARN' },
              ],
            },
          },
        ],
      },
      {
        title: 'Model Router',
        icon: 'Workflow',
        description: 'Chooses the right model per task and falls back cleanly when one is down.',
        features: [
          'Per-task model selection',
          'Cost and latency budgets',
          'Automatic failover',
          'Prompt versioning',
          'Full request tracing',
        ],
        screens: [
          {
            label: 'Routing & cost',
            spec: {
              kind: 'wallet',
              label: 'Model spend this month',
              amount: '₹1,84,200',
              sub: '2.4M requests · avg ₹0.077',
              chartLabel: 'Spend per day',
              rows: [
                { k: 'Large model (complex)', v: '-₹1,24,000', up: false },
                { k: 'Small model (routine)', v: '-₹60,200', up: false },
              ],
            },
          },
        ],
      },
      {
        title: 'ML Pipeline',
        icon: 'Brain',
        description: 'Training, versioning and deployment for the models you own outright.',
        features: [
          'Feature store and data versioning',
          'Training run tracking',
          'Model registry with rollback',
          'Drift and performance monitoring',
          'Shadow and canary deployment',
        ],
        screens: [
          {
            label: 'Model health',
            spec: {
              kind: 'dashboard',
              title: 'ML Pipeline',
              sub: 'Production models',
              stats: [
                { v: '8', l: 'Models live' },
                { v: '0.91', l: 'AUC' },
                { v: '2.4%', l: 'Drift' },
                { v: '48ms', l: 'p95 latency' },
              ],
              chartLabel: 'Prediction volume',
              rows: [
                { k: 'Churn model v4', v: '0.91 AUC' },
                { k: 'Fraud model v7', v: '0.96 AUC' },
              ],
            },
          },
        ],
      },
      adminRole(
        'integration, credential, model and audit log',
        [
          { v: '24', l: 'Integrations' },
          { v: '2.4M', l: 'Requests' },
          { v: '8', l: 'Models' },
          { v: '99.9%', l: 'Uptime' },
        ],
        [
          { k: 'CRM integration', v: '840k' },
          { k: 'Support integration', v: '620k' },
        ],
      ),
    ],
  },

  {
    key: 'ai-automation',
    label: 'AI Automation',
    slugs: ['ai-automation'],
    roles: [
      {
        title: 'Agent Console',
        icon: 'Bot',
        description: 'Autonomous agents that pick up work, do it, and hand back what they did.',
        features: [
          'Goal-based agent definitions',
          'Tool and system permissions',
          'Step-by-step run transcripts',
          'Human approval checkpoints',
          'Automatic retry and escalation',
        ],
        screens: [
          {
            label: 'Agent run',
            spec: {
              kind: 'chat',
              title: 'Invoice Agent',
              sub: 'Run #4821 · in progress',
              messages: [
                { text: 'Fetched 14 unpaid invoices older than 30 days.' },
                { text: 'Drafted reminder emails for 12. Two need manual review (disputed).' },
                { me: true, text: 'Send the 12 and escalate the rest.' },
                { text: 'Sent 12 reminders. Escalated 2 to Priya with context attached.' },
              ],
              inputHint: 'Give the agent an instruction…',
            },
          },
          {
            label: 'Active agents',
            spec: {
              kind: 'list',
              searchHint: 'Search agents…',
              chips: ['Running', 'Scheduled', 'Paused', 'Failed'],
              items: [
                { title: 'Invoice Reminder Agent', meta: 'Runs daily · 14 handled', badge: 'LIVE' },
                { title: 'Lead Enrichment Agent', meta: 'Runs hourly · 82 enriched', badge: 'LIVE' },
                { title: 'Refund Triage Agent', meta: 'Awaiting approval', badge: 'HOLD' },
              ],
            },
          },
          {
            label: 'Automation impact',
            spec: {
              kind: 'dashboard',
              title: 'Automation',
              sub: 'Last 30 days',
              stats: [
                { v: '18.4k', l: 'Tasks done' },
                { v: '1,240h', l: 'Hours saved' },
                { v: '94%', l: 'No-touch rate' },
                { v: '₹18L', l: 'Cost avoided' },
              ],
              chartLabel: 'Tasks automated per day',
              rows: [
                { k: 'Invoice reminders', v: '6,200' },
                { k: 'Lead enrichment', v: '4,800' },
              ],
            },
          },
        ],
      },
      {
        title: 'Workflow Builder',
        icon: 'Workflow',
        description: 'Compose triggers, conditions and actions without writing glue code.',
        features: [
          'Visual trigger and action builder',
          'Branching and conditional logic',
          'Scheduled and event-driven runs',
          'Version history and rollback',
          'Sandbox testing before go-live',
        ],
        screens: [
          {
            label: 'Workflow steps',
            spec: {
              kind: 'detail',
              title: 'Refund Triage',
              sub: 'Trigger: new refund request',
              tags: ['LIVE', '6 STEPS'],
              rows: [
                { name: '1 · Classify reason', meta: 'AI · 96% accuracy', action: 'EDIT' },
                { name: '2 · Check policy', meta: 'Rules engine', action: 'EDIT' },
                { name: '3 · Auto-approve < ₹2k', meta: 'No human needed', action: 'EDIT' },
                { name: '4 · Escalate rest', meta: 'To finance queue', action: 'EDIT' },
              ],
              cta: 'Publish',
              ctaMeta: 'Draft v4',
            },
          },
        ],
      },
      {
        title: 'Oversight & Guardrails',
        icon: 'ShieldCheck',
        description: 'Every autonomous action logged, reviewable and reversible.',
        features: [
          'Approval queues by risk level',
          'Spend and action rate limits',
          'Full audit trail per run',
          'Kill switch per agent',
          'Incident review workflow',
        ],
        screens: [
          {
            label: 'Approval queue',
            spec: {
              kind: 'list',
              searchHint: 'Search pending approvals…',
              chips: ['Pending', 'High risk', 'Approved', 'Rejected'],
              items: [
                { title: 'Refund ₹18,400', meta: 'Above auto-approve limit', badge: 'HIGH' },
                { title: 'Bulk email · 2,400', meta: 'Rate limit checkpoint', badge: 'MED' },
                { title: 'Vendor payment', meta: 'Awaiting finance sign-off', badge: 'HIGH' },
              ],
            },
          },
        ],
      },
      adminRole(
        'agent, run, permission and audit entry',
        [
          { v: '18', l: 'Agents' },
          { v: '18.4k', l: 'Runs' },
          { v: '94%', l: 'No-touch' },
          { v: '0', l: 'Incidents' },
        ],
        [
          { k: 'Finance agents', v: '8.2k runs' },
          { k: 'Sales agents', v: '6.4k runs' },
        ],
      ),
    ],
  },
];

/* ── AI Solutions, continued ────────────────────────────────────────────── */
APP_DOMAINS.push(
  {
    key: 'machine-learning',
    label: 'Machine Learning Platform',
    slugs: ['machine-learning-development'],
    roles: [
      {
        title: 'Data & Features',
        icon: 'Database',
        description: 'Where raw data becomes features a model can actually learn from.',
        features: [
          'Source connectors and ingestion',
          'Labelling and annotation workflow',
          'Feature store with versioning',
          'Train/validation/test splits',
          'Data quality and leakage checks',
        ],
        screens: [
          {
            label: 'Datasets',
            spec: {
              kind: 'list',
              searchHint: 'Search datasets, features…',
              chips: ['All', 'Labelled', 'Drifting', 'Archived'],
              items: [
                { title: 'Transactions 2024-26', meta: '4.2M rows · 38 features', badge: 'READY' },
                { title: 'Customer profiles', meta: '820k rows · 24 features', badge: 'READY' },
                { title: 'Support transcripts', meta: '128k rows · labelling', badge: '62%' },
              ],
            },
          },
          {
            label: 'Feature quality',
            spec: {
              kind: 'dashboard',
              title: 'Feature Store',
              sub: 'Health checks',
              stats: [
                { v: '184', l: 'Features' },
                { v: '2.1%', l: 'Null rate' },
                { v: '0', l: 'Leakage' },
                { v: '4h', l: 'Freshness' },
              ],
              chartLabel: 'Feature drift',
              rows: [
                { k: 'txn_amount_30d', v: 'Stable' },
                { k: 'login_freq_7d', v: 'Drifting' },
              ],
            },
          },
        ],
      },
      {
        title: 'Training Console',
        icon: 'Brain',
        description: 'Experiments you can compare, reproduce and roll back.',
        features: [
          'Experiment tracking with parameters',
          'Hyper-parameter sweeps',
          'Reproducible training runs',
          'Model registry and lineage',
          'Approval gate before promotion',
        ],
        screens: [
          {
            label: 'Training runs',
            spec: {
              kind: 'dashboard',
              title: 'Training',
              sub: 'Churn model · sweep #18',
              stats: [
                { v: '0.91', l: 'AUC' },
                { v: '0.84', l: 'Precision' },
                { v: '48', l: 'Runs' },
                { v: '2h 12m', l: 'Train time' },
              ],
              chartLabel: 'AUC across runs',
              rows: [
                { k: 'Run #48 · best', v: '0.91' },
                { k: 'Run #41 · baseline', v: '0.86' },
              ],
            },
          },
          {
            label: 'Promote model',
            spec: {
              kind: 'detail',
              title: 'Churn model v4',
              sub: 'Candidate for production',
              tags: ['0.91 AUC', 'APPROVED'],
              rows: [
                { name: 'Offline eval', meta: 'Passed · +6% vs v3', action: 'VIEW' },
                { name: 'Bias check', meta: 'Passed across cohorts', action: 'VIEW' },
                { name: 'Shadow run', meta: '7 days · no regressions', action: 'VIEW' },
              ],
              cta: 'Promote',
              ctaMeta: 'Canary 10% first',
            },
          },
        ],
      },
      {
        title: 'Serving & Monitoring',
        icon: 'Cpu',
        description: 'Low-latency inference with drift alarms that fire before customers notice.',
        features: [
          'Real-time and batch inference',
          'Canary and shadow deployment',
          'Drift and performance alarms',
          'Prediction explainability',
          'Automatic rollback on regression',
        ],
        screens: [
          {
            label: 'Live inference',
            spec: {
              kind: 'dashboard',
              title: 'Model Serving',
              sub: 'Production endpoints',
              stats: [
                { v: '8', l: 'Models live' },
                { v: '48ms', l: 'p95 latency' },
                { v: '2.4M', l: 'Predictions' },
                { v: '2.1%', l: 'Drift' },
              ],
              chartLabel: 'Predictions per hour',
              rows: [
                { k: 'Churn model v4', v: 'Healthy' },
                { k: 'Fraud model v7', v: 'Healthy' },
              ],
            },
          },
        ],
      },
      adminRole(
        'dataset, experiment, model version and access grant',
        [
          { v: '184', l: 'Features' },
          { v: '48', l: 'Experiments' },
          { v: '8', l: 'Models live' },
          { v: '99.9%', l: 'Uptime' },
        ],
        [
          { k: 'Compute spend', v: '₹2.8L' },
          { k: 'Storage', v: '4.2 TB' },
        ],
      ),
    ],
  },
  {
    key: 'ai-agent',
    label: 'AI Agent',
    slugs: ['ai-agent-development'],
    roles: [
      {
        title: 'Agent Workspace',
        icon: 'Bot',
        description: 'A single agent given a goal, a toolset and a boundary it must not cross.',
        features: [
          'Goal and success criteria definition',
          'Tool and API permissions',
          'Memory and context window control',
          'Step-by-step reasoning transcript',
          'Stop conditions and budgets',
        ],
        screens: [
          {
            label: 'Agent session',
            spec: {
              kind: 'chat',
              title: 'Research Agent',
              sub: 'Session #218 · 4 tools',
              messages: [
                { me: true, text: 'Find the top 5 competitors and summarise their pricing.' },
                { text: 'Searching the web and your CRM notes…' },
                { text: 'Found 5. Three publish pricing, two are quote-only. Building the table.' },
                { me: true, text: 'Add our position against each.' },
              ],
              inputHint: 'Give the agent a goal…',
            },
          },
          {
            label: 'Tool registry',
            spec: {
              kind: 'list',
              searchHint: 'Search available tools…',
              chips: ['Enabled', 'Read only', 'Restricted'],
              items: [
                { title: 'Web search', meta: 'Read only · no auth', badge: 'ON' },
                { title: 'CRM lookup', meta: 'Read only · scoped', badge: 'ON' },
                { title: 'Send email', meta: 'Write · needs approval', badge: 'GATED' },
              ],
            },
          },
        ],
      },
      {
        title: 'Reasoning Trace',
        icon: 'Workflow',
        description: 'Every step the agent took, why it took it, and what it cost.',
        features: [
          'Full thought and action log',
          'Tool call inputs and outputs',
          'Token and cost per step',
          'Replay from any checkpoint',
          'Export for audit',
        ],
        screens: [
          {
            label: 'Run trace',
            spec: {
              kind: 'detail',
              title: 'Session #218',
              sub: 'Completed in 42s · ₹4.20',
              tags: ['SUCCESS', '11 STEPS'],
              rows: [
                { name: '1 · Plan', meta: 'Decomposed into 4 subtasks', action: 'VIEW' },
                { name: '2 · Web search', meta: '3 calls · 1.8s', action: 'VIEW' },
                { name: '3 · CRM lookup', meta: '1 call · 0.4s', action: 'VIEW' },
                { name: '4 · Synthesise', meta: 'Table with 5 rows', action: 'VIEW' },
              ],
              cta: 'Replay',
              ctaMeta: 'From step 2',
            },
          },
        ],
      },
      {
        title: 'Guardrails',
        icon: 'ShieldCheck',
        description: 'Hard limits the agent cannot talk its way past.',
        features: [
          'Per-tool permission scopes',
          'Spend and action rate caps',
          'Blocked-action policy list',
          'Human approval checkpoints',
          'Instant kill switch',
        ],
        screens: [
          {
            label: 'Policy limits',
            spec: {
              kind: 'dashboard',
              title: 'Guardrails',
              sub: 'Active policies',
              stats: [
                { v: '14', l: 'Policies' },
                { v: '₹500', l: 'Run cap' },
                { v: '3', l: 'Gated tools' },
                { v: '0', l: 'Breaches' },
              ],
              chartLabel: 'Approvals per day',
              rows: [
                { k: 'Auto-approved', v: '94%' },
                { k: 'Escalated to human', v: '6%' },
              ],
            },
          },
        ],
      },
      adminRole(
        'agent, tool grant, run trace and spend record',
        [
          { v: '12', l: 'Agents' },
          { v: '8.4k', l: 'Sessions' },
          { v: '₹68k', l: 'Spend' },
          { v: '0', l: 'Incidents' },
        ],
        [
          { k: 'Research agents', v: '4.2k' },
          { k: 'Ops agents', v: '3.1k' },
        ],
      ),
    ],
  },
  {
    key: 'agentic-ai',
    label: 'Agentic AI System',
    slugs: ['agentic-ai-development'],
    roles: [
      {
        title: 'Orchestrator',
        icon: 'Workflow',
        description: 'Several specialised agents coordinated by a planner that owns the outcome.',
        features: [
          'Task decomposition and planning',
          'Agent-to-agent delegation',
          'Shared memory and state',
          'Parallel and sequential execution',
          'Outcome verification step',
        ],
        screens: [
          {
            label: 'Orchestration',
            spec: {
              kind: 'detail',
              title: 'Quarterly close',
              sub: 'Planner · 5 agents · in progress',
              tags: ['RUNNING', 'STEP 3 OF 5'],
              rows: [
                { name: 'Ledger Agent', meta: 'Reconciled 4,820 entries', action: 'DONE' },
                { name: 'Variance Agent', meta: 'Flagged 12 anomalies', action: 'DONE' },
                { name: 'Narrative Agent', meta: 'Drafting commentary', action: 'LIVE' },
                { name: 'Review Agent', meta: 'Queued', action: 'WAIT' },
              ],
              cta: 'Monitor',
              ctaMeta: 'Est. 8 min left',
            },
          },
          {
            label: 'Agent handoffs',
            spec: {
              kind: 'chat',
              title: 'Planner',
              sub: 'Coordinating 5 agents',
              messages: [
                { text: 'Ledger Agent: reconciliation complete, 12 variances above threshold.' },
                { text: 'Delegating variance analysis to Variance Agent.' },
                { me: true, text: 'Prioritise anything over ₹1L.' },
                { text: 'Understood. 4 variances qualify. Escalating those to review first.' },
              ],
              inputHint: 'Steer the plan…',
            },
          },
        ],
      },
      {
        title: 'Agent Fleet',
        icon: 'Bot',
        description: 'Specialist agents, each narrow and each independently testable.',
        features: [
          'Role-scoped agent definitions',
          'Per-agent tool permissions',
          'Independent evaluation suites',
          'Version pinning per agent',
          'Hot-swap without downtime',
        ],
        screens: [
          {
            label: 'Fleet status',
            spec: {
              kind: 'list',
              searchHint: 'Search agents in the fleet…',
              chips: ['Running', 'Idle', 'Degraded', 'Paused'],
              items: [
                { title: 'Ledger Agent v3', meta: '4,820 tasks · 99.2% success', badge: 'LIVE' },
                { title: 'Variance Agent v2', meta: '640 tasks · 96.8% success', badge: 'LIVE' },
                { title: 'Narrative Agent v1', meta: '128 tasks · under eval', badge: 'BETA' },
              ],
            },
          },
        ],
      },
      {
        title: 'Human Handoff',
        icon: 'Users',
        description: 'When the system is unsure, it stops and asks — with full context attached.',
        features: [
          'Confidence-based escalation',
          'Context bundle for the reviewer',
          'One-click approve, edit or reject',
          'Feedback loops back into evals',
          'SLA tracking on handoffs',
        ],
        screens: [
          {
            label: 'Review queue',
            spec: {
              kind: 'dashboard',
              title: 'Human Handoff',
              sub: 'Awaiting review',
              stats: [
                { v: '8', l: 'In queue' },
                { v: '4 min', l: 'Avg review' },
                { v: '92%', l: 'Approved' },
                { v: '2', l: 'SLA risk' },
              ],
              chartLabel: 'Handoffs per day',
              rows: [
                { k: 'Variance > ₹1L', v: '4 items' },
                { k: 'Low confidence', v: '4 items' },
              ],
            },
          },
        ],
      },
      adminRole(
        'agent, plan, handoff and audit entry',
        [
          { v: '5', l: 'Agents' },
          { v: '1,240', l: 'Plans run' },
          { v: '94%', l: 'Autonomous' },
          { v: '100%', l: 'Audited' },
        ],
        [
          { k: 'Finance workflows', v: '820' },
          { k: 'Ops workflows', v: '420' },
        ],
      ),
    ],
  },
);

/** Generic fallback for app-shaped pages without a bespoke domain. */
export const DEFAULT_DOMAIN: AppDomain = {
  key: 'default',
  label: 'Platform',
  slugs: [],
  roles: [
    {
      title: 'Customer App',
      icon: 'User',
      description: 'The surface your customers use — fast, clear and built around one job.',
      features: [
        'Frictionless signup and onboarding',
        'Search, filter and discovery',
        'Secure checkout and payments',
        'Live status and notifications',
        'History, ratings and support',
      ],
      screens: [
        {
          label: 'Discovery',
          spec: {
            kind: 'list',
            place: 'Sector 62, Noida',
            searchHint: 'Search anything…',
            chips: ['All', 'Popular', 'Nearby', 'Offers'],
            items: [
              { title: 'Featured listing', meta: 'Top rated in your area', badge: '4.8' },
              { title: 'Recommended for you', meta: 'Based on your history', badge: '4.6' },
              { title: 'New this week', meta: 'Recently added', badge: '4.7' },
            ],
          },
        },
        {
          label: 'Checkout',
          spec: {
            kind: 'detail',
            title: 'Confirm your order',
            sub: '3 items · delivery in 25 min',
            tags: ['FREE DELIVERY', 'SAVE ₹80'],
            rows: [
              { name: 'Item total', meta: '₹540' },
              { name: 'Delivery', meta: '₹29' },
              { name: 'Taxes', meta: '₹41' },
            ],
            cta: 'Pay',
            ctaMeta: 'Total ₹610',
          },
        },
        {
          label: 'Order tracking',
          spec: {
            kind: 'map',
            status: 'Arriving in 12 min',
            agent: 'Your order is on the way',
            agentMeta: 'Tracked live end to end',
            steps: [
              ['Confirmed', true],
              ['Processing', true],
              ['Dispatched', true],
              ['Delivered', false],
            ],
          },
        },
      ],
    },
    {
      title: 'Partner App',
      icon: 'Store',
      description: 'Everything your partners need to accept and fulfil business.',
      features: [
        'Instant job and order alerts',
        'Catalogue and availability control',
        'Fulfilment workflow',
        'Settlement and payout view',
        'Performance analytics',
      ],
      screens: [
        {
          label: 'Partner dashboard',
          spec: {
            kind: 'dashboard',
            title: 'Partner',
            sub: 'Today at a glance',
            stats: [
              { v: '12', l: 'Active' },
              { v: '₹8.4k', l: 'Today' },
              { v: '4.7', l: 'Rating' },
              { v: '96%', l: 'Accept rate' },
            ],
            chartLabel: 'Volume this week',
            rows: [
              { k: 'Order #4821 · New', v: '₹640' },
              { k: 'Order #4820 · Active', v: '₹410' },
            ],
          },
        },
        {
          label: 'Payouts',
          spec: {
            kind: 'wallet',
            label: 'Pending payout',
            amount: '₹1,24,800',
            sub: 'Settled weekly',
            chartLabel: 'Revenue this week',
            rows: [
              { k: 'Completed orders', v: '+₹1,48,200' },
              { k: 'Commission', v: '-₹23,400', up: false },
            ],
          },
        },
      ],
    },
    {
      title: 'Field App',
      icon: 'Bike',
      description: 'For staff on the move — one-handed, high contrast, offline tolerant.',
      features: [
        'Job assignment and routing',
        'Turn-by-turn navigation',
        'Proof of completion capture',
        'Earnings and incentives',
        'Shift and availability control',
      ],
      screens: [
        {
          label: 'Active job',
          spec: {
            kind: 'map',
            status: 'Next stop · 8 min',
            agent: 'Job #4821',
            agentMeta: 'B-42, Sector 62 · 2.4 km',
            steps: [
              ['Assigned', true],
              ['Picked up', true],
              ['En route', true],
              ['Completed', false],
            ],
          },
        },
        {
          label: 'Earnings',
          spec: {
            kind: 'wallet',
            label: "Today's earnings",
            amount: '₹1,240',
            sub: '18 jobs · 6h 20m active',
            chartLabel: 'This week',
            rows: [
              { k: 'Job payouts', v: '+₹1,090' },
              { k: 'Incentive bonus', v: '+₹150' },
            ],
          },
        },
      ],
    },
    adminRole(
      'order, partner, user and payout',
      [
        { v: '2,480', l: 'Orders' },
        { v: '₹4.2L', l: 'GMV' },
        { v: '142', l: 'Partners' },
        { v: '96%', l: 'On-time' },
      ],
      [
        { k: 'Top partner', v: '₹42k' },
        { k: 'Second partner', v: '₹36k' },
      ],
    ),
  ],
};

/** Resolve the domain for a catalogue slug, falling back to the generic set. */
export function resolveDomain(slug: string): AppDomain {
  return APP_DOMAINS.find((d) => d.slugs.includes(slug)) ?? DEFAULT_DOMAIN;
}
