import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rapport } from 'src/app/entities/Rapport';
import { AuthorisationService } from 'src/app/services/authorisation/authorisation.service';
import { GlobalService } from 'src/app/services/global.ser';
import { RapportService } from 'src/app/services/rapports.ser';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {

  rapports?: Rapport[] ;
  isLoggedIn = false;

  username?: string;
  content?: string;
  id?: any;
  type?:any;
  localisation1: string="";

  constructor(private rapportService : RapportService ,private global : GlobalService,  private storageService: StorageService,
    private authService: AuthorisationService,
    private router: Router) { }

  ngOnInit(): void {
    this.getRapports();
    this.localisation1=this.global.getFilliale();
    console.log("hello")
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.username = user.username;
    }

  }
  logout(): void {
    this.authService.logout();
    this.isLoggedIn = false;
    this.router.navigateByUrl('/');
  }

  public getRapports() {
    this.rapportService.getAllRapports().subscribe(
      (Response: Rapport[]) => {
        this.rapports = Response.filter(rapport => rapport.localisation==this.localisation1)
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
    if (this.id !== null) {
      this.rapportService.getRapportByType(this.type).subscribe(
        (Response: Rapport | Rapport[]) => {
          if (Array.isArray(Response)) {
            this.rapports = Response.filter(rapport => rapport.localisation==this.localisation1)
          } else {
            this.rapports = [Response];
          }
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
          }        }
      );
    } else {
      this.getRapports();
    }

  }
}