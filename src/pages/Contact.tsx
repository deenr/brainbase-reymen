import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { z } from 'zod';
import render from '../assets/contact_image.webp';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import background from '../assets/contact.webp';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

export function Contact() {
  const [isSendingEmail, setSendingEmail] = useState(false);
  // const draagvloeren = [
  //   {
  //     id: 'welfsels',
  //     label: 'Welfsels'
  //   },
  //   {
  //     id: 'predallen',
  //     label: 'Predallen'
  //   },
  //   {
  //     id: 'pottenEnBalken',
  //     label: 'Potten en balken'
  //   },
  //   {
  //     id: 'traditioneleBetonvloer',
  //     label: 'Traditionele betonvloer'
  //   },
  //   {
  //     id: 'hout',
  //     label: 'Hout'
  //   },
  //   {
  //     id: 'vrijeKeuze',
  //     label: 'Vrije keuze'
  //   }
  // ] as const;

  const ContactSchema = z.object({
    voornaam: z
      .string({
        required_error: 'Gelieve uw voornaam in te vullen'
      })
      .min(1, 'Gelieve uw voornaam in te vullen'),
    achternaam: z
      .string({
        required_error: 'Gelieve uw achternaam in te vullen'
      })
      .min(1, 'Gelieve uw achternaam in te vullen'),
    email: z.string({ required_error: 'Gelieve uw email in te vullen' }),
    telefoonnummer: z
      .string({
        required_error: 'Gelieve uw telefoonnummer in te vullen'
      })
      .min(1, 'Gelieve uw telefoonnummer in te vullen'),
    onderwerp: z
      .string({
        required_error: 'Gelieve het onderwerp in te vullen'
      })
      .min(1, 'Gelieve het onderwerp in te vullen'),
    bericht: z
      .string({
        required_error: 'Gelieve het bericht in te vullen'
      })
      .min(1, 'Gelieve het bericht in te vullen')
  });

  const OfferteSchema = z.object({
    voornaam: z.string().min(1, 'Gelieve uw voornaam in te vullen'),
    achternaam: z.string().min(1, 'Gelieve uw achternaam in te vullen'),
    email: z.string().min(1, 'Gelieve uw email in te vullen'),
    telefoonnummer: z.string().min(1, 'Gelieve uw telefoonnummer in te vullen'),
    straat: z.string().min(1, 'Gelieve de straat van het project in te vullen'),
    huisnummer: z.string().min(1, 'Gelieve het huisnummer van het project in te vullen'),
    postcode: z.string().min(1, 'Gelieve de postcode van het project in te vullen'),
    stad: z.string().min(1, 'Gelieve de stad van het project in te vullen'),
    typeProject: z.string().min(1, 'Gelieve het type project te selecteren'),
    korteBeschrijving: z.string(),
    bestanden: z.instanceof(FileList)
    // ruimtes: z.string(),
    // stapelingDraagmuren: z.string(),
    // maximaleUitkraging: z.number(),
    // typeFundering: z.string(),
    // kelder: z.string(),
    // draagvloeren: z.array(z.string()),
    // typeDak: z.string(),
    // overigeOpmerkingen: z.string()
  });

  const contactForm = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      voornaam: '',
      achternaam: '',
      email: '',
      telefoonnummer: '',
      onderwerp: '',
      bericht: ''
    }
  });

  const offerteForm = useForm<z.infer<typeof OfferteSchema>>({
    resolver: zodResolver(OfferteSchema),
    defaultValues: {
      voornaam: '',
      achternaam: '',
      email: '',
      telefoonnummer: '',
      straat: '',
      huisnummer: '',
      postcode: '',
      stad: '',
      typeProject: '',
      korteBeschrijving: '',
      bestanden: undefined
      // ruimtes: undefined,
      // stapelingDraagmuren: undefined,
      // maximaleUitkraging: undefined,
      // typeFundering: undefined,
      // kelder: undefined,
      // draagvloeren: [],
      // typeDak: undefined,
      // overigeOpmerkingen: ''
    }
  });
  // const bestandenRef = offerteForm.register('bestanden');

  async function onContactSubmit(data: z.infer<typeof ContactSchema>) {
    setSendingEmail(true);
    emailjs
      .send(import.meta.env.VITE_EMAILJS_SERVICE_KEY, import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_KEY, data)
      .then(
        (response) => {
          contactForm.reset();
          toast('U heeft succesvol contact opgenomen', {
            description: 'Ik zal uw vraag zo snel mogelijk beantwoorden!'
          });
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        }
      )
      .finally(() => setSendingEmail(false));
  }

  function onOfferteSubmit(data: z.infer<typeof OfferteSchema>) {
    setSendingEmail(true);
    // data.bestanden = [...Array(data.bestanden.length).keys()].map((index) => data.bestanden.item(index)?.name).join('\\n') as never;
    emailjs
      .send(import.meta.env.VITE_EMAILJS_SERVICE_KEY, import.meta.env.VITE_EMAILJS_OFFERTE_TEMPLATE_KEY, data)
      .then(
        (response) => {
          offerteForm.reset();
          toast('Uw offerte is succesvol verstuurd', {
            description: 'Ik zal uw offerte zo snel mogelijk behandelen!'
          });
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        }
      )
      .finally(() => setSendingEmail(false));
  }

  return (
    <>
      <header className="relative flex flex-col md:flex-row gap-5 md:gap-32 justify-between md:items-center bg-gray-100 py-8 md:py-24 px-4 md:px-12 lg:px-28">
        <img className="absolute z-0 opacity-30	inset-0 w-full h-full object-cover grayscale" src={background} alt="Over ons achtergrond" />
        <div className="relative z-10 w-fit flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-primair-500 md:text-5xl uppercase text-nowrap">Contact</h1>
          <div className="w-full h-1 bg-primair-500"> </div>
        </div>
        <p className="relative z-10 max-w-xl text-md text-gray-500">Heeft u vragen of wilt u meer informatie? Neem contact met ons op via het gepaste formulier.</p>
      </header>
      <section className="flex flex-col md:flex-row gap-8 py-12 md:py-24 md:pt-20 px-4 md:px-12 lg:px-28">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="general" className="uppercase">
              Algemene vragen
            </TabsTrigger>
            <TabsTrigger value="quotation" className="uppercase">
              Offerte aanvragen
            </TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <Form {...contactForm}>
              <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="w-full max-w-md xl:max-w-full flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <FormField
                    control={contactForm.control}
                    name="voornaam"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="uppercase">Voornaam</FormLabel>
                        <FormControl>
                          <Input placeholder="Vul hier je voornaam in" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={contactForm.control}
                    name="achternaam"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="uppercase">Achternaam</FormLabel>
                        <FormControl>
                          <Input placeholder="Vul hier je achternaam in" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={contactForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase">Emailadres</FormLabel>
                      <FormControl>
                        <Input placeholder="Vul hier je emailadres in" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={contactForm.control}
                  name="telefoonnummer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase">Telefoonnummer</FormLabel>
                      <FormControl>
                        <Input placeholder="Vul hier je telefoonnummer in" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={contactForm.control}
                  name="onderwerp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase">Onderwerp</FormLabel>
                      <FormControl>
                        <Input placeholder="Vul hier het onderwerp in" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={contactForm.control}
                  name="bericht"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase">Bericht</FormLabel>
                      <FormControl>
                        <Textarea className="resize-none" placeholder="Vul hier je bericht in" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                  aria-label="verzend offerte formulier"
                  className="sm:w-1/3 flex justify-center mt-2 bg-primair-500 hover:bg-primair-600 text-white font-bold py-3 pl-4 pr-5 rounded-full items-center text-sm md:text-md font-semibold uppercase"
                  type="submit"
                >
                  {isSendingEmail && <LoadingSpinner className="mr-2 min-w-[20px] min-h-[20px]" />}
                  Verzend
                </button>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="quotation" className="flex flex-col gap-4">
            <Form {...offerteForm}>
              <form onSubmit={offerteForm.handleSubmit(onOfferteSubmit)} className="w-full max-w-md xl:max-w-full flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row gap-4">
                  <FormField
                    control={offerteForm.control}
                    name="voornaam"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="uppercase">Voornaam</FormLabel>
                        <FormControl>
                          <Input placeholder="Vul hier je voornaam in" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={offerteForm.control}
                    name="achternaam"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="uppercase">Achternaam</FormLabel>
                        <FormControl>
                          <Input placeholder="Vul hier je achternaam in" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={offerteForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase">Emailadres</FormLabel>
                      <FormControl>
                        <Input placeholder="Vul hier je emailadres in" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={offerteForm.control}
                  name="telefoonnummer"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase">Telefoonnummer</FormLabel>
                      <FormControl>
                        <Input placeholder="Vul hier je telefoonnummer in" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex flex-col lg:flex-row gap-4">
                  <FormField
                    control={offerteForm.control}
                    name="straat"
                    render={({ field }) => (
                      <FormItem className="lg:w-2/3">
                        <FormLabel className="uppercase">Straat</FormLabel>
                        <FormControl>
                          <Input placeholder="Vul hier de straat in" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={offerteForm.control}
                    name="huisnummer"
                    render={({ field }) => (
                      <FormItem className="lg:w-1/3">
                        <FormLabel className="uppercase">Huisnummer</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Huisnummer" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                  <FormField
                    control={offerteForm.control}
                    name="postcode"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="uppercase">Postcode</FormLabel>
                        <FormControl>
                          <Input placeholder="Vul hier de postcode in" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={offerteForm.control}
                    name="stad"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel className="uppercase">Stad</FormLabel>
                        <FormControl>
                          <Input placeholder="Vul hier de stad in" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={offerteForm.control}
                  name="typeProject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase">Type project</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecteer het type project" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="nieuwbouw">Nieuwbouw</SelectItem>
                          <SelectItem value="verbouwing">Verbouwing</SelectItem>
                          <SelectItem value="aanbouw">Aanbouw</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={offerteForm.control}
                  name="korteBeschrijving"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase">Korte beschrijving</FormLabel>
                      <FormControl>
                        <Textarea className="resize-none" placeholder="Vul hier een korte beschrijving van het project in" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <FormField
                  control={offerteForm.control}
                  name="bestanden"
                  render={() => (
                    <FormItem>
                      <FormLabel>File</FormLabel>
                      <FormControl>
                        <Input type="file" placeholder="Geen bestanden" {...bestandenRef} multiple />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={offerteForm.control}
                  name="ruimtes"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase">Ruimtes</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecteer het type ruimtes" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="grote">Grote open ruimtes (weinig draagmuren)</SelectItem>
                          <SelectItem value="gebalanceerd">Gebalanceerd</SelectItem>
                          <SelectItem value="kleine">Kleine open ruimtes (veel draagmuren)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={offerteForm.control}
                  name="stapelingDraagmuren"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase">Stapeling draagmuren</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecteer de stapeling van de draagmuren" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="boveneen">Boveneen</SelectItem>
                          <SelectItem value="willekeurig">Willekeurig</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={offerteForm.control}
                  name="maximaleUitkraging"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase">Maximale uitkraging (in meter)</FormLabel>
                      <FormControl className="relative">
                        <Input placeholder="Vul hier de maximale uitkraging in" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={offerteForm.control}
                  name="typeFundering"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase">Type fundering</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecteer het type fundering" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="betonplaat">Betonplaat</SelectItem>
                          <SelectItem value="strookfundering">Strookfundering</SelectItem>
                          <SelectItem value="dieptefundering">Dieptefundering</SelectItem>
                          <SelectItem value="ongekend">Ongekend</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={offerteForm.control}
                  name="kelder"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase">(Kruip-)kelder</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecteer de aanwezigheid van een (kruip-)kelder" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="kruipkelder">Kruipkelder</SelectItem>
                          <SelectItem value="kelder">Kelder</SelectItem>
                          <SelectItem value="n.v.t.">N.v.t.</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={offerteForm.control}
                  name="draagvloeren"
                  render={() => (
                    <FormItem>
                      <div className="mb-2">
                        <FormLabel className="uppercase">Draagvloeren</FormLabel>
                      </div>
                      {draagvloeren.map((item) => (
                        <FormField
                          key={item.id}
                          control={offerteForm.control}
                          name="draagvloeren"
                          render={({ field }) => {
                            return (
                              <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked ? field.onChange([...field.value, item.id]) : field.onChange(field.value?.filter((value) => value !== item.id));
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">{item.label}</FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={offerteForm.control}
                  name="typeDak"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase">Type dak</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecteer het type dak" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="plat">Plat dak</SelectItem>
                          <SelectItem value="hellend">Hellend dak</SelectItem>
                          <SelectItem value="niet_inbegrepen">Dak niet inbegrepen in de studie</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={offerteForm.control}
                  name="overigeOpmerkingen"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase">Overige opmerkingen</FormLabel>
                      <FormControl>
                        <Textarea className="resize-none" placeholder="Vul hier uw overige opmerkingen in" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                /> */}
                <button
                  aria-label="verzend offerte formulier"
                  className="sm:w-1/3 flex justify-center mt-2 bg-primair-500 hover:bg-primair-600 text-white font-bold py-3 pl-4 pr-5 rounded-full items-center text-sm md:text-md font-semibold uppercase"
                  type="submit"
                >
                  {isSendingEmail && <LoadingSpinner className="mr-2 min-w-[20px] min-h-[20px]" />}
                  Verzend
                </button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
        <div className="w-full hidden xl:block">
          <img className="flex-1 object-cover object-center" src={render} alt="Een render van een van mijn projecten in mijn portfolio"></img>
        </div>
      </section>
    </>
  );
}
function LoadingSpinner({ className }: Readonly<{ className?: string }>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('animate-spin', className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
