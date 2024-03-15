import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SalahTimesService {

  constructor(private http: HttpClient) { }

  getTimes() {
    return this.http.get('https://us.mohid.co/tx/dallas/ialfm/masjid/widget/api/index/?m=prayertimings', { responseType: 'text' });
    //   .subscribe((htmlContent: string) => {
    //     const { rootNodes, errors } = parse(htmlContent);
    //     let a = parse(htmlContent);
    //     const parser = new DOMParser();
    //     let b= parser.parseFromString(htmlContent, 'text/html');

    //     const prayerIqamaDivs = b.querySelectorAll('.prayer_iqama_div');
    //     prayerIqamaDivs.forEach(div => {
    //       console.log(div.textContent);
    //     });
    //     // const parser = new DOMParser();
    //   // const doc = parser.parseFromString(htmlContent, 'text/html');
    //   // Process the parsed document here
    // });
  }
}
