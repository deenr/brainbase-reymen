import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/ui/tabs';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { Label } from '../../components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../components/ui/select';

export function Contact() {
  return (
    <>
      <header className="flex flex-col md:flex-row gap-5 md:gap-32 justify-between md:items-center bg-gray-100 py-8 md:py-24 px-4 md:px-12 lg:px-28">
        <div className="w-fit flex flex-col gap-4">
          <h1 className="text-3xl font-semibold text-primary-500 md:text-5xl uppercase text-nowrap">
            Contact
          </h1>
          <div className="w-full h-1 bg-primary-500"> </div>
        </div>
        <p className="max-w-xl text-md text-gray-500">
          Heeft u vragen of wilt u meer informatie? Neem contact met ons op via
          het gepaste formulier.
        </p>
      </header>
      <section className="flex flex-col gap-6 py-12 md:py-24 md:pt-20 px-4 md:px-12 lg:px-28">
        <Tabs defaultValue="general" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="general">Algemene vragen</TabsTrigger>
            <TabsTrigger value="quotation">Offerte aanvragen</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="firstName">Voornaam</Label>
              <Input
                type="text"
                id="firstName"
                placeholder="Vul hier je voornaam in"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="lastName">Achternaam</Label>
              <Input
                type="text"
                id="lastName"
                placeholder="Vul hier je achternaam in"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Emailadres</Label>
              <Input
                type="email"
                id="email"
                placeholder="Vul hier je emailadres in"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="phonenumber">Telefoonnummer</Label>
              <Input
                type="text"
                id="phonenumber"
                placeholder="Vul hier je telefoonnummer in"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="subject">Onderwerp</Label>
              <Input
                type="text"
                id="subject"
                placeholder="Vul hier je onderwerp in"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="message">Bericht</Label>
              <Textarea placeholder="Vul hier je bericht in" id="message" />
            </div>
          </TabsContent>
          <TabsContent value="quotation">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="firstName">Voornaam</Label>
              <Input
                type="text"
                id="firstName"
                placeholder="Vul hier je voornaam in"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="lastName">Achternaam</Label>
              <Input
                type="text"
                id="lastName"
                placeholder="Vul hier je achternaam in"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Emailadres</Label>
              <Input
                type="email"
                id="email"
                placeholder="Vul hier je emailadres in"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="phonenumber">Telefoonnummer</Label>
              <Input
                type="text"
                id="phonenumber"
                placeholder="Vul hier je telefoonnummer in"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="street">Straat</Label>
              <Input
                type="text"
                id="street"
                placeholder="Vul hier de staat naam in"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="houseNumber">Huisnummer</Label>
              <Input
                type="number"
                id="houseNumber"
                placeholder="Vul hier het huisnummer in"
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="city">Stad</Label>
              <Input type="text" id="city" placeholder="Vul hier de stad in" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="city">Type project</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecteer het type project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nieuwbouw">Nieuwbouw</SelectItem>
                  <SelectItem value="verbouwing">Verbouwing</SelectItem>
                  <SelectItem value="aanbouw">Aanbouw</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="summary">Korte beschrijving</Label>
              <Textarea
                placeholder="Vul hier een korte beschrijving van het project"
                id="summary"
              />
            </div>
            (wordt nog aangevuld)
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
