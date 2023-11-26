import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { AuthorisationService } from 'src/app/services/authorisation/authorisation.service';
import { StorageService } from 'src/app/services/storage/storage.service';
@Component({
  selector: 'app-pages-feature',
  templateUrl: './pages-feature.component.html',
  styleUrls: ['./pages-feature.component.css']
})
export class PagesFeatureComponent implements OnInit {

  isLoggedIn = false;

  username?: string;

  constructor(
    private storageService: StorageService,
    private authService: AuthorisationService,
    private router: Router
  ) {}

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

}
