import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalahTimingsComponent } from './components/salah-timings/salah-timings.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TimerCardComponent } from './components/timer-card/timer-card.component';

@NgModule({
  declarations: [SalahTimingsComponent, TimerCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SalahTimingsComponent,
      },
    ]),
  ],
  exports: [SalahTimingsComponent],
})
export class SalahTimingsModule {}
