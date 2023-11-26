import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArchivageComponent } from './archivage/archivage.component';
import { VuRapportComponent } from './vurapport/vurapport.component';
import { IdentificationComponent } from './identification/identification.component';
import { CalculRatioComponent } from './calculratio/calculratio.component';
import { CalculratioModule } from './calculratio/calculratio.module';
import { PagesFeatureComponent } from './pages-feature.component';
import { FormsModule } from '@angular/forms';

const routes=[
  
 
    {path: 'archivage',  component: ArchivageComponent},
    {path: 'vurapport', component: VuRapportComponent},
    {path: 'calculration', component: CalculRatioComponent},
    {path: 'identification', component: IdentificationComponent},

  ]



@NgModule({
  declarations: [PagesFeatureComponent, ArchivageComponent,VuRapportComponent,IdentificationComponent],
  imports: [
    CommonModule,
    CalculratioModule,
    FormsModule,
    RouterModule.forChild(routes),
    
  ],
  exports: [RouterModule]

})
export class PagesFeatureModule { }
