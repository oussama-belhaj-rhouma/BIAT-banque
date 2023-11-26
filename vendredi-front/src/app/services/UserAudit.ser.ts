import { Injectable } from '@angular/core';
import { UserAudit } from 'src/app/entities/UserAudit'; // Assuming you have a UserAudit interface or class
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuditService {
  private apiUrl = 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  public getAllUserAudits(): Observable<UserAudit[]> {
    return this.http.get<UserAudit[]>(`${this.apiUrl}/UserAudit/getAll`);
  }

  public getUserAuditByID(auditID: number): Observable<UserAudit> {
    return this.http.get<UserAudit>(`${this.apiUrl}/UserAudit/getByID/` + auditID);
  }

  public updateUserAudit(audit: UserAudit): Observable<UserAudit> {
    return this.http.put<UserAudit>(`${this.apiUrl}/UserAudit/update`, audit);
  }

  public deleteUserAudit(auditID: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/UserAudit/delete/` + auditID);
  }

  public addUserAudit(audit: UserAudit): Observable<UserAudit> {
    return this.http.post<UserAudit>(`${this.apiUrl}/UserAudit/add/`, audit);
  }
}
