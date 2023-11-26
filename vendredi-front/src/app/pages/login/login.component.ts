import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filliale } from 'src/app/entities/Flliale';
import { FillialeService } from 'src/app/services/Filliale.ser';
import { AuthorisationService } from 'src/app/services/authorisation/authorisation.service';
import { GlobalService } from 'src/app/services/global.ser';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 

export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  filliales?: Filliale[];
  filliale: string="";
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthorisationService,private global: GlobalService, private storageService: StorageService , private routs : Router, private fillialeService : FillialeService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.roles = this.storageService.getUser().roles;
    }

  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: (data: any) => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
       
        localStorage.setItem('token',this.storageService.getUser().accessToken);
        this.getFillialles();


      },
      error: (err: { error: { message: string; }; }) => {
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
        this.isLoginFailed = true;
      }
    });
  }
  getFillialles(){
    this.fillialeService.getAllFilliales().subscribe(
      (data)=>{
        this.filliales=data;
        console.log(data)

      },
      error => {
        console.log(error);
      })
  }

  reloadPage(): void {
    window.location.reload();
  }
  setFilliale(){
    this.global.setFilliale(this.filliale); 
    console.log(this.filliale);
  }

  goToNext(){
   
  
   this.routs.navigateByUrl('/vurapport')
  }
}

