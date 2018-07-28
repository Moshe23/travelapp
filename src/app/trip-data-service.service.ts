import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  trips = [
    {
      title: "trip to rome"

    },
    {
      title: "trip to Madrid"
    }
  ];
  id: number = 1;
  constructor() { }
  getTrips() {
    return this.trips;
  }
  deleteTrip(newTrip) {
    const index = this.trips.indexOf(newTrip);
    if (index > 0) {
      this.trips.splice(index, 1);
    }
  }
}
