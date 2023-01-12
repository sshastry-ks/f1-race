import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SeasonsSelectors } from '@seasons/store'

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.scss']
})
export class SeasonDetailsComponent {
  navLinks = [
    {
        label: 'Drivers',
        path: './drivers',
    }, {
        label: 'Races',
        path: './races',
    }
  ];

  isSelectedSeason2021$ = this.store.select(SeasonsSelectors.selectIsCurrentSeason2021);

  constructor(private store: Store) {}
}
