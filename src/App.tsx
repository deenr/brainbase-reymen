import { useState } from 'react';
import Hero from './components/Landing/Hero';
import Projects from './components/Landing/Projects';
import Services from './components/Landing/Services';
import { NavigationHeader } from './components/NavigationHeader';
import './index.css';
import { Footer } from './components/Landing/Footer';

function App() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);

  return (
    <div
      className={navbarOpen ? 'max-h-screen overflow-hidden' : 'overflow-auto'}
    >
      <NavigationHeader
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
      ></NavigationHeader>
      <Hero></Hero>
      <Services></Services>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
}

export default App;
