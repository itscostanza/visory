import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DateRangePickerComponent } from './datepicker/date-range-picker.component';
import { LocationSearchComponent } from './location-search/location-search.component';
import { EventListComponent } from './event-list/event-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DateRangePickerComponent,
    LocationSearchComponent,
    EventListComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'visory';
}
