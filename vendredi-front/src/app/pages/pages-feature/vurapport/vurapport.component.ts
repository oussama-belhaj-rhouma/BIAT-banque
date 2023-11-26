import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { Rapport } from 'src/app/entities/Rapport';
import { AuthorisationService } from 'src/app/services/authorisation/authorisation.service';
import { GlobalService } from 'src/app/services/global.ser';
import { RapportService } from 'src/app/services/rapports.ser';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-vurapport',
  templateUrl: './vurapport.component.html',
  styleUrls: ['./vurapport.component.css']
})
export class VuRapportComponent implements OnInit {
  isLoggedIn = false;

  username?: string;

  rapports?: Rapport[];

  content?: string;
  annee?: any;
  localisation1 : string="";

  constructor(private rapportService : RapportService, private global : GlobalService,  private storageService: StorageService,
    private authService: AuthorisationService,
    private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.username = user.username;
    }


    this.getRapports();
   this.localisation1= this.global.getFilliale();
   console.log(this.localisation1);
    console.log("hello")
   
  }
  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('/');
  }

  public getRapports() {
    this.rapportService.getAllRapports().subscribe(
      (Response: Rapport[]) => {
        this.rapports = Response.filter(rapport  => rapport.localisation==this.localisation1)
        console.log(this.rapports)

      },
      (error: HttpErrorResponse) => {
        if (error.error) {
          try {
            const res = JSON.parse(error.error);
            this.rapports = res.message;
          } catch {
            this.content = `Error with status: ${error.status} - ${error.statusText}`;
          }
        } else {
          this.content = `Error with status: ${error.status}`;
        }
      }
    );
  }

  searchReport() {
    this.rapportService.getRapportByAnnee(this.annee).subscribe(
      (Response: Rapport[]) => {
        if(this.annee!==null){
          this.rapports = Response.filter(rapport => rapport.localisation==this.localisation1);
        console.log(this.rapports)
        }else{
          this.getRapports();
        }
        

      }
    )
  }

  
downloadRapport(rapport: Rapport) {
  this.rapportService.downloadRapport(rapport.rapportId)
    .subscribe((response: HttpResponse<Blob>) => {
      const blob = response.body;
      const filename = rapport.fileName || 'download.pdf';
if (blob !==null){
  const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      link.click();

      // Clean up the blob URL after the download
      URL.revokeObjectURL(blobUrl);
}
      // Create a blob URL and initiate the download
    
    });
}



}