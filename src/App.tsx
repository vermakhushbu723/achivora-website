import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  lazyRouteComponent,
  Outlet,
  redirect,
} from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

import NotFoundPage from './pages/NotFoundPage';
import { REDIRECTS } from './data/redirects';

/** Public marketing shell: header, footer and the floating contact rail. */
function SiteLayout() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

/* The admin panel is a different product on the same origin, so it hangs
   off the root directly and never renders the marketing chrome. */
const rootRoute = createRootRoute({
  // Merged and retired URLs forward to the page that replaced them.
  beforeLoad: ({ location }) => {
    const target = REDIRECTS[location.pathname.replace(/\/$/, '') || '/'];
    if (target) throw redirect({ to: target, replace: true });
  },
  component: () => (
    <>
      <Outlet />
      <Toaster />
    </>
  ),
  notFoundComponent: NotFoundPage,
});

/** Pathless layout route: gives every marketing page the site chrome. */
const siteRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'site',
  component: SiteLayout,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: lazyRouteComponent(() => import('./admin/AdminLayout')),
});

const adminIndexRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/',
  component: lazyRouteComponent(() => import('./admin/pages/Dashboard')),
});

const adminSubmissionsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/submissions',
  component: lazyRouteComponent(() => import('./admin/pages/Submissions')),
});

const adminEnquiriesRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/enquiries',
  component: lazyRouteComponent(() => import('./admin/pages/Enquiries')),
});

const adminContactsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/contacts',
  component: lazyRouteComponent(() => import('./admin/pages/Contacts')),
});

const adminApplicationsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/applications',
  component: lazyRouteComponent(() => import('./admin/pages/Applications')),
});

const adminSettingsRoute = createRoute({
  getParentRoute: () => adminRoute,
  path: '/settings',
  component: lazyRouteComponent(() => import('./admin/pages/Settings')),
});

/* Routes are declared individually rather than through a helper: TanStack
   Router infers the typed route table from these literal path strings. */

const homeRoute = createRoute({ getParentRoute: () => siteRoute, path: '/', component: HomePage });
const aboutRoute = createRoute({ getParentRoute: () => siteRoute, path: '/about', component: lazyRouteComponent(() => import('./pages/AboutPage')) });
const contactRoute = createRoute({ getParentRoute: () => siteRoute, path: '/contact', component: ContactPage });
const faqRoute = createRoute({ getParentRoute: () => siteRoute, path: '/faq', component: lazyRouteComponent(() => import('./pages/FAQPage')) });
const privacyRoute = createRoute({ getParentRoute: () => siteRoute, path: '/privacy-policy', component: lazyRouteComponent(() => import('./pages/PrivacyPolicyPage')) });
const termsRoute = createRoute({ getParentRoute: () => siteRoute, path: '/terms-conditions', component: lazyRouteComponent(() => import('./pages/TermsConditionsPage')) });
const portfolioRoute = createRoute({ getParentRoute: () => siteRoute, path: '/portfolio', component: lazyRouteComponent(() => import('./pages/PortfolioPage')) });
const careerRoute = createRoute({ getParentRoute: () => siteRoute, path: '/career', component: lazyRouteComponent(() => import('./pages/CareerPage')) });

// Catalogue indexes and detail pages share one component
const catalogPage = lazyRouteComponent(() => import('./pages/CatalogPage'));
const servicesRoute = createRoute({ getParentRoute: () => siteRoute, path: '/services', component: catalogPage });
const serviceDetailRoute = createRoute({ getParentRoute: () => siteRoute, path: '/services/$slug', component: catalogPage });
const solutionsRoute = createRoute({ getParentRoute: () => siteRoute, path: '/solutions', component: catalogPage });
const solutionDetailRoute = createRoute({ getParentRoute: () => siteRoute, path: '/solutions/$slug', component: catalogPage });
const industriesRoute = createRoute({ getParentRoute: () => siteRoute, path: '/industries', component: catalogPage });
const industryDetailRoute = createRoute({ getParentRoute: () => siteRoute, path: '/industries/$slug', component: catalogPage });
const locationsRoute = createRoute({ getParentRoute: () => siteRoute, path: '/locations', component: lazyRouteComponent(() => import('./pages/LocationsPage')) });
const cityDetailRoute = createRoute({ getParentRoute: () => siteRoute, path: '/locations/$slug', component: lazyRouteComponent(() => import('./pages/CityDetailPage')) });
const insightsRoute = createRoute({ getParentRoute: () => siteRoute, path: '/insights', component: lazyRouteComponent(() => import('./pages/InsightsPage')) });
const blogPostRoute = createRoute({ getParentRoute: () => siteRoute, path: '/insights/$slug', component: lazyRouteComponent(() => import('./pages/BlogPostPage')) });

const routeTree = rootRoute.addChildren([
  siteRoute.addChildren([
  homeRoute,
  aboutRoute,
  contactRoute,
  faqRoute,
  privacyRoute,
  termsRoute,
  portfolioRoute,
  careerRoute,
  servicesRoute,
  serviceDetailRoute,
  solutionsRoute,
  solutionDetailRoute,
  industriesRoute,
  industryDetailRoute,
  locationsRoute,
  cityDetailRoute,
  insightsRoute,
  blogPostRoute,
  ]),
  adminRoute.addChildren([
    adminIndexRoute,
    adminSubmissionsRoute,
    adminEnquiriesRoute,
    adminContactsRoute,
    adminApplicationsRoute,
    adminSettingsRoute,
  ]),
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
