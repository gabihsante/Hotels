import { Component } from '@angular/core';
import { Hotel } from './hotels-list/hotel.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'hotels-app';
  isOpen: boolean = false;
  data: Hotel = {} as Hotel;

  openDrawer() {
    this.isOpen = true;
  }

  onClose() {
    this.isOpen = false;
  }

  receiveObject(obj: Hotel) {
    this.data = obj;
  }
}
