import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { PrayerText, assetImage } from '../../../shared/app.const';
import { SalahWakt } from '../../../shared/app.interfaces';
import { TimingsService } from '../../../services/timings.service';
import { FileManagerService } from '../../../services/file-manager.service';
import { fuseAnimations } from '../../../shared/animations';

@Component({
  selector: 'app-salah-timings',
  templateUrl: './salah-timings.component.html',
  styleUrl: './salah-timings.component.scss',
  animations: fuseAnimations,
})
export class SalahTimingsComponent implements OnInit {
  iqama: SalahWakt | null = null;
  azaan: SalahWakt | null = null;
  iqamas: string[] = [];
  azaans: string[] = [];

  image = assetImage;
  logo: string;
  prayerText = PrayerText;
  hizriDate: string | null = null;
  englishDate: string | null = null;
  constructor(
    private salahTimings: TimingsService,
    private fileManager: FileManagerService
  ) {}

  ngOnInit(): void {
    this.setLogo();
    this.prepareTimings();
    this.setDate();
  }

  setLogo() {
    this.logo = this.fileManager.getLogo();
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
      [PrayerText.Fazr]: this.iqamas[0],
      [PrayerText.Dhuhr]: this.iqamas[1],
      [PrayerText.Asr]: this.iqamas[2],
      [PrayerText.Maghrib]: this.iqamas[3],
      [PrayerText.Isha]: this.iqamas[4],
      [PrayerText.Jummah]: this.iqamas[6],
    };

    this.azaan = {
      [PrayerText.Fazr]: this.azaans[0],
      [PrayerText.Dhuhr]: this.azaans[1],
      [PrayerText.Asr]: this.azaans[2],
      [PrayerText.Maghrib]: this.azaans[3],
      [PrayerText.Isha]: this.azaans[4],
      [PrayerText.Jummah]: this.azaans[6],
    };
  }

  setDate() {
    this.hizriDate = this.salahTimings.getHizriDate();
    this.englishDate = this.salahTimings.getEnglishDate();
  }
}
