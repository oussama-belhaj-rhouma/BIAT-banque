import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activite',
  templateUrl: './structurefinanciere.component.html',
  styleUrls: ['./structurefinanciere.component.css']
})
export class StructureFinanciereComponent implements OnInit {
  act?:number
  pct?:number
  dt?: number
  cp?: number
  cal?:number
  cal1?:number
  constructor() { }

  ngOnInit(): void {
  }
  calcul(){
    if(this.act !==undefined && this.pct !==undefined && this.dt !==undefined && this.cp !==undefined){
      this.cal = this.act / this.pct ;
      this.cal1= this.dt / this.cp;
    }
  }

}