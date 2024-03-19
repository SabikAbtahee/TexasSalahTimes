import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { delay } from 'rxjs';
import { IslamicMonths } from '../shared/app.const';

@Injectable({
  providedIn: 'root',
})
export class TimingsService {
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  getTimes() {

    return this.http.get(environment.PrayerTimings, { responseType: 'text' });
  }

  getHizriDate(date?: Date): string {
    const currentDate = date ? date : new Date();

    const day = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
      day: 'numeric',
    }).format(currentDate);

    // const month = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
    //   month: 'long',
    // }).format(currentDate);

    const month2 = parseInt(new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
      month: 'numeric',
    }).format(currentDate));
    let month="-"
    if (month2 >= 0 && month2 <= 12) {
      month = IslamicMonths[month2];
    }

    const year = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
      year: 'numeric',
    })
      .format(currentDate)
      .split(' ')[0];

    return `${month} ${day}, ${year}`;
  }

  getEnglishDate(date?: Date): string | null {
    const currentDate = date ? date : new Date();

    return this.datePipe.transform(currentDate, 'E, MMMM dd, YYYY');
  }
}