import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalahTimesComponent } from './salah-times/salah-times.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [SalahTimesComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[SalahTimesComponent]
})
export class SalahTimesModule { }
