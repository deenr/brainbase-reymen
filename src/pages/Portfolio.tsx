import { ProjectPreviewMobile } from '@/components/ProjectPreviewMobile';
import portfolio from '../assets/portfolio.json';
import { Project } from '@/models/portfolio';
import { useBreakpoint } from '@/lib/breakpoints';
import { ProjectPreviewDesktop } from '@/components/ProjectPreviewDesktop';
import background from '../assets/portfolio.webp';

export function Portfolio() {
  const { isLg } = useBreakpoint('lg');
  const allProjects = (portfolio as Project[]).filter((project) => project.heeftRender);

  return (
    <>
      <header className="relative flex flex-col md:flex-row gap-5 md:gap-32 justify-between md:items-center bg-gray-100 py-8 md:py-24 px-4 md:px-12 lg:px-28">
        <img className="absolute z-0 opacity-30	inset-0 w-full h-full object-cover grayscale" src={background} alt="Over ons achtergrond" />
        <div className="relative z-10 w-fit flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-primair-500 md:text-5xl uppercase">Portfolio</h1>
          <div className="w-full h-1 bg-primair-500"> </div>
        </div>
        <p className="relative z-10 max-w-xl text-base text-gray-500">
          Verken mijn diversiteit aan villa's, huizen en appartementen, elk met unieke stabiliteitsstudies. Deze projecten zijn onderdeel van mijn werkervaring als stabiliteitsingenieur bij{' '}
          <a className="underline" href="https://momenting.be/" target="_blank" rel="noopener noreferrer">
            MoMENTING BV
          </a>
          .
        </p>
      </header>
      <section className="grid gap-8 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 pb-12 md:py-24 px-4 md:px-12 lg:px-28">
        {allProjects.map((project) => (
          <div key={project.id} className="w-full h-96">
            {isLg ? (
              <ProjectPreviewDesktop image={`assets/portfolio/${project.id}/RENDER.webp`} {...project}></ProjectPreviewDesktop>
            ) : (
              <ProjectPreviewMobile image={`assets/portfolio/${project.id}/RENDER.webp`} {...project}></ProjectPreviewMobile>
            )}
          </div>
        ))}
      </section>
    </>
  );
}
