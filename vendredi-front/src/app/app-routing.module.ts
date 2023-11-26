import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ArchivageComponent } from './pages/pages-feature/archivage/archivage.component';
import { VuRapportComponent } from './pages/pages-feature/vurapport/vurapport.component';
import { IdentificationComponent } from './pages/pages-feature/identification/identification.component';
import { CalculRatioComponent } from './pages/pages-feature/calculratio/calculratio.component';
import { ActiviteComponent } from './pages/pages-feature/calculratio/activite/activite.component';
import { RentabiliteComponent } from './pages/pages-feature/calculratio/rentabilite/rentabilite.component';
import { StructureFinanciereComponent } from './pages/pages-feature/calculratio/structurefinanciere/structurefinanciere.component';
import { TresorieComponent } from './pages/pages-feature/calculratio/tresorie/tresorie.component';
import { PagesFeatureModule } from './pages/pages-feature/pages-feature.module';
const routes: Routes = [
{path: 'login',  component: LoginComponent},
{path: 'register',  component: RegisterComponent},
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'home', component: HomeComponent },




// {path: '**', component: PageNotFoundComponent

];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesFeatureModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
