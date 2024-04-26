import { Component } from 'react';

export default class Projects extends Component {
  render() {
    return (
      <section className="relative flex flex-col gap-8 md:gap-12 py-16 px-4 bg-primary-500 md:py-24 md:px-28">
        <div className="flex flex-col gap-4 md:gap-16 md:flex-row">
          <h3 className="md:w-[55%] text-2xl font-semibold text-gray-100 md:text-3xl">
            Building tomorrow's landmarks with expert precision
          </h3>
          <p className="md:w-[45%] text-md text-gray-100 font-light opacity-90 mt-1">
            The typos of construction projects cur company spocializes include
            residential, commercial, industrial, and renovation projects.
          </p>
        </div>
        <div className="flex flex-row justify-between items-center gap-4">
          <p className="text-md text-gray-100 text-nowrap">Onze projecten</p>
          <div className="w-full h-[1px] bg-white opacity-20"></div>
          <div className="flex flex-row gap-4">
            <button className="border-[1px] border-white hover:bg-white text-white hover:text-black font-bold py-3 px-5 rounded-full flex items-center text-md text-semibold">
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
            <button className="border-[1px] border-white hover:bg-white text-white hover:text-black font-bold py-3 px-5 rounded-full flex items-center text-md text-semibold">
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
          <picture
            className="relative flex flex-row justify-between flex-1 bg-cover bg-center p-6 cursor-pointer"
            style={{
              backgroundImage:
                'url(\'https://static.dezeen.com/uploads/2017/03/tbilisi-music-theatre-concert-hall-fuksas-architecture-tbilisi-georgia_dezeen_hero-c-1704x959.jpg\')',
            }}
          >
            <div className="absolute z-0 opacity-80 inset-0 bg-gradient-to-b from-transparent to-gray-950"></div>
            <div className="relative z-10 flex flex-col justify-end">
              <h4 className="text-xl text-gray-100">"Opera center"</h4>
              <p className="text-md text-gray-100 font-light opacity-90">
                Completed on August 2020
              </p>
            </div>
            <div className="relative z-10 flex flex-col justify-between items-end">
              <button className="bg-primary-500 w-fit text-white font-bold py-3 px-3 rounded-full flex items-center text-md text-semibold ">
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
                Old Tbilisi
              </p>
            </div>
          </picture>
          <picture
            className="hidden md:flex relative flex-row justify-between flex-1 bg-cover bg-center p-6 cursor-pointer"
            style={{
              backgroundImage:
                'url(\'https://cf.bstatic.com/xdata/images/hotel/max1280x900/465241642.jpg?k=80297ca67a17ca3bef3a085c228155ab76d60f55e281241415bfd3171ebe42f2&o=&hp=1\')',
            }}
          >
            <div className="absolute z-0 opacity-80 inset-0 bg-gradient-to-b from-transparent to-gray-950 "></div>
            <div className="relative z-10 flex flex-col justify-end">
              <h4 className="text-xl text-gray-100">"Axis towers"</h4>
              <p className="text-md text-gray-100 font-light opacity-90">
                Completed on June 2022
              </p>
            </div>
            <div className="relative z-10 flex flex-col justify-between items-end">
              <button className="bg-primary-500 w-fit text-white font-bold py-3 px-3 rounded-full flex items-center text-md text-semibold">
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
              <p className="text-md text-gray-100 font-light opacity-90">
                Saburtalo
              </p>
            </div>
          </picture>
        </div>
        <div className="absolute z-0 left-0 bottom-0 right bg-white w-full h-64"></div>
      </section>
    );
  }
}
