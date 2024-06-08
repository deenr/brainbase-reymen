import emailjs from '@emailjs/browser';
import { NavigationHeader } from './components/NavigationHeader';
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Services } from './pages/Services';
import { Footer } from '@/components/Landing/Footer';
import { useEffect, useState } from 'react';
import { Portfolio } from './pages/Portfolio';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { Toaster } from '@/components/ui/sonner';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';

const AppLayout = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <NavigationHeader navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <Outlet />
      <Footer />
      <Toaster />
      <ScrollToTop />
    </>
  );
};

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Landing />,
        errorElement: <Landing />
      },
      {
        path: '/diensten',
        element: <Services />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/over-ons',
        element: <AboutUs />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/privacy',
        element: <Privacy />
      },
      {
        path: '/terms',
        element: <Terms />
      },
      {
        path: '*',
        element: <Landing />,
        errorElement: <Landing />
      }
    ]
  }
]);

export function App() {
  emailjs.init({
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    blockHeadless: true,
    limitRate: {
      id: 'app',
      throttle: 10000
    }
  });
  return <RouterProvider router={router} />;
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
