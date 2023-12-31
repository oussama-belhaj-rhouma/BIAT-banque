import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const AUTH_API = 'http://localhost:8090/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthorisationService {
  constructor(private http: HttpClient) {}
  private token= "myToken";
  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }
  getToken(): string {
    return this.token;
  }

  register(username: string, email: string, password: string): Observable<any> {
    
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }
  logout(){
    localStorage.removeItem('token')
  }


}