import { Rapport } from "./Rapport";

export interface Mission {
    missionId: number;
      dateDebut: Date;
      dateFin: Date;
      userAuditId: string;
      rapport: Rapport;
      
      
    }