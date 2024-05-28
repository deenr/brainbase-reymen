export interface Project {
  id: string;
  projectNaam: string;
  projectOmschrijving: string;
  bouwheer: string;
  architect: string;
  heeftVoorstudie?: boolean;
  heeftUitvoeringsplannen?: boolean;
  heeftWerfopvolging?: boolean;
  heeftFotos: boolean;
}
