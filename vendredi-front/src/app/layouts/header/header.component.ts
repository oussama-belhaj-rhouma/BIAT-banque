import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { StorageService } from 'src/app/services/storage/storage.service';
import { AuthorisationService } from 'src/app/services/authorisation/authorisation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  username?: string;

  constructor(
    private storageService: StorageService,
    private authService: AuthorisationService,
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

  }
}
