import { Component, OnInit } from '@angular/core';
import { Hotel, Place, Places } from './hotel.models'
import { EventEmitter, Output } from '@angular/core';
import { HotelService, ResourceKeys } from './hotel.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {

  @Output() open = new EventEmitter<void>();
  @Output() sendData = new EventEmitter<Hotel>();

  places: Places[] = [];
  hotels: Hotel[] = [];
  isLoading: boolean = true;

  isSearching: boolean = false;
  sort: string = 'price';
  placeSelected?: string;
  place: Place[] = [];

  cities: string[] = [];

  filteredHotels: Hotel[] = [];
  names: string[] = [];
  searchType = 'city';
  searchResults: string[] = [];

  constructor(
    private hotelService: HotelService
  ) { }

  ngOnInit() {
    this.hotelService.getHotels().subscribe(places => {
      this.places = places;
      this.hotels = this.places.flatMap(place => place.hotels);
      this.names = this.hotels.map(hotel => hotel.name);
      this.filteredHotels = this.hotels;
      this.isLoading = false;
      this.sortHotels();
    });
    this.hotelService.getPlaces().subscribe(places => {
      this.place = places;
      this.cities = this.place.map(place => place.name);
      this.searchResults = this.cities;
    });
  }

  onChange(value: string): void {
    if (this.searchType === 'city') {
      this.searchResults = this.cities.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
    if (this.searchType === 'name') {
      this.searchResults = this.names.filter(option => option.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
  }

  openDrawer(data: Hotel) {
    this.open.emit();
    this.sendData.emit(data);
  }

  searchCity() {
    if (this.placeSelected && this.searchType === 'city') {
      this.isSearching = true;
      const city = this.place.find(city => city.name === this.placeSelected);
      return this.filteredHotels = this.places.filter(place => place.placeId === city?.placeId).flatMap(place => place.hotels);
    }
    if (this.placeSelected && this.searchType === 'name') {
      this.isSearching = true;
      return this.filteredHotels = this.hotels.filter(hotel => hotel.name === this.placeSelected)
    }
    return this.filteredHotels = this.hotels;
  }

  sortHotels() {
    if (this.sort === 'stars') {
      this.filteredHotels.sort((a, b) => Number(b.stars) - Number(a.stars));
    }
    if (this.sort === 'price') {
      this.filteredHotels.sort((a, b) => a.price - b.price);
    }
  }

  getResourcePath(key: ResourceKeys): string {
    return this.hotelService.availableResources[key];
  }
}
