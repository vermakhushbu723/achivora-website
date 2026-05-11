import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import WebsiteDevelopmentPage from './pages/WebsiteDevelopmentPage';
import AppDevelopmentPage from './pages/AppDevelopmentPage';
import SoftwareSolutionsPage from './pages/SoftwareSolutionsPage';
import FAQPage from './pages/FAQPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';

// Layout component with Header and Footer
function Layout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

// Define routes
const rootRoute = createRootRoute({
  component: Layout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const websiteDevelopmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/website-development',
  component: WebsiteDevelopmentPage,
});

const appDevelopmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/app-development',
  component: AppDevelopmentPage,
});

const softwareSolutionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/software-solutions',
  component: SoftwareSolutionsPage,
});

const faqRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/faq',
  component: FAQPage,
});

const privacyPolicyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy-policy',
  component: PrivacyPolicyPage,
});

const termsConditionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/terms-conditions',
  component: TermsConditionsPage,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  servicesRoute,
  contactRoute,
  websiteDevelopmentRoute,
  appDevelopmentRoute,
  softwareSolutionsRoute,
  faqRoute,
  privacyPolicyRoute,
  termsConditionsRoute,
]);

// Create router
const router = createRouter({ routeTree });

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
