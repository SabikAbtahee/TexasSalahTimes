import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SalahTimingsComponent } from './components/salah-timings/salah-timings.component';
import { TimerCardComponent } from './components/timer-card/timer-card.component';
import { AnnouncementsComponent } from "../announcements/announcements.component";

@NgModule({
    declarations: [SalahTimingsComponent, TimerCardComponent],
    exports: [SalahTimingsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: SalahTimingsComponent,
            },
        ]),
        AnnouncementsComponent
    ]
})
export class SalahTimingsModule {}
// test
//update