import {  NavLink } from 'react-router-dom';

export function NavigationSidebar(
  props: Readonly<{
    className: string;
    closeSidebar: React.Dispatch<React.SetStateAction<void>>;
  }>,
) {
  return (
    <nav
      className={`flex flex-row gap-12 p-6 justify-between rounded-xl shadow-lg ${props.className}`}
    >
      <div className="flex flex-col gap-6">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-lg font-semibold uppercase text-gray-600'
              : 'text-lg font-semibold uppercase text-gray-400'
          }
          to={'/'}
          onClick={() => props.closeSidebar()}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-lg font-semibold uppercase text-gray-600'
              : 'text-lg font-semibold uppercase text-gray-400'
          }
          to={'diensten'}
          onClick={() => props.closeSidebar()}
        >
          Diensten
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-lg font-semibold uppercase text-gray-600'
              : 'text-lg font-semibold uppercase text-gray-400'
          }
          to={'portfolio'}
          onClick={() => props.closeSidebar()}
        >
          Portfolio
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? 'text-lg font-semibold uppercase text-gray-600'
              : 'text-lg font-semibold uppercase text-gray-400'
          }
          to={'over-ons'}
          onClick={() => props.closeSidebar()}
        >
          Over ons
        </NavLink>
      </div>
      <svg
        className="w-[24px] h-[24px] mt-[2px] text-gray-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        onClick={() => props.closeSidebar()}
      >
        <path
          d="M17 7L7 17M7 7L17 17"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </nav>
  );
}
