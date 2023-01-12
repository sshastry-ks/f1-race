import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RaceDetailsSelectors from './store/race-details.selectors';
import * as RaceDetailsActions from './store/race-details.actions';
import { combineLatest, map } from 'rxjs';

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

  vm$ = combineLatest([
    this.store.select(RaceDetailsSelectors.selectActiveRaceEntity),
    this.store.select(RaceDetailsSelectors.selectIsLoadingRaceDetails)
  ]).pipe(
    map(([raceEntity, isLoadingRaceEntity]) => {
      return {
        raceEntity,
        isLoadingRaceEntity
      }
    })
  );
  
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(RaceDetailsActions.loadRaceEntity())
  }
}
