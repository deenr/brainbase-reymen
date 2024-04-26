export function Hamburger(
  props: Readonly<{ open: boolean; className: string }>,
) {
  return (
    <button
      className={`flex flex-col justify-center items-center ${props.className}`}
    >
      <span
        className={`bg-gray-900 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm -translate-y-0.5`}
      ></span>
      <span
        className={`bg-gray-900 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm my-0.5 opacity-100`}
      ></span>
      <span
        className={`bg-gray-900 block transition-all duration-300 ease-out 
                h-0.5 w-6 rounded-sm translate-y-0.5`}
      ></span>{' '}
    </button>
  );
}
