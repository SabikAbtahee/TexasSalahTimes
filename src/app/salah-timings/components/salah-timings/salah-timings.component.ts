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
  azaan: SalahWakt | null = null;
  isAzaanLoaded: boolean = false;
  image = assetImage;
  logo: string;
  prayerText = PrayerText;
  hizriDate: string | null = null;
  englishDate: string | null = null;
  clock: Observable<Date>;
  _unsubscribeAll: Subject<boolean>;
  constructor(
    private cdr: ChangeDetectorRef,
    private salahTimings: TimingsService,
    private fileManager: FileManagerService
  ) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.setClock();
    this.setLogo();
    this.getTimings();
    this.setDate();
  }

  setClock() {
    this.clock = timer(0, 1000).pipe(map(() => new Date()));
  }

  setLogo() {
    this.logo = this.fileManager.getLogo();
  }

  getTimings() {
    this.isAzaanLoaded = false;
    this.salahTimings
      .getTimes()
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res) => {
        this.azaan = res;
        this.isAzaanLoaded = true;
      });
  }

  setDate() {
    this.hizriDate = this.salahTimings.getHizriDate();
    this.englishDate = this.salahTimings.getEnglishDate();
  }



  ngOnDestroy(): void {
    this._unsubscribeAll.next(true);
    this._unsubscribeAll.complete();
    this._unsubscribeAll.unsubscribe();
  }
}
