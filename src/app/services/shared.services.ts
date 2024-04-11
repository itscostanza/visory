import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface DateRange {
  start: string | undefined;
  end: string | undefined;
}

@Injectable({ providedIn: 'root' })
export class SharedService {
  public selectedDateRange = new BehaviorSubject<any>([]);
  public selectedLocation = new BehaviorSubject<any>([]);

  constructor() {}

  setSelectedDateRange(data: DateRange) {
    this.selectedDateRange.next(data);
  }

  getSelectedDateRange() {
    return this.selectedDateRange.asObservable();
  }

  setSelectedLocation(data: string) {
    this.selectedLocation.next(data);
  }

  getSelectedLocation() {
    return this.selectedLocation.asObservable();
  }
}
