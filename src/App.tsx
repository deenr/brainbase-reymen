import { NavigationHeader } from './components/NavigationHeader';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Services } from './pages/Services';
import { Footer } from './components/Landing/Footer';
import { useState } from 'react';
import { Portfolio } from './pages/Portfolio';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';

const AppLayout = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <NavigationHeader navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <Outlet />
      <Footer />
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
        path: '*',
        element: <Landing />,
        errorElement: <Landing />
      }
    ]
  }
]);

export function App() {
  return <RouterProvider router={router} />;
}
