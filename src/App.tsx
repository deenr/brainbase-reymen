import { useState } from 'react';
import Hero from './components/Landing/Hero';
import Projects from './components/Landing/Projects';
import Services from './components/Landing/Services';
import { NavigationHeader } from './components/NavigationHeader';
import './index.css';

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
    </div>
  );
}

export default App;
