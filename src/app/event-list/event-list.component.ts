import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { SharedService } from '../services/shared.services';
import { environment } from '../../environment/environment';

@Component({
  standalone: true,
  selector: 'event-list',
  templateUrl: 'event-list.html',
  imports: [MatButtonModule, MatCardModule, CommonModule],
})
export class EventListComponent implements OnInit {
  constructor(private http: HttpClient, private sharedService: SharedService) {}
  API_KEY = environment.apiKey;
  events: { title: string; date: string; segment: string; imgUrl: string }[] =
    [];
  startDateTime: string = '';
  endDateTime: string = '';
  location: string = '';
  getEvents(): Observable<any> {
    console.log(this.API_KEY);
    let paramsMap = new Map<any, any>();
    paramsMap.set('size', 10);
    paramsMap.set('apikey', this.API_KEY);

    // TicketMaster API errors out if only one date is provided
    if (!!this.startDateTime && !!this.endDateTime) {
      paramsMap.set('startDateTime', this.startDateTime);
      paramsMap.set('endDateTime', this.endDateTime);
    }
    if (this.location) {
      paramsMap.set('geoPoint', this.location);
    }
    let params = new HttpParams();
    paramsMap.forEach((value, key) => {
      params = params.set(key, value);
    });
    return this.http.get('https://app.ticketmaster.com/discovery/v2/events', {
      params: params,
    });
  }
  subscribeHandler(data: any) {
    this.events = data._embedded.events.map((event: any) => {
      return {
        title: event.name,
        date: event.dates.start.localDate,
        segment: event.classifications[0].segment.name,
        imgUrl: event.images.find((image: any) => image.ratio === '3_2').url,
      };
    });
  }
  ngOnInit(): void {
    this.getEvents().subscribe((data: any) => {
      this.subscribeHandler(data);
    });

    this.sharedService.getSelectedDateRange().subscribe((data: any) => {
      this.startDateTime = data.start;
      this.endDateTime = data.end;
      this.getEvents().subscribe((data: any) => {
        this.subscribeHandler(data);
      });
    });
    this.sharedService.getSelectedLocation().subscribe((data: any) => {
      this.location = data;
      this.getEvents().subscribe((data: any) => {
        this.subscribeHandler(data);
      });
    });
  }
}
