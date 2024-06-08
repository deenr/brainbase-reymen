import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import background from '../assets/over-ons.webp';
import portfolio from '../assets/profielfoto.webp';

export function AboutUs() {
  return (
    <>
      <header className="relative flex flex-col md:flex-row gap-5 md:gap-32 justify-between md:items-center bg-gray-100 py-8 md:py-24 px-4 md:px-12 lg:px-28">
        <img className="absolute z-0 opacity-20	inset-0 w-full h-full object-cover grayscale" src={background} alt="Over ons achtergrond" />
        <div className="relative z-10 w-fit flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-primair-500 md:text-5xl uppercase text-nowrap">Over ons</h1>
          <div className="w-full h-1 bg-primair-500"> </div>
        </div>
        <p className="relative z-10 max-w-xl text-base text-gray-500">Mijn missie is het leveren van op maat gemaakte stabiliteitsstudies voor particulieren en kleine bouwpromotoren.</p>
      </header>
      <section className="flex flex-col gap-6 py-12 md:py-24 md:pt-20 px-4 md:px-12 lg:px-28">
        <div className="flex flex-col md:flex-row md:flex-row gap-4 md:gap-8 md:gap-16">
          <div className="flex-1 flex flex-col">
            <h2 className="text-xl font-semibold text-gray-900 md:text-2xl uppercase">Wie ben ik?</h2>
            <p className="text-base text-gray-500 mt-2">
              Mijn naam is Dylan Reymen, oprichter van BRAINbase Reymen, en mijn doel is om onze klanten — voornamelijk particulieren en kleine bouwpromotoren — van dienst te zijn met op maat gemaakte
              stabiliteitsstudies die de integriteit en esthetiek van hun projecten garanderen.
            </p>
            <img className="h-64 bg-gray-400 mt-6 object-cover object-center " src={portfolio} alt="Foto van Dylan Reymen"></img>
          </div>
          <div className="flex-1 flex flex-col md:flex-col-reverse gap-6 justify-end	">
            <div className="flex flex-col gap-2">
              <Accordion className="hidden md:block" type="single" collapsible defaultValue="item-1">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 md:text-xl uppercase">Creatieve passie</AccordionTrigger>
                  <AccordionContent className="text-base text-gray-500">
                    Mijn passie voor architectuur en constructie ontstond in mijn jeugd. Hoewel mijn creatieve geest me naar architectuur leidde, bracht de praktijk me naar bouwkunde. Hier combineer
                    ik nu artistieke visie met technische uitvoerbaarheid.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem className="mt-2" value="item-2">
                  <AccordionTrigger className="text-lg font-semibold text-gray-900 md:text-xl cursor-pointer uppercase">Professionele missie</AccordionTrigger>
                  <AccordionContent className="text-base text-gray-500">
                    Na jaren in loondienst als stabiliteitsingenieur, heb ik besloten mijn expertise te gebruiken om BRAINbase Reymen op te richten. Hiermee kan ik mijn passie voor duurzame
                    bouwpraktijken voortzetten op een klantgerichte manier.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <h2 className="block md:hidden text-lg font-semibold text-gray-900 md:text-xl uppercase">Creatieve passie</h2>
              <p className="block md:hidden text-base text-gray-500 mt-2">
                Mijn passie voor architectuur en constructie ontstond in mijn jeugd. Hoewel mijn creatieve geest me naar architectuur leidde, bracht de praktijk me naar bouwkunde. Hier combineer ik nu
                artistieke visie met technische uitvoerbaarheid.
              </p>
              <h2 className="block md:hidden text-lg font-semibold text-gray-900 md:text-xl uppercase">Professionele missie</h2>
              <p className="block md:hidden text-base text-gray-500 mt-2">
                Na jarenlange ervaring in loondienst als stabiliteitsingenieur, besloot ik deze expertise te benutten om BRAINbase REYMEN op te richten. Deze stap stelde me in staat om mijn passie
                voor duurzame en esthetisch verantwoorde bouwpraktijken voort te zetten op een manier die dichter bij de klant staat.
              </p>
            </div>
            <div
              className="h-56 bg-gray-400 bg-cover bg-center"
              style={{
                backgroundImage: 'url(\'https://www.mediashower.com/img/C5ED0BCA-79C2-11E8-A057-BAC2283757FE/crane%20pic1%207-10-18_600x.jpg\')'
              }}
            ></div>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl uppercase">Onze missie</h2>
          <p className="text-base text-gray-500 mt-2">
            Onze missie is om veilige, duurzame en kostenefficiënte bouwprojecten te realiseren die de architecturale intenties van onze klanten respecteren en versterken. We streven ernaar om elke
            uitdaging met een oplossingsgerichte benadering aan te pakken en de best mogelijke resultaten te leveren.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 md:text-2xl uppercase">Waarom BRAINbase Reymen?</h2>
          <p className="text-base text-gray-500 mt-2">
            Bij BRAINbase Reymen profiteert u van directe communicatie en persoonlijke betrokkenheid bij elk project. Door zelf de volledige verantwoordelijkheid te nemen voor zowel de
            stabiliteitsstudies als de uitvoeringsplannen, optimaliseer ik de efficiëntie en minimaliseer ik de kosten. Dit maakt ons een ideale partner voor kleinere projecten waarbij budget een
            belangrijke rol speelt. Mijn technische en creatieve expertise zorgt ervoor dat uw project zowel functioneel als esthetisch uitmuntend wordt.
          </p>
        </div>
      </section>
    </>
  );
}
