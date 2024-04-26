import logo from '../assets/logo.svg';
import { Hamburger } from './Hamburger';

export function NavigationHeader() {
  return (
    <header className="flex flex-row justify-between items-center py-5 px-4 md:px-12 lg:px-28 md:border-b-[1px] border-gray-100 ">
      <img src={logo} alt="Brainbase logo" className="w-32"></img>
      <nav className="hidden md:block">
        <ul className="flex flex-row gap-8">
          <li className="text-md text-semibold text-gray-400">Home</li>
          <li className="text-md text-semibold text-gray-400">Over ons</li>
          <li className="text-md text-semibold text-gray-400">Projecten</li>
          <li className="text-md text-semibold text-gray-400">Services</li>
        </ul>
      </nav>
      <button className="hidden md:flex bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-5 rounded-full items-center text-md text-semibold">
        Contacteer ons
        <svg
          className="w-[20px] h-[20px] ml-2 hidden lg:block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M12 5l7 7-7 7"
          ></path>
        </svg>
      </button>
      <Hamburger className="md:hidden" open={false}></Hamburger>
    </header>
  );
}
