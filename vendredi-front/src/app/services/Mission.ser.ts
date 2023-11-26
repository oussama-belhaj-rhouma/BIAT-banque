import { Injectable } from '@angular/core';
import { Mission } from 'src/app/entities/Mission'; // Assuming you have a Mission interface or class
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  private apiUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  public getAllMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.apiUrl}/Mission/getAll`);
  }

  public getMissionByID(missionID: number): Observable<Mission> {
    return this.http.get<Mission>(`${this.apiUrl}/Mission/getByID/` + missionID);
  }

  public updateMission(mission: Mission): Observable<Mission> {
    return this.http.put<Mission>(`${this.apiUrl}/Mission/update`, mission);
  }

  public deleteMission(missionID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/Mission/delete/` + missionID);
  }

  public addMission(mission: Mission): Observable<Mission> {
    return this.http.post<Mission>(`${this.apiUrl}/Mission/add/`, mission);
  }
}
