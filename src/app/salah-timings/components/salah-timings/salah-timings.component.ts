import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  afterNextRender,
} from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  Subject,
  filter,
  first,
  map,
  takeUntil,
  tap,
  timer,
} from 'rxjs';
import { FileManagerService } from '../../../services/file-manager.service';
import { TimingsService } from '../../../services/timings.service';
import { fuseAnimations } from '../../../shared/animations';
import { PrayerText, assetImage } from '../../../shared/app.const';
import { SalahWakt } from '../../../shared/app.interfaces';
@Component({
  selector: 'app-salah-timings',
  templateUrl: './salah-timings.component.html',
  styleUrl: './salah-timings.component.scss',
  animations: fuseAnimations,
})
export class SalahTimingsComponent implements OnInit, OnDestroy {
  iqama: SalahWakt | null = null;
  azaan: SalahWakt | null = null;
  iqamas: string[];
  azaans: string[];

  image = assetImage;
  logo: string;
  prayerText = PrayerText;
  hizriDate: string | null = null;
  englishDate: string | null = null;
  clock: Observable<Date>;
  timeHtmlContent: BehaviorSubject<string> = new BehaviorSubject('');
  _unsubscribeAll: Subject<boolean>;
  constructor(
    private cdr: ChangeDetectorRef,
    private salahTimings: TimingsService,
    private fileManager: FileManagerService
  ) {
    this._unsubscribeAll = new Subject();
    afterNextRender(() => {
      this.setClock();
      this.setDate();
      this.parseTimings();
    });
  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
    this._unsubscribeAll.unsubscribe();
  }

  ngOnInit(): void {
    this.setLogo();
    this.getTimings();
  }

  setClock() {
    this.clock = timer(0, 1000).pipe(tap(() => {
      if (new Date().getHours() === 0) {
        this.setDate();
      }
    }),map(() => new Date()));
  }

  setLogo() {
    this.logo = this.fileManager.getLogo();
  }

  getTimings() {
    this.salahTimings
      .getTimes()
      .pipe(first())
      .subscribe((htmlContent) => {
        this.timeHtmlContent.next(htmlContent);
      });
  }

  parseTimings() {
    this.timeHtmlContent
      .pipe(
        takeUntil(this._unsubscribeAll),
        filter((res) => (res ? true : false))
      )
      .subscribe((res) => {
        setTimeout(() => {
          const parser = new DOMParser();
          const htmlParsed = parser.parseFromString(res, 'text/html');
          const timePattern = /\b\d{1,2}:\d{2}\s*(?:AM|PM)\b/g;
          const prayerIqamaDivs =
            htmlParsed.querySelectorAll('.prayer_iqama_div');
          prayerIqamaDivs.forEach((div) => {
            let text: string = div.textContent as string;
            const matches: Array<string> | null = text.match(timePattern);
            if (matches) {
              this.iqamas = this.iqamas
                ? [...this.iqamas, ...matches]
                : [...matches]; //;
            }
          });

          const prayerAzaanDiv =
            htmlParsed.querySelectorAll('.prayer_azaan_div');
          prayerAzaanDiv.forEach((div) => {
            let text: string = div.textContent as string;
            const matches: Array<string> | null = text.match(timePattern);
            if (matches) {
              this.azaans = this.azaans
                ? [...this.azaans, ...matches]
                : [...matches]; //...this.azaans,
            }
          });
          this.loadTime();
        }, 0);
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
