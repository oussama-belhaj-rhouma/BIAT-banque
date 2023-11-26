import { Injectable } from '@angular/core';
import { Rapport } from 'src/app/entities/Rapport';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { ERapport } from '../entities/ERapport';

@Injectable({
  providedIn: 'root'
})
export class RapportService {
  private apiUrl = 'http://localhost:8090'; 

  constructor(private http: HttpClient) {}

  public getAllRapports(): Observable<Rapport[]> {
    return this.http.get<Rapport[]>(`http://localhost:8090/Rapport/retrieve-all-Rapports`);
  }

  public getRapportByID(RapportID: number): Observable<Rapport[]> {
    return this.http.get<Rapport[]>(`${this.apiUrl}/Rapport/retrieve-Rapport/${RapportID}`);
  }

  public getRapportByAnnee(annee: number): Observable<Rapport[]> {
    return this.http.get<Rapport[]>(`${this.apiUrl}/Rapport/retrieve-Rapport-by-annee/${annee}`);
  }

  public getRapportByType(type: ERapport): Observable<Rapport[]> {
    return this.http.get<Rapport[]>(`${this.apiUrl}/Rapport/retrieve-Rapport-by-type/${type}`);
  }

  public updateRapport(rapport: Rapport): Observable<Rapport> {
    return this.http.put<Rapport>(`${this.apiUrl}/Rapport/update`, rapport);
  }

  public deleteRapport(RapportID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Rapport/remove-Rapport/${RapportID}`);
  }

  public uploadRapport(attributes: any, file: File): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('nomAgent', attributes.nomAgent);
    formData.append('localisation', attributes.localisation);
    formData.append('annee', attributes.annee);
    formData.append('missionId', attributes.missionId);
    formData.append('type', attributes.type);
    formData.append('file', file);
  
    const req = new HttpRequest('POST', `${this.apiUrl}/Rapport/add-Rapport`, formData, {
      reportProgress: true,
      responseType: 'text' // Use 'text' instead of 'json'
    });
  
    return this.http.request(req);
  }
  

  downloadRapport(rapportId: number): Observable<HttpResponse<Blob>> {
    const url = `${this.apiUrl}/Rapport/download/${rapportId}`; // Make sure the URL is correct
    
    return this.http.get(url, {
      responseType: 'blob',
      observe: 'response'
    });
  }
}
