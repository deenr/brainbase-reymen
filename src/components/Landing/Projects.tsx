import { useState } from 'react';
import portfolio from '../../assets/portfolio.json'
import { Project } from '@/models/portfolio';
import { ProjectPreviewMobile } from '../ProjectPreviewMobile';
import { ProjectPreviewDesktop } from '../ProjectPreviewDesktop';
import { useBreakpoint } from '@/lib/breakpoints';

export function Projects() {
  const { isLg } = useBreakpoint('lg')
  const [projects, setProjects] = useState((portfolio as Project[]).splice(0, 5));

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
            aria-label="toon vorig project"
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
            aria-label="toon volgend project"
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
            <span className="hidden md:block uppercase">Volgende</span>
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
          {
            isLg
            ?<ProjectPreviewDesktop key={1} {...projects[0]} image={`assets/portfolio/${projects[0].id}/RENDER.webp`} />
            : <ProjectPreviewMobile key={1} {...projects[0]} image={`assets/portfolio/${projects[0].id}/RENDER.webp`} />
          }
        </div>
        <div className="w-full h-full hidden md:flex">
          {
            isLg
            ?<ProjectPreviewDesktop key={2} {...projects[1]} image={`assets/portfolio/${projects[1].id}/RENDER.webp`} />
            : <ProjectPreviewMobile key={2} {...projects[1]} image={`assets/portfolio/${projects[1].id}/RENDER.webp`} />
          }
        </div>
        <div className="w-full h-full hidden xl:flex">
          {
            isLg
            ?<ProjectPreviewDesktop key={3} {...projects[2]} image={`assets/portfolio/${projects[2].id}/RENDER.webp`} />
            : <ProjectPreviewMobile key={3} {...projects[2]} image={`assets/portfolio/${projects[2].id}/RENDER.webp`} />
          }
        </div>
      </div>
      <div className="absolute z-0 left-0 bottom-0 right bg-white w-full h-64"></div>
    </section>
  );
}
