import { useState } from 'react';
import { ProjectPreview } from './ProjectPreview';

export function Projects() {
  const [projects, setProjects] = useState([
    {
      imageUrl:
        'https://static.dezeen.com/uploads/2017/03/tbilisi-music-theatre-concert-hall-fuksas-architecture-tbilisi-georgia_dezeen_hero-c-1704x959.jpg',
      name: 'Opera center',
      completed: 'Completed on August 2020',
      location: 'Old Tbilisi',
    },
    {
      imageUrl:
        'https://cf.bstatic.com/xdata/images/hotel/max1280x900/465241642.jpg?k=80297ca67a17ca3bef3a085c228155ab76d60f55e281241415bfd3171ebe42f2&o=&hp=1',
      name: 'Axis towers',
      completed: 'Completed on June 2022',
      location: 'Saburtalo',
    },
    {
      imageUrl:
        'https://bm.ge/uploads/files/2022/02/17/188926/620e14ee347b7_w_h.jpeg',
      name: 'MLN Hotel-Conference Center',
      completed: 'Completed on August 2023',
      location: 'Sololaki',
    },
  ]);

  return (
    <section className="relative flex flex-col gap-8 md:gap-12 py-16 md:py-24 bg-primair-500 px-4 md:px-12 lg:px-28">
      <div className="flex flex-col gap-4 md:gap-16 md:flex-row">
        <h3 className="md:w-[55%] text-2xl font-semibold text-gray-100 md:text-3xl">
          Bouwen aan de mijlpalen van morgen met deskundige precisie
        </h3>
        <p className="md:w-[45%] text-md text-gray-100 font-light opacity-90 mt-1">
          Het soort bouw projecten waarin wij specialiseren, omvatten
          particulieren en kleine bouwpromotoren.
        </p>
      </div>
      <div className="flex flex-row justify-between items-center gap-4">
        <p className="text-md text-gray-100 text-nowrap">Onze projecten</p>
        <div className="w-full h-[1px] bg-white opacity-20"></div>
        <div className="flex flex-row gap-4">
          <button
            className="border-[1px] border-white hover:bg-white text-white hover:text-black font-bold py-3 px-5 rounded-full flex items-center text-md font-semibold"
            onClick={() =>
              setProjects((prevProjects) => {
                if (prevProjects.length > 0) {
                  const lastElement = prevProjects.pop();
                  if (lastElement) {
                    prevProjects.unshift(lastElement);
                  }
                }
                return [...prevProjects];
              })
            }
          >
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
                d="M19 12L5 12M5 12L12 19M5 12L12 5"
              />
            </svg>
          </button>
          <button
            className="border-[1px] border-white hover:bg-white text-white hover:text-black font-bold py-3 px-5 rounded-full flex items-center text-md font-semibold"
            onClick={() =>
              setProjects((prevProjects) => {
                if (prevProjects.length > 0) {
                  const firstElement = prevProjects.shift();
                  if (firstElement) {
                    prevProjects.push(firstElement);
                  }
                }
                return [...prevProjects];
              })
            }
          >
            <span className="hidden md:block">Volgende</span>
            <svg
              className="w-[20px] h-[20px] md:ml-2"
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
        </div>
      </div>
      <div className="relative z-10 flex flex-row gap-8 h-96">
        <div className="w-full h-full">
          <ProjectPreview key={1} {...projects[0]}></ProjectPreview>
        </div>
        <div className="w-full h-full hidden md:flex">
          <ProjectPreview key={2} {...projects[1]}></ProjectPreview>
        </div>
        <div className="w-full h-full hidden xl:flex">
          <ProjectPreview key={3} {...projects[2]}></ProjectPreview>
        </div>
      </div>
      <div className="absolute z-0 left-0 bottom-0 right bg-white w-full h-64"></div>
    </section>
  );
}
