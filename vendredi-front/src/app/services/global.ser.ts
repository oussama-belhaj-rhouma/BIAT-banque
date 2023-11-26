import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

  export class GlobalService{
    filliale : string="";
    constructor(){}
    setFilliale(filliale: string){
        this.filliale=filliale;
    }
    getFilliale(){
        return this.filliale;
    }
  }