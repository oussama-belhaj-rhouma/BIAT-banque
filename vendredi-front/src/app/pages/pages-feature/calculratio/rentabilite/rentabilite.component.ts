import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activite',
  templateUrl: './rentabilite.component.html',
  styleUrls: ['./rentabilite.component.css']
})
export class RentabiliteComponent implements OnInit {
rn?: number;
ca?: number;
cp?: number;
ebe?:number;
cal?:number;
cal1?:number;
cal2?:number;

  constructor() { }

  ngOnInit(): void {
  }
  calcul(){
    if(this.rn !==undefined && this.ca !==undefined && this.cp !==undefined && this.ebe !==undefined){
      this.cal = this.rn / this.ca ;
      this.cal1= this.ebe / this.ca;
      this.cal2= this.rn / this.cp;
    }
  }

}