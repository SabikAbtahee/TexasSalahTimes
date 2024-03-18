import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {

  constructor() { }


  getCurrentAnnouncementImage(imageName:string): string{
    return `assets/${imageName}`;
  }
}
