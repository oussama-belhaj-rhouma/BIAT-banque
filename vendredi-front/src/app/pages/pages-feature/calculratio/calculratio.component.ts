import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorisationService } from 'src/app/services/authorisation/authorisation.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-calculratio',
  templateUrl: './calculratio.component.html',
  styleUrls: ['./calculratio.component.css']
})
export class CalculRatioComponent implements OnInit {
  isLoggedIn = false;

  username?: string;
  constructor( private route: ActivatedRoute,  private storageService: StorageService,
    private authService: AuthorisationService,
    private router: Router) { }

  ngOnInit(): void {
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
  isActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}