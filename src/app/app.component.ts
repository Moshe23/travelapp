import { Component } from '@angular/core';
import { TripDataService } from './trip-data-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Travel app';
  myDate = new Date();
  newTrip = {
    title: ""
  }
  constructor(private tripDataService: TripDataService) { }
  trips = [];
  addTrip(trip) {
    console.log(trip);
    this.tripDataService.getTrips().push(trip);
    this.newTrip = { title: "" };
  }
  getTrips(){
    this.trips =  this.tripDataService.getTrips();
  }
  ngOnInit() {
    this.getTrips();
  }
}
