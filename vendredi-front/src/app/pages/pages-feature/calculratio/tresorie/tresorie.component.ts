import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './tresorie.component.html',
  styleUrls: ['./tresorie.component.css']
})
export class TresorieComponent implements OnInit {
ta?: number
tv?:number
tp?: number;
cc?: number;
cal?: number;
cal1?: number;

  constructor() { }

  ngOnInit(): void {
  }

  calcul(){
    if(this.ta !==undefined && this.tv !==undefined && this.tp !==undefined && this.cc !==undefined){
      this.cal = this.ta - this.tp ;
      console.log(this.cal)
      this.cal1= (this.cc/this.tv)*360
    }
  }

}
