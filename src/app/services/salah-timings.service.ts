import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';

@Injectable({
  providedIn: 'root'
})
export class SalahTimingsService {

  constructor(private http:HttpClient) { }

  getTimes() {
    return this.http.get(
      environment.PrayerTimings,
      { responseType: 'text' }
    );
  }
}
