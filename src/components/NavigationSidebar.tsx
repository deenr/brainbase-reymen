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
      <ul className="flex flex-col gap-6">
        <li className="text-lg font-medium text-gray-900">Home</li>
        <li className="text-lg font-medium text-gray-900">Over ons</li>
        <li className="text-lg font-medium text-gray-900">Projecten</li>
        <li className="text-lg font-medium text-gray-900">Services</li>
      </ul>
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
