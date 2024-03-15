import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalahTimesModule } from './salah-times/salah-times.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SalahTimesModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TexasSalahTimings';
}
