export function Hamburger(props: { open: boolean; className: string }) {
  return (
    <button
      className={`flex flex-col justify-center items-center ${props.className}`}
    >
      <span
        className={`bg-gray-900 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm ${
                  props.open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}
      ></span>
      <span
        className={`bg-gray-900 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm my-0.5 ${
                  props.open ? 'opacity-0' : 'opacity-100'
                }`}
      ></span>
      <span
        className={`bg-gray-900 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm ${
                  props.open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}
      ></span>{' '}
    </button>
  );
}
