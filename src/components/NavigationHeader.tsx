import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { NavigationSidebar } from './NavigationSidebar';

export function NavigationHeader(
  props: Readonly<{
    navbarOpen: boolean;
    setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }>
) {
  return (
    <>
      <header className="flex flex-row gap-4 md:justify-between items-center py-5 px-4 md:px-12 lg:px-28 border-b-[1px] border-gray-100 ">
        <Link className="mr-auto md:mr-0" to={'/'}>
          <img className="min-w-32 w-32" src={logo} alt="Brainbase logo"></img>
        </Link>
        <nav className="hidden md:block">
          <div className="flex flex-row gap-8">
            <NavLink className={({ isActive }) => (isActive ? 'text-base font-semibold text-nowrap uppercase text-gray-600' : 'text-base font-semibold text-nowrap uppercase text-gray-400')} to={'/'}>
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-base font-semibold text-nowrap uppercase text-gray-600' : 'text-base font-semibold text-nowrap uppercase text-gray-400')}
              to={'diensten'}
            >
              Diensten
            </NavLink>
            {/* <NavLink
              className={({ isActive }) => (isActive ? 'text-base font-semibold text-nowrap uppercase text-gray-600' : 'text-base font-semibold text-nowrap uppercase text-gray-400')}
              to={'portfolio'}
            >
              Portfolio
            </NavLink> */}
            <NavLink
              className={({ isActive }) => (isActive ? 'text-base font-semibold text-nowrap uppercase text-gray-600' : 'text-base font-semibold text-nowrap uppercase text-gray-400')}
              to={'over-ons'}
            >
              Over ons
            </NavLink>
          </div>
        </nav>
        <Link to={'/contact'}>
          <button
            aria-label="contacteer ons"
            className="flex bg-primair-500 hover:bg-primair-600 text-white font-bold py-2 px-3 lg:py-3 lg:px-5 rounded-full items-center text-sm md:text-base text-nowrap	font-semibold uppercase"
          >
            Contacteer ons
            <svg className="w-[20px] h-[20px] ml-2 hidden lg:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </Link>
        <button aria-label="open navigatie balk" className={'flex flex-col justify-center items-center md:hidden'} onClick={() => props.setNavbarOpen(true)}>
          <span className={'bg-gray-900 block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm -translate-y-0.5'}></span>
          <span className={'bg-gray-900 block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm my-0.5 opacity-100'}></span>
          <span className={'bg-gray-900 block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm translate-y-0.5'}></span>
        </button>
      </header>
      {props.navbarOpen && <div className="absolute z-40 inset-0 backdrop-blur-sm bg-gray-500 bg-opacity-60" onClick={() => props.setNavbarOpen(false)}></div>}
      {props.navbarOpen && <NavigationSidebar className="absolute top-4 right-4 bg-white" closeSidebar={() => props.setNavbarOpen(false)}></NavigationSidebar>}
    </>
  );
}
