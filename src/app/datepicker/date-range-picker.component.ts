import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import {
  MatDatepickerInputEvent,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SharedService } from '../services/shared.services';

@Component({
  selector: 'date-range-picker',
  templateUrl: 'date-range-picker.html',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
  ],
})
export class DateRangePickerComponent {
  constructor(private sharedService: SharedService) {}
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  selectedDateRange = {};
  onDateChange(event: MatDatepickerInputEvent<Date>) {
    // To minimise unnecessary calls to the server, only update the date range if the user has actually changed the date
    if (this.range.value.start && this.range.value.end) {
      this.sharedService.setSelectedDateRange({
        // Dropping milliseconds from the date ascTicketMaster API does not support it
        start: this.range.value.start.toISOString().split('.')[0] + 'Z',
        end: this.range.value.end.toISOString().split('.')[0] + 'Z',
      });
    }
  }
}
