import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { SharedService } from '../services/shared.services';

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'location-search',
  templateUrl: 'location-search.html',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
})
export class LocationSearchComponent {
  constructor(private sharedService: SharedService) {}
  options = [
    { geohash: 'r3gx2', name: 'Sydney' },
    { geohash: 'r1f93', name: 'Adelaide' },
    { geohash: 'r7hgd', name: 'Brisbane' },
    { geohash: 'qd66h', name: 'Perth' },
    { geohash: 'r1r0f', name: 'Melbourne' },
    { geohash: 'r22u0', name: 'Hobart' },
    { geohash: 'r3dp0', name: 'Canberra' },
    { geohash: 'qvv11', name: 'Darwin' },
  ];
  onSelected(event: MatSelectChange) {
    this.sharedService.setSelectedLocation(event.value);
  }
}
