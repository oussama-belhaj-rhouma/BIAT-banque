import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiviteComponent } from './activite/activite.component';
import { RentabiliteComponent } from './rentabilite/rentabilite.component';
import { TresorieComponent } from './tresorie/tresorie.component';
import { StructureFinanciereComponent } from './structurefinanciere/structurefinanciere.component';
import { RouterModule } from '@angular/router';
import { CalculRatioComponent } from './calculratio.component';
import { FormsModule } from '@angular/forms';

const routes =[
  {path:"calculratio", component: CalculRatioComponent,

     children : [

  {path: "activite", component :ActiviteComponent },
  {path: "rentabilite", component : RentabiliteComponent},
  {path: "structurefinanciere", component : StructureFinanciereComponent},
  {path: "tresorie", component : TresorieComponent }

  ]
}
]



@NgModule({
  declarations: [CalculRatioComponent,ActiviteComponent,RentabiliteComponent,StructureFinanciereComponent, TresorieComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  exports: [RouterModule]

})
export class CalculratioModule { }
