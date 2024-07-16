import { Component } from '@angular/core';
import { FileManagerService } from '../services/file-manager.service';
import { NgOptimizedImage } from '@angular/common';
import { environment } from '@env';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss'
})
export class AnnouncementsComponent {

  currentAnnouncementImagePath: string;
  constructor(private fileManager:FileManagerService) {

  }

  ngOnInit() {
    this.currentAnnouncementImagePath = this.fileManager.getCurrentAnnouncementImage(environment.CurrentImageName);
  }
}
//update2
