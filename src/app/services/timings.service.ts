import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env';
import { delay, retry } from 'rxjs';
import { IslamicMonths } from '../shared/app.const';
import * as SunCalc from 'suncalc';


import { toHijri, toGregorian } from "hijri-converter";
@Injectable({
  providedIn: 'root',
})
export class TimingsService {
  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  getTimes() {
    return this.http
      .get(environment.PrayerTimings, { responseType: 'text' })
      .pipe(retry(3));
  }

  // getHizriDate(date?: Date): string {
  //   const currentDate = date ? date : new Date();
  //   const day = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
  //     day: 'numeric',
  //   }).format(currentDate);

  //   // const month = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
  //   //   month: 'long',
  //   // }).format(currentDate);

  //   const month2 = parseInt(
  //     new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
  //       month: 'numeric',
  //     }).format(currentDate)
  //   );
  //   let month = '-';
  //   if (month2 >= 0 && month2 <= 12) {
  //     month = IslamicMonths[month2];
  //   }

  //   const year = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
  //     year: 'numeric',
  //   })
  //     .format(currentDate)
  //     .split(' ')[0];

  //   return `${month} ${day}, ${year}`;
  // }

  getHizriDate(date?: Date): Promise<string> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const currentDate = date ? date : new Date();
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Get sunset time for the current date
          let sunset = SunCalc.getTimes(currentDate, latitude, longitude).sunset;

          // Convert to Hijri
          let hijriDate = toHijri(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate());

          // If the current time is after sunset, add one day to the Hijri date
          if (currentDate > sunset) {
            hijriDate = toHijri(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate() + 1);
          }
          const month = IslamicMonths[hijriDate.hm];
          resolve(`${month} ${hijriDate.hd}, ${hijriDate.hy}`);
        }, (error) => {
          reject(error);
        });
      } else {
        reject('Geolocation is not supported by this browser.');
      }
    });
  }

  getEnglishDate(date?: Date): string | null {
    const currentDate = date ? date : new Date();

    return this.datePipe.transform(currentDate, 'E, MMMM dd, YYYY');
  }
}
//com
