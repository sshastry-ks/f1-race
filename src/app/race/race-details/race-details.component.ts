import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RaceDetailsSelectors from './store/race-details.selectors';
import * as RaceDetailsActions from './store/race-details.actions';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.scss']
})
export class RaceDetailsComponent {
  readonly navLinks = [
    {
      label: 'Results',
      path: 'results'
    },
    {
      label: 'Qualifying',
      path: 'qualifying'
    },
    {
      label: 'Driver Standings',
      path: 'driver-standings'
    }
  ];

  raceEntity$ = this.store.select(RaceDetailsSelectors.selectActiveRaceEntity);
  
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(RaceDetailsActions.loadRaceEntity())
  }
}
