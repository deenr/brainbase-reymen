import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { NavigationSidebar } from './NavigationSidebar';

export function NavigationHeader(
  props: Readonly<{
    navbarOpen: boolean;
    setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }>,
) {
  return (
    <>
      <header className="flex flex-row gap-4 md:justify-between items-center py-5 px-4 md:px-12 lg:px-28 border-b-[1px] border-gray-100 ">
        <Link className="mr-auto md:mr-0" to={'/'}>
          <img className="w-32" src={logo} alt="Brainbase logo"></img>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex flex-row gap-8">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-md font-medium text-gray-600'
                  : 'text-md font-medium text-gray-400'
              }
              to={'/'}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-md font-medium text-gray-600'
                  : 'text-md font-medium text-gray-400'
              }
              to={'diensten'}
            >
              Diensten
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-md font-medium text-gray-600'
                  : 'text-md font-medium text-gray-400'
              }
              to={'portfolio'}
            >
              Portfolio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'text-md font-medium text-gray-600'
                  : 'text-md font-medium text-gray-400'
              }
              to={'over-ons'}
            >
              Over ons
            </NavLink>
          </ul>
        </nav>
        <button className="flex bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-3 md:py-3 md:px-5 rounded-full items-center text-sm md:text-md font-semibold">
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
        <button
          className={'flex flex-col justify-center items-center md:hidden'}
          onClick={() => props.setNavbarOpen(true)}
        >
          <span
            className={
              'bg-gray-900 block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm -translate-y-0.5'
            }
          ></span>
          <span
            className={
              'bg-gray-900 block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm my-0.5 opacity-100'
            }
          ></span>
          <span
            className={
              'bg-gray-900 block transition-all duration-300 ease-out  h-0.5 w-6 rounded-sm translate-y-0.5'
            }
          ></span>
        </button>
      </header>
      {props.navbarOpen && (
        <div
          className="absolute inset-0 backdrop-blur-sm bg-gray-500 bg-opacity-60"
          onClick={() => props.setNavbarOpen(false)}
        ></div>
      )}
      {props.navbarOpen && (
        <NavigationSidebar
          className="absolute top-4 right-4 bg-white"
          closeSidebar={() => props.setNavbarOpen(false)}
        ></NavigationSidebar>
      )}
    </>
  );
}
