export function ProjectPreview(props: {
  imageUrl: string;
  name: string;
  completed: string;
  location: string;
}) {
  return (
    <picture
      className="relative h-full flex flex-row justify-between flex-1 bg-cover bg-center p-6 cursor-pointer"
      style={{
        backgroundImage: `url(${props.imageUrl})`,
      }}
    >
      <div className="absolute z-0 opacity-80 inset-0 bg-gradient-to-b from-transparent to-gray-950"></div>
      <div className="relative z-10 flex flex-col justify-end">
        <h4 className="text-xl text-gray-100">"Opera center"</h4>
        <p className="text-md text-gray-100 font-light opacity-90">
          {props.completed}
        </p>
      </div>
      <div className="relative z-10 flex flex-col justify-between items-end">
        <button className="bg-primary-500 w-fit text-white font-bold py-3 px-3 rounded-full flex items-center text-md font-semibold	 ">
          <svg
            className="w-[20px] h-[20px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7.05033 16.9497L16.9498 7.05025M16.9498 7.05025H7.05033M16.9498 7.05025V16.9497"
            />
          </svg>
        </button>
        <p className="text-md text-gray-200 font-light opacity-90">
          {props.location}
        </p>
      </div>
    </picture>
  );
}
