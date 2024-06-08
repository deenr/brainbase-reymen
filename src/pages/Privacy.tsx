import background from '../assets/diensten.webp';

export function Privacy() {
  return (
    <>
      <header className="relative flex flex-col md:flex-row gap-5 md:gap-32 justify-between md:items-center bg-gray-100 py-8 md:py-24 px-4 md:px-12 lg:px-28">
        <img className="absolute z-0 opacity-30	inset-0 w-full h-full object-cover grayscale" src={background} alt="Contacteer ons achtergrond" />
        <div className="relative z-10 w-fit flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-primair-500 md:text-5xl uppercase">Privacybeleid</h1>
          <div className="w-full h-1 bg-primair-500"> </div>
        </div>
        <p className="relative z-10 max-w-xl text-base text-gray-500">
          Dit privacybeleid beschrijft hoe uw persoonlijke informatie wordt verzameld, gebruikt en gedeeld wanneer u onze website bezoekt of een aanvraag indient via{' '}
          <a className="underline" target="_blank" rel="noopener noreferrer" href="https://brainbasereymen.com/">
            www.brainbasereymen.com
          </a>{' '}
          (de "Site"). Door gebruik te maken van deze site of onze diensten, stemt u in met de verwerking van uw persoonlijke gegevens zoals beschreven in dit privacybeleid.
        </p>
      </header>
      <section className="flex flex-col gap-6 py-12 md:py-24 md:pt-20 px-4 md:px-12 lg:px-28">
        <h2 className="text-xl font-semibold text-gray-900 md:text-2xl uppercase">Definities</h2>
        <ul className="pl-5 list-disc">
          <li>
            <span className="font-semibold">Persoonsgegevens</span>: Alle informatie met betrekking tot een geïdentificeerde of identificeerbare natuurlijke persoon.
          </li>
          <li>
            <span className="font-semibold">Verwerking</span>: Elke bewerking of reeks van bewerkingen die wordt uitgevoerd op persoonsgegevens.
          </li>
          <li>
            <span className="font-semibold">Betrokkene</span>: Een natuurlijk- of rechtspersoon wiens persoonsgegevens worden verwerkt.
          </li>
          <li>
            <span className="font-semibold">Wij/Ons</span>: BRAINbase Reymen.
          </li>
        </ul>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 md:text-xl uppercase">1. GEGEVENSBESCHERMINGSPRINCIPES</h3>
            <p className="text-base text-gray-900 mt-2">Wij volgen de volgende gegevensbeschermingsprincipes:</p>
            <ol className="mt-2 pl-5 list-disc">
              <li className="text-gray-500">Verwerking is wettig, eerlijk en transparant.</li>
              <li className="text-gray-500">Verwerking is beperkt tot het doel waarvoor de gegevens zijn verzameld.</li>
              <li className="text-gray-500">Verwerking is beperkt tot de minimale hoeveelheid gegevens die nodig is.</li>
              <li className="text-gray-500">Verwerking is beperkt in tijd. Wij bewaren uw gegevens niet langer dan nodig.</li>
              <li className="text-gray-500">Wij zorgen voor de nauwkeurigheid van de gegevens.</li>
              <li className="text-gray-500">Wij zorgen voor de integriteit en vertrouwelijkheid van de gegevens.</li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 md:text-xl uppercase">2. RECHTEN VAN DE BETROKKENE</h3>
            <p className="text-base text-gray-900 mt-2">Als betrokkene heeft u de volgende rechten:</p>
            <ol className="mt-2 pl-5 list-disc">
              <li className="text-gray-500">
                <span className="font-semibold">Recht op Informatie: </span>U heeft het recht te weten of uw persoonsgegevens worden verwerkt.
              </li>
              <li className="text-gray-500">
                <span className="font-semibold">Recht op Toegang: </span>U heeft het recht toegang te krijgen tot de verzamelde gegevens.
              </li>
              <li className="text-gray-500">
                <span className="font-semibold">Recht op Rectificatie: </span>U heeft het recht om correctie of verwijdering van uw persoonsgegevens te vragen.
              </li>
              <li className="text-gray-500">
                <span className="font-semibold">Recht op Verwijdering: </span>U heeft het recht om in bepaalde omstandigheden uw gegevens te laten verwijderen.
              </li>
              <li className="text-gray-500">
                <span className="font-semibold">Recht om Verwerking te Beperken: </span>U heeft het recht om de verwerking van uw persoonsgegevens te beperken.
              </li>
              <li className="text-gray-500">
                <span className="font-semibold">Recht om Bezwaar te Maken: </span>U heeft het recht om bezwaar te maken tegen de verwerking van uw persoonsgegevens.
              </li>
              <li className="text-gray-500">
                <span className="font-semibold">Recht op Gegevensoverdraagbaarheid: </span>U heeft het recht uw gegevens in een machine-leesbaar formaat te ontvangen.
              </li>
              <li className="text-gray-500">
                <span className="font-semibold">Recht om een Klacht in te Dienen: </span>U heeft het recht een klacht in te dienen bij een toezichthoudende autoriteit.
              </li>
              <li className="text-gray-500">
                <span className="font-semibold">Recht om Toestemming In te Trekken: </span>U heeft het recht uw toestemming voor de verwerking van uw persoonsgegevens in te trekken.
              </li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 md:text-xl uppercase">3. GEGEVENS DIE WIJ VERZAMELEN</h3>
            <p className="text-base text-gray-900 mt-2"></p>
            <ol className="mt-2 pl-5 list-disc">
              <li className="text-gray-500">Informatie die u ons verstrekt: Dit kunnen uw e-mailadres, naam, telefoonnummer, enz. zijn, vooral informatie die nodig is voor contactaanvragen.</li>
              <li className="text-gray-500">Automatisch verzamelde informatie: Wij verzamelen geen gegevens automatisch via cookies of andere sessiehulpmiddelen.</li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 md:text-xl uppercase">4. HOE WIJ UW PERSOONSGEGEVENS GEBRUIKEN</h3>
            <p className="text-base text-gray-900 mt-2">Wij gebruiken uw persoonsgegevens om:</p>
            <ol className="mt-2 pl-5 list-disc">
              <li className="text-gray-500">Onze dienst aan u te leveren.</li>
              <li className="text-gray-500">Uw ervaring te verbeteren.</li>
              <li className="text-gray-500">Te voldoen aan wettelijke verplichtingen.</li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 md:text-xl uppercase">5. WIE HEEFT TOEGANG TOT UW PERSOONSGEGEVENS</h3>
            <p className="text-base text-gray-900 mt-2">Wij delen uw persoonsgegevens niet met derden zonder uw toestemming, behalve indien wettelijk verplicht.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 md:text-xl uppercase">6. HOE WIJ UW GEGEVENS BEVEILIGEN</h3>
            <p className="text-base text-gray-900 mt-2">
              Wij doen ons best om uw persoonsgegevens veilig te houden door gebruik te maken van veilige protocollen voor communicatie en gegevensoverdracht.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 md:text-xl uppercase">7. CONTACTINFORMATIE</h3>
            <p className="text-base text-gray-900 mt-2">
              Voor vragen over dit privacybeleid kunt u contact met ons opnemen via{' '}
              <a className="underline" href="mailto:info@brainbasereymen.com">
                info@brainbasereymen.com
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 md:text-xl uppercase">8. WIJZIGINGEN IN DIT PRIVACYBELEID</h3>
            <p className="text-base text-gray-900 mt-2">Wij behouden ons het recht voor om dit privacybeleid op elk moment te wijzigen. Laatste wijziging was op 06 juni 2024.</p>
          </div>
        </div>
      </section>
    </>
  );
}
