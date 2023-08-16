import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Places } from './hotel.models';
import { Place } from './hotel.models'

    export enum ResourceKeys {
    WI_FI = "WI_FI",
    BREAKFAST = "BREAKFAST",
    PARKING = "PARKING",
    RESTAURANT = "RESTAURANT",
    LAUNDRY = "LAUNDRY",
    FITNESS_CENTER = "FITNESS_CENTER",
    POOL = "POOL",
    AIR_CONDITIONING = "AIR_CONDITIONING",
    PETS = "PETS",
    SAFE = "SAFE",
    ROOM_SERVICE = "ROOM_SERVICE",
    PUB = "PUB",
    MEETING_ROOM = "MEETING_ROOM",
    STEAM_ROOM = "STEAM_ROOM",
    SPA = "SPA",
    TRANSFER = "TRANSFER",
    ROOM_TV = "ROOM_TV",
    RECEPTION_24_HOURS = "RECEPTION_24_HOURS",
    STAGE = "STAGE",
    AUDITORIUM = "AUDITORIUM",
    MASSAGE = "MASSAGE",
    ACEPTED_CAR_CREDIT = "ACEPTED_CAR_CREDIT",
    PLAY_GROUND = "PLAY_GROUND",
}

@Injectable({
    providedIn: 'root'
})

export class HotelService {

    public availableResources = {
        WI_FI: './../../assets/icons/wifi.svg',
        BREAKFAST: './../../assets/icons/breakfast.svg',
        PARKING: './../../assets/icons/parking.svg',
        RESTAURANT: './../../assets/icons/restaurant.svg',
        LAUNDRY: './../../assets/icons/laundry.svg',
        FITNESS_CENTER: './../../assets/icons/gym.svg',
        POOL: './../../assets/icons/pool.svg',
        AIR_CONDITIONING: './../../assets/icons/air.svg',
        PETS: './../../assets/icons/pets.svg',
        SAFE: './../../assets/icons/safe.svg',
        ROOM_SERVICE: './../../assets/icons/room-service.svg',
        PUB: './../../assets/icons/pub.svg',
        MEETING_ROOM: './../../assets/icons/meeting.svg',
        STEAM_ROOM: './../../assets/icons/steam.svg',
        SPA: './../../assets/icons/spa.svg',
        TRANSFER: './../../assets/icons/transfer.svg',
        ROOM_TV: './../../assets/icons/tv.svg',
        RECEPTION_24_HOURS: './../../assets/icons/reception.svg',
        STAGE: './../../assets/icons/stage.svg',
        AUDITORIUM: './../../assets/icons/audit.svg',
        MASSAGE: './../../assets/icons/massage.svg',
        ACEPTED_CAR_CREDIT: './../../assets/icons/credit.svg',
        PLAY_GROUND: './../../assets/icons/playground.svg',
    };

    private baseUrl = ' /assets/data/';

    constructor(private http: HttpClient) { }

    getHotels(): Observable<Places[]> {
        return this.http.get<Places[]>(`${this.baseUrl}hotel.json`);
    }

    getPlaces(): Observable<Place[]> {
        return this.http.get<Place[]>(`${this.baseUrl}place.json`);
    }
}
