export function Services() {
  const services = [
    {
      title: 'Voorstudie - Stiftenplan',
      description:
        'We beginnen met een voorstudie of stiftenplan, gebaseerd op de aangeleverde plannen van de klant of architect. In deze fase werken we nauw samen met alle betrokken partijen om ervoor te zorgen dat onze plannen volledig aansluiten bij de bouwvereisten en architecturale intenties.',
    },
    {
      title: 'Bekistingsplannen',
      description:
        'Eenmaal akkoord bereikt is met alle betrokken partijen, stellen we het uitvoeringsdossier samen. Dit dossier omvat de definitieve uitvoeringsplannen (ook bekend als wapeningsplannen), wapeningsborderellen (of ijzerlijsten), en een correcte meetstaat (die mogelijk al bij de voorstudie wordt opgemaakt voor een initiële kosteninschatting).',
    },
    {
      title: 'Uitvoeringsdossier',
      description:
        'We beginnen met een voorstudie of stiftenplan, gebaseerd op de aangeleverde plannen van de klant of architect. In deze fase werken we nauw samen met alle betrokken partijen om ervoor te zorgen dat onze plannen volledig aansluiten bij de bouwvereisten en architecturale intenties.',
    },
    {
      title: '2D en 3D Modellering',
      description:
        'Standaard worden onze plannen uitgetekend in 2D-formaat, met alle noodzakelijke details om de draagstructuur effectief te realiseren. Op verzoek kunnen we deze plannen upgraden naar een 3D-model voor een nog duidelijker beeld van het eindresultaat.',
    },
    {
      title: 'Controle en Werfbezoeken',
      description:
        'Als laatste stap controleren we de door de aannemer aangeleverde plannen en voeren we werfbezoeken uit om de correcte uitvoering te verzekeren en eventuele aanpassingen tijdig door te voeren.',
    },
  ];
  return (
    <>
      <header className="flex flex-col md:flex-row gap-5 md:gap-32 justify-between md:items-center bg-gray-100 py-8 md:py-24 px-4 md:px-12 lg:px-28">
        <div className="w-fit flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-primary-500 md:text-5xl uppercase">
            Diensten
          </h1>
          <div className="w-full h-1 bg-primary-500"> </div>
        </div>
        <p className="max-w-lg text-md text-gray-500">
          Stabiliteitsstudies voor woningen en wooncomplexen: efficiënt, veilig
          en duurzaam. Optimalisatie met respect voor ontwerp.
        </p>
      </header>
      <section className="flex flex-col gap-6 py-12 md:py-24 md:pt-20 px-4 md:px-12 lg:px-28">
        <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
          Stappen in de stabiliteitsstudie
        </h2>
        <div className="flex flex-col gap-4">
          {services.map(({ title, description }, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-900 md:text-xl">
                {index + 1}. {title}
              </h3>
              <p className="text-base text-gray-500 mt-2">{description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
