import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DateRange } from '../model/DateRange';
import { SummaryReport } from '../model/SummaryReport';
import { Users } from '../model/Users';

@Injectable({
  providedIn: 'root'
})
export class ClockifyService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiServerUrl}/clockify/users/all`);
  }

  public generateReport(dateRange: DateRange): Observable<SummaryReport[]>{
    return this.http.post<SummaryReport[]>(`${this.apiServerUrl}/clockify/users/time`, dateRange);
  }


}
