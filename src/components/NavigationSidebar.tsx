import { Link } from 'react-router-dom';

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
        <Link
          className="text-lg font-medium text-gray-900"
          to={'/'}
          onClick={() => props.closeSidebar()}
        >
          Home
        </Link>
        <Link
          className="text-lg font-medium text-gray-900"
          to={'diensten'}
          onClick={() => props.closeSidebar()}
        >
          Diensten
        </Link>
        <Link
          className="text-lg font-medium text-gray-900"
          to={'portfolio'}
          onClick={() => props.closeSidebar()}
        >
          Portfolio
        </Link>
        <Link
          className="text-lg font-medium text-gray-900"
          to={'over-ons'}
          onClick={() => props.closeSidebar()}
        >
          Over ons
        </Link>
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
