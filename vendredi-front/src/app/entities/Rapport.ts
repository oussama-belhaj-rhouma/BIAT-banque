import { Mission } from "./Mission";
import{ERapport} from "./ERapport"
export interface Rapport {
  rapportId: number;
    nomAgent: string;
    localisation: string;
    MissionId: number; 
    annee: number;
    missions:Mission;
    type:ERapport;
    data: File;
    fileName: string;

  }
  
