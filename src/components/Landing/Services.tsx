import { Link } from 'react-router-dom';

export function Services() {
  return (
    <section className="flex flex-col gap-8 py-12 md:py-24 md:pt-20 bg-gray-100 px-4 md:px-12 lg:px-28">
      <div className="flex flex-col gap-2 md:gap-4">
        <p className="flex flex-row items-center gap-2 text-lg	text-primair-500 font-semibold">
          <span className="block w-12 h-[2px] bg-primair-500"></span> Onze
          diensten
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between items-start md:items-center">
          <p className="text-2xl font-semibold text-gray-900 md:text-3xl">
            Creatief ontwerpen en constructief berekenen gaan hand in hand.
          </p>
          <Link to={'diensten'}>
            <button
              aria-label="bekijk diensten"
              className="flex h-fit bg-primair-500 hover:bg-primair-600 text-white font-bold py-3 px-5 rounded-full items-center text-md text-nowrap font-semibold"
            >
              Bekijk diensten
              <svg
                className="w-[20px] h-[20px] ml-2"
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
          </Link>
        </div>
      </div>
      <div className="block w-full h-[1px] bg-gray-200"></div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-gray-900 md:text-xl">
            Structurele analyse
          </h2>
          <p className="text-base text-gray-500 mt-2">
            Elk ontwerp wordt onder de loep genomen om zekerheid te bieden over
            veiligheid en duurzaamheid, zonder afbreuk te doen aan esthetiek.
          </p>
          <div
            className="h-64 bg-gray-400 mt-6 bg-cover bg-center "
            style={{
              backgroundImage:
                'url(\'https://media.licdn.com/dms/image/C4E12AQHlj0h9lzmoWw/article-cover_image-shrink_720_1280/0/1520080032401?e=2147483647&v=beta&t=DUHcnTR4qNgxJKjp3n2wTCdMlrqk7-JIuYwEeckvRNo\')',
            }}
          ></div>
        </div>
        <div className="flex flex-col md:flex-col-reverse gap-6 justify-end	">
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-gray-900 md:text-xl">
              Ontwerp realisatie
            </h2>
            <p className="text-base text-gray-500 mt-2">
              Wij vertalen uw dromen in concrete plannen, met voortdurende
              dialoog om te zorgen dat het eindresultaat uw oorspronkelijke
              visie weerspiegelt en zelfs versterkt.
            </p>
          </div>
          <div
            className="h-64 bg-gray-400 bg-cover bg-center"
            style={{
              backgroundImage:
                'url(\'https://www.architect-feitjes.nl/wp-content/uploads/2023/11/huis-ontwerp-img.jpg\')',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
