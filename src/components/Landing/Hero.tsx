import render from '../../assets/RENDER-300x200.webp';

export function Hero() {
  return (
    <main className="flex flex-col gap-8 md:gap-16 pt-8 md:pt-24 px-4 md:px-12 lg:px-28">
      <div className="flex flex-col gap-6 justify-center">
        <h1 className="text-4xl font-semibold text-gray-900 md:text-6xl">
          Wij realiseren uw bouwdromen <br></br> met solide expertise
        </h1>
        <p className="text-lg	text-gray-500">
          Wij zijn uw betrouwbare partner voor nauwkeurige stabiliteitsstudies,{' '}
          <br></br> met expertise en toewijding zorgen wij voor een efficiënt
          bouwontwerp.
        </p>
      </div>
      <div className="flex flex-row flex-1 ">
        <img
          className="flex-1 md:aspect-[4/3] lg:aspect-[5/3] xl:aspect-[7/3] object-cover object-center"
          src={render}
          alt="Een render van een van mijn projecten in mijn portfolio"
        ></img>
      </div>
    </main>
  );
}
