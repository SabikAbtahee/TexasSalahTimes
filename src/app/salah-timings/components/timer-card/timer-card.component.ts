import { Component, Input } from '@angular/core';
import { mosqueImage } from '../../../shared/app.const';
import { fuseAnimations } from '../../../shared/animations';

@Component({
  selector: 'app-timer-card',
  templateUrl: './timer-card.component.html',
  styleUrl: './timer-card.component.scss',
  animations:fuseAnimations
})
export class TimerCardComponent {
  @Input({ required: true })
  text!: string;
  mosqueImage = mosqueImage;
  timeText!: string;
  timeNumber!: string;
  @Input({ required: true }) set time(value: string | undefined) {
    if (value) {
      const values = value.split(" ");
      this.timeNumber = values[0];
      this.timeText = values[1];
    }
   };
}
