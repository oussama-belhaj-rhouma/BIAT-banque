import { Mission } from "./Mission";

export interface UserAudit {
    UserAuditId: number;
    nom: string;
    prenom: string;
     missions:Mission[]
  }