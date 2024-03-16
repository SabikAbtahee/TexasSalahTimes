import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SalahTimingsComponent } from './components/salah-timings/salah-timings.component';
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
