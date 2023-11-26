import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors/intex';
import { ArchivageComponent } from './pages/pages-feature/archivage/archivage.component';
import { CalculRatioComponent } from './pages/pages-feature/calculratio/calculratio.component';
import { IdentificationComponent } from './pages/pages-feature/identification/identification.component';
import { VuRapportComponent } from './pages/pages-feature/vurapport/vurapport.component';
import { ActiviteComponent } from './pages/pages-feature/calculratio/activite/activite.component';
import { RentabiliteComponent } from './pages/pages-feature/calculratio/rentabilite/rentabilite.component';
import { StructureFinanciereComponent } from './pages/pages-feature/calculratio/structurefinanciere/structurefinanciere.component';
import { TresorieComponent } from './pages/pages-feature/calculratio/tresorie/tresorie.component';
import { PagesFeatureComponent } from './pages/pages-feature/pages-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
