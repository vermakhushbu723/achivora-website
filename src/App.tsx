import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
  lazyRouteComponent,
  Outlet,
} from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

import NotFoundPage from './pages/NotFoundPage';

// Legacy standalone service pages, kept so existing links do not break.

function Layout() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster />
    </div>
  );
}

const rootRoute = createRootRoute({
  component: Layout,
  notFoundComponent: NotFoundPage,
});

/* Routes are declared individually rather than through a helper: TanStack
   Router infers the typed route table from these literal path strings. */

const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: lazyRouteComponent(() => import('./pages/AboutPage')) });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: ContactPage });
const faqRoute = createRoute({ getParentRoute: () => rootRoute, path: '/faq', component: lazyRouteComponent(() => import('./pages/FAQPage')) });
const privacyRoute = createRoute({ getParentRoute: () => rootRoute, path: '/privacy-policy', component: lazyRouteComponent(() => import('./pages/PrivacyPolicyPage')) });
const termsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/terms-conditions', component: lazyRouteComponent(() => import('./pages/TermsConditionsPage')) });
const portfolioRoute = createRoute({ getParentRoute: () => rootRoute, path: '/portfolio', component: lazyRouteComponent(() => import('./pages/PortfolioPage')) });
const careerRoute = createRoute({ getParentRoute: () => rootRoute, path: '/career', component: lazyRouteComponent(() => import('./pages/CareerPage')) });
const sitemapRoute = createRoute({ getParentRoute: () => rootRoute, path: '/sitemap', component: lazyRouteComponent(() => import('./pages/SitemapPage')) });

// Catalogue indexes and their dynamic detail routes
const servicesRoute = createRoute({ getParentRoute: () => rootRoute, path: '/services', component: lazyRouteComponent(() => import('./pages/ServicesPage')) });
const serviceDetailRoute = createRoute({ getParentRoute: () => rootRoute, path: '/services/$slug', component: lazyRouteComponent(() => import('./pages/ServiceDetailPage')) });
const solutionsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/solutions', component: lazyRouteComponent(() => import('./pages/SolutionsPage')) });
const solutionDetailRoute = createRoute({ getParentRoute: () => rootRoute, path: '/solutions/$slug', component: lazyRouteComponent(() => import('./pages/SolutionDetailPage')) });
const industriesRoute = createRoute({ getParentRoute: () => rootRoute, path: '/industries', component: lazyRouteComponent(() => import('./pages/IndustriesPage')) });
const industryDetailRoute = createRoute({ getParentRoute: () => rootRoute, path: '/industries/$slug', component: lazyRouteComponent(() => import('./pages/IndustryDetailPage')) });
const locationsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/locations', component: lazyRouteComponent(() => import('./pages/LocationsPage')) });
const cityDetailRoute = createRoute({ getParentRoute: () => rootRoute, path: '/locations/$slug', component: lazyRouteComponent(() => import('./pages/CityDetailPage')) });
const insightsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/insights', component: lazyRouteComponent(() => import('./pages/InsightsPage')) });
const blogPostRoute = createRoute({ getParentRoute: () => rootRoute, path: '/insights/$slug', component: lazyRouteComponent(() => import('./pages/BlogPostPage')) });

// Legacy paths
const websiteDevelopmentRoute = createRoute({ getParentRoute: () => rootRoute, path: '/website-development', component: lazyRouteComponent(() => import('./pages/WebsiteDevelopmentPage')) });
const appDevelopmentRoute = createRoute({ getParentRoute: () => rootRoute, path: '/app-development', component: lazyRouteComponent(() => import('./pages/AppDevelopmentPage')) });
const softwareSolutionsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/software-solutions', component: lazyRouteComponent(() => import('./pages/SoftwareSolutionsPage')) });

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  contactRoute,
  faqRoute,
  privacyRoute,
  termsRoute,
  portfolioRoute,
  careerRoute,
  sitemapRoute,
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
  websiteDevelopmentRoute,
  appDevelopmentRoute,
  softwareSolutionsRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} forcedTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
