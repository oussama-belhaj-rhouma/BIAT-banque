import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filliale } from 'src/app/entities/Flliale';
import { FillialeService } from 'src/app/services/Filliale.ser';
import { AuthorisationService } from 'src/app/services/authorisation/authorisation.service';
import { GlobalService } from 'src/app/services/global.ser';
import { RapportService } from 'src/app/services/rapports.ser';
import { StorageService } from 'src/app/services/storage/storage.service';
@Component({ selector: 'app-archivage', templateUrl: './archivage.component.html', styleUrls: ['./archivage.component.css'] })
export class ArchivageComponent implements OnInit {
  isLoggedIn = false;

  username?: string;
  rapportAjoutee?: boolean;
  types = ["A", "B", "C", "D"];
  isTrue?: boolean = false;
  attributes =
    { rapportId: 0, nomAgent: '', localisation: '', annee: '', missionId: 0, type: '', data: null };
  selectedFile: any;
  localisation1: string = ""
  constructor(private rapportService: RapportService, private http: HttpClient, private fillialeService: FillialeService, private global: GlobalService,    private storageService: StorageService,
    private authService: AuthorisationService,
    private router: Router) { }
 
  ngOnInit(): void {
    this.rapportAjoutee = false;
    this.isTrue = false; // Make sure to reset the flag here
    this.localisation1 = this.global.getFilliale();
    console.log(this.localisation1);
    this.attributes.localisation = this.localisation1;
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.username = user.username;
    }

  }
  selectedFileName: string = "Choose a PDF file...";

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.selectedFileName = this.selectedFile.name;
    } else {
      this.selectedFileName = "Choose a PDF file...";
    }
  }
  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('/');
  }
  onSubmit() {
    this.rapportService.uploadRapport(this.attributes, this.selectedFile)
      .subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            // Handle progress events if needed
          } else if (event instanceof HttpResponse) {
            console.log(event); // This should show the full response
            if (event.status === 200 && event.body) {
              this.rapportAjoutee = true;
              this.isTrue = true;
              this.attributes = {
                rapportId: 0, nomAgent: '', localisation: '', annee: '', missionId: 0, type: '', data: null
              };
              this.attributes.localisation = this.localisation1;
            }
          }
        },
        error => {
          console.log(error);
        }
      );
  }
  
}