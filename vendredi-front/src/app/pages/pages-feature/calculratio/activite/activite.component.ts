import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css']
})
export class ActiviteComponent implements OnInit {
  ca?: number;
  nbr?: number;
  cal?: number;
  constructor() { }

  ngOnInit(): void {
  }

  calcul(){
    if(this.ca !==undefined && this.nbr !==undefined){
      this.cal = this.ca / this.nbr;
      console.log(this.cal)
    }
  }

}