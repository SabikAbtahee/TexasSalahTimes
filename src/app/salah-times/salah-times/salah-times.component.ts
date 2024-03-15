import { Component, OnInit } from '@angular/core';
import { SalahTimesService } from '../salah-times.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SalahWakt } from './salahTimer.interface';
@Component({
  selector: 'app-salah-times',
  templateUrl: './salah-times.component.html',
  styleUrl: './salah-times.component.scss',
})
export class SalahTimesComponent implements OnInit {
  iqama: SalahWakt | null = null;
  azaan: SalahWakt | null = null;
  iqamas: string[] = [];
  azaans: string[] = [];

  constructor(private salahTimesService: SalahTimesService) { }

  ngOnInit() {
    this.salahTimesService.getTimes().subscribe((htmlContent: string) => {
      const parser = new DOMParser();
      const htmlParsed = parser.parseFromString(htmlContent, 'text/html');
      const timePattern = /\b\d{1,2}:\d{2}\s*(?:AM|PM)\b/g;
      const prayerIqamaDivs = htmlParsed.querySelectorAll('.prayer_iqama_div');
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
      Jummah: this.iqamas[6]
    }

    this.azaan = {
      Fazr: this.azaans[0],
      Zohr: this.azaans[1],
      Asr: this.azaans[2],
      Magrib: this.azaans[3],
      Esha: this.azaans[4],
      Jummah:this.iqamas[6]
    }
  }
}
