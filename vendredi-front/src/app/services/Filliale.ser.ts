import { Injectable } from '@angular/core';
import { Filliale } from 'src/app/entities/Flliale'; // Assuming you have a Filliale interface or class
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FillialeService {
  private apiUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) {}

  public getAllFilliales(): Observable<Filliale[]> {
    return this.http.get<Filliale[]>(`http://localhost:8090/Filliale/retrieve-all-Filliales`);
  }

  public getFillialeByID(fillialeID: number): Observable<Filliale> {
    return this.http.get<Filliale>(`${this.apiUrl}/Filliale/getByID/` + fillialeID);
  }

  public updateFilliale(filliale: Filliale): Observable<Filliale> {
    return this.http.put<Filliale>(`${this.apiUrl}/Filliale/update`, filliale);
  }

  public deleteFilliale(fillialeID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Filliale/delete/` + fillialeID);
  }

  public addFilliale(filliale: Filliale): Observable<Filliale> {
    return this.http.post<Filliale>(`${this.apiUrl}/Filliale/add/`, filliale);
  }
}
