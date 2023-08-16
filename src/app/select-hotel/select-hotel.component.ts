import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Amenities, Hotel } from '../hotels-list/hotel.models';
import { HotelService, ResourceKeys } from '../hotels-list/hotel.service';

@Component({
  selector: 'app-select-hotel',
  templateUrl: './select-hotel.component.html',
  styleUrls: ['./select-hotel.component.scss']
})
export class SelectHotelComponent {

  @Input() visible = false;
  @Input() data: Hotel = {} as Hotel;
  @Output() close = new EventEmitter<void>();

  public showMore = false;
  public index: number = 3;

  constructor(private hotelService: HotelService) { }

  onOpen(): void {
    this.visible = true;
  }

  onClose(): void {
    this.close.emit();
    this.visible = false;
  }

  getResourcePath(key: ResourceKeys): string {
    return this.hotelService.availableResources[key];
}

  showMoreAmenities(amenities: Amenities[]): void | null {
    this.showMore = !this.showMore;
    this.index = this.showMore? amenities.length : 3;
  }

}
