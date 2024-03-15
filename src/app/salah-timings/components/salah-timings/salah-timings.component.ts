import { Component, OnInit } from '@angular/core';
import { SalahTimingsService } from '../../services/salah-timings.service';
import { first, takeUntil } from 'rxjs';
import { assetImage } from '../../../shared/app.const';
import { SalahWakt } from '../../../shared/app.interfaces';

@Component({
  selector: 'app-salah-timings',
  templateUrl: './salah-timings.component.html',
  styleUrl: './salah-timings.component.scss',
})
export class SalahTimingsComponent implements OnInit {
  iqama: SalahWakt | null = null;
  azaan: SalahWakt | null = null;
  iqamas: string[] = [];
  azaans: string[] = [];

  image = assetImage;
  constructor(private salahTimings: SalahTimingsService) {}
  ngOnInit(): void {
    this.prepareTimings();
  }

  prepareTimings(): void {
    this.salahTimings
      .getTimes()
      .pipe(first())
      .subscribe((htmlContent) => {
        const parser = new DOMParser();
        const htmlParsed = parser.parseFromString(htmlContent, 'text/html');
        const timePattern = /\b\d{1,2}:\d{2}\s*(?:AM|PM)\b/g;
        const prayerIqamaDivs =
          htmlParsed.querySelectorAll('.prayer_iqama_div');
        prayerIqamaDivs.forEach((div) => {
          let text: string = div.textContent as string;
          const matches: Array<string> | null = text.match(timePattern);
          if (matches) {
            this.iqamas = [...this.iqamas, ...matches];
          }
        });

        const prayerAzaanDiv = htmlParsed.querySelectorAll('.prayer_azaan_div');
        prayerAzaanDiv.forEach((div) => {
          let text: string = div.textContent as string;
          const matches: Array<string> | null = text.match(timePattern);
          if (matches) {
            this.azaans = [...this.azaans, ...matches];
          }
        });
        this.loadTime();
      });
  }

  loadTime() {
    this.iqama = {
      Fazr: this.iqamas[0],
      Zohr: this.iqamas[1],
      Asr: this.iqamas[2],
      Magrib: this.iqamas[3],
      Esha: this.iqamas[4],
      Jummah: this.iqamas[6],
    };

    this.azaan = {
      Fazr: this.azaans[0],
      Zohr: this.azaans[1],
      Asr: this.azaans[2],
      Magrib: this.azaans[3],
      Esha: this.azaans[4],
      Jummah: this.iqamas[6],
    };
  }
}
