import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { z } from 'zod';
import render from '../assets/RENDER-300x200.webp';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';

export function Contact() {
  const draagvloeren = [
    {
      id: 'welfsels',
      label: 'Welfsels',
    },
    {
      id: 'predallen',
      label: 'Predallen',
    },
    {
      id: 'pottenEnBalken',
      label: 'Potten en balken',
    },
    {
      id: 'traditioneleBetonvloer',
      label: 'Traditionele betonvloer',
    },
    {
      id: 'hout',
      label: 'Hout',
    },
    {
      id: 'vrijeKeuze',
      label: 'Vrije keuze',
    },
  ] as const;

  const ContactSchema = z.object({
    voornaam: z.string({
      required_error: 'Gelieve uw voornaam in te vullen',
    }),
    achternaam: z.string({
      required_error: 'Gelieve uw achternaam in te vullen',
    }),
    email: z.string({ required_error: 'Gelieve uw email in te vullen' }),
    telefoonnummer: z.string({
      required_error: 'Gelieve uw telefoonnummer in te vullen',
    }),
    onderwerp: z.string({
      required_error: 'Gelieve het onderwerp in te vullen',
    }),
    bericht: z.string({
      required_error: 'Gelieve het bericht in te vullen',
    }),
  });

  const OfferteSchema = z.object({
    voornaam: z.string(),
    achternaam: z.string(),
    email: z.string(),
    telefoonnummer: z.string(),
    straat: z.string(),
    huisnummer: z.string(),
    postcode: z.string(),
    stad: z.string(),
    typeProject: z.string(),
    korteBeschrijving: z.string(),
    ruimtes: z.string(),
    stapelingDraagmuren: z.string(),
    maximaleUitkraging: z.number(),
    typeFundering: z.string(),
    kelder: z.string(),
    draagvloeren: z.array(z.string()),
    typeDak: z.string(),
    overigeOpmerkingen: z.string(),
  });

  const contactForm = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      voornaam: undefined,
      achternaam: undefined,
      email: undefined,
      telefoonnummer: undefined,
      onderwerp: undefined,
      bericht: undefined,
    },
  });

  const offerteForm = useForm<z.infer<typeof OfferteSchema>>({
    resolver: zodResolver(OfferteSchema),
    defaultValues: {
      voornaam: undefined,
      achternaam: undefined,
      email: undefined,
      telefoonnummer: undefined,
      straat: undefined,
      huisnummer: undefined,
      postcode: undefined,
      stad: undefined,
      typeProject: undefined,
      korteBeschrijving: undefined,
      ruimtes: undefined,
      stapelingDraagmuren: undefined,
      maximaleUitkraging: undefined,
      typeFundering: undefined,
      kelder: undefined,
      draagvloeren: [],
      typeDak: undefined,
      overigeOpmerkingen: '',
    },
  });

  function onContactSubmit(data: z.infer<typeof ContactSchema>) {
    console.log(data);
  }

  function onOfferteSubmit(data: z.infer<typeof OfferteSchema>) {
    console.log(data);
  }

  return (
    <>
      <header className="flex flex-col md:flex-row gap-5 md:gap-32 justify-between md:items-center bg-gray-100 py-8 md:py-24 px-4 md:px-12 lg:px-28">
        <div className="w-fit flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-primair-500 md:text-5xl uppercase text-nowrap">
            Contact
          </h1>
          <div className="w-full h-1 bg-primair-500"> </div>
        </div>
        <p className="max-w-xl text-md text-gray-500">
          Heeft u vragen of wilt u meer informatie? Neem contact met ons op via
          het gepaste formulier.
        </p>
      </header>
      <section className="flex flex-col md:flex-row gap-8 py-12 md:py-24 md:pt-20 px-4 md:px-12 lg:px-28">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="general">Algemene vragen</TabsTrigger>
            <TabsTrigger value="quotation">Offerte aanvragen</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <Form {...contactForm}>
              <form
                onSubmit={contactForm.handleSubmit(onContactSubmit)}
                className="w-full max-w-md xl:max-w-full flex flex-col gap-4"
              >
                <div className="flex flex-col lg:flex-row gap-4">
                  <FormField
                    control={contactForm.control}
                    name="voornaam"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Voornaam</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Vul hier je voornaam in"
                            {...field}
                          />
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
                        <FormLabel>Achternaam</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Vul hier je achternaam in"
                            {...field}
                          />
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
                      <FormLabel>Emailadres</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Vul hier je emailadres in"
                          {...field}
                        />
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
                      <FormLabel>Telefoonnummer</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Vul hier je telefoonnummer in"
                          {...field}
                        />
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
                      <FormLabel>Onderwerp</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Vul hier het onderwerp in"
                          {...field}
                        />
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
                      <FormLabel>Bericht</FormLabel>
                      <FormControl>
                        <Textarea
                          className="resize-none"
                          placeholder="Vul hier je bericht in"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  className="w-fit flex bg-primair-500 hover:bg-primair-600 text-white font-bold py-2 px-3 md:py-3 md:px-5 rounded-full items-center text-sm md:text-md font-semibold"
                  type="submit"
                >
                  Verzend
                </button>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="quotation" className="flex flex-col gap-4">
            <Form {...offerteForm}>
              <form
                onSubmit={offerteForm.handleSubmit(onOfferteSubmit)}
                className="w-full max-w-md xl:max-w-full flex flex-col gap-4"
              >
                <div className="flex flex-col lg:flex-row gap-4">
                  <FormField
                    control={offerteForm.control}
                    name="voornaam"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Voornaam</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Vul hier je voornaam in"
                            {...field}
                          />
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
                        <FormLabel>Achternaam</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Vul hier je achternaam in"
                            {...field}
                          />
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
                      <FormLabel>Emailadres</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Vul hier je emailadres in"
                          {...field}
                        />
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
                      <FormLabel>Telefoonnummer</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Vul hier je telefoonnummer in"
                          {...field}
                        />
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
                        <FormLabel>Straat</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Vul hier de straat in"
                            {...field}
                          />
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
                        <FormLabel>Huisnummer</FormLabel>
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
                        <FormLabel>Postcode</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Vul hier de postcode in"
                            {...field}
                          />
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
                        <FormLabel>Stad</FormLabel>
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
                      <FormLabel>Type project</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
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
                      <FormLabel>Korte beschrijving</FormLabel>
                      <FormControl>
                        <Textarea
                          className="resize-none"
                          placeholder="Vul hier een korte beschrijving van het project in"
                          {...field}
                        />
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
                      <FormLabel>Ruimtes</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecteer het type ruimtes" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="grote">
                            Grote open ruimtes (weinig draagmuren)
                          </SelectItem>
                          <SelectItem value="gebalanceerd">
                            Gebalanceerd
                          </SelectItem>
                          <SelectItem value="kleine">
                            Kleine open ruimtes (veel draagmuren)
                          </SelectItem>
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
                      <FormLabel>Stapeling draagmuren</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecteer de stapeling van de draagmuren" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="boveneen">Boveneen</SelectItem>
                          <SelectItem value="willekeurig">
                            Willekeurig
                          </SelectItem>
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
                      <FormLabel>Maximale uitkraging (in meter)</FormLabel>
                      <FormControl className="relative">
                        <Input
                          placeholder="Vul hier de maximale uitkraging in"
                          {...field}
                        />
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
                      <FormLabel>Type fundering</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecteer het type fundering" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="betonplaat">Betonplaat</SelectItem>
                          <SelectItem value="stookfundering">
                            Stookfundering
                          </SelectItem>
                          <SelectItem value="dieptefundering">
                            Dieptefundering
                          </SelectItem>
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
                      <FormLabel>(Kruip-)kelder</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecteer de aanwezigheid van een (kruip-)kelder" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="aanwezig">Aanwezig</SelectItem>
                          <SelectItem value="niet_aanwezig">
                            Niet aanwezig
                          </SelectItem>
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
                        <FormLabel>Draagvloeren</FormLabel>
                      </div>
                      {draagvloeren.map((item) => (
                        <FormField
                          key={item.id}
                          control={offerteForm.control}
                          name="draagvloeren"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            item.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id,
                                            ),
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {item.label}
                                </FormLabel>
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
                      <FormLabel>(Kruip-)kelder</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecteer het type dak" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="plat">Plat dak</SelectItem>
                          <SelectItem value="hellend">Hellend dak</SelectItem>
                          <SelectItem value="niet_inbegrepen">
                            Dak niet inbegrepen in de studie
                          </SelectItem>
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
                      <FormLabel>Overige opmerkingen</FormLabel>
                      <FormControl>
                        <Textarea
                          className="resize-none"
                          placeholder="Vul hier uw overige opmerkingen in"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                  className="w-fit flex bg-primair-500 hover:bg-primair-600 text-white font-bold py-2 px-3 md:py-3 md:px-5 rounded-full items-center text-sm md:text-md font-semibold"
                  type="submit"
                >
                  Verzend
                </button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
        <div className="w-full hidden xl:block">
          <img
            className="flex-1 object-cover object-center"
            src={render}
            alt="Een render van een van mijn projecten in mijn portfolio"
          ></img>
        </div>
      </section>
    </>
  );
}
