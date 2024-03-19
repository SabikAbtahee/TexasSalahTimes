import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { delay } from 'rxjs';

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

    const day = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn', {
      day: 'numeric',
    }).format(currentDate);

    const month = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn', {
      month: 'long',
    }).format(currentDate);
    const year = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura-nu-latn', {
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
