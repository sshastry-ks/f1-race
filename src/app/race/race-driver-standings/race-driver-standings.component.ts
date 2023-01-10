import { Component } from '@angular/core';
import * as RaceDriverStandingsListSelectors from './store/race-driver-standings.selectors';
import * as RaceDriverStandingsListActions from './store/race-driver-standings.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-race-driver-standings',
  templateUrl: './race-driver-standings.component.html',
  styleUrls: ['./race-driver-standings.component.scss']
})
export class RaceDriverStandingsComponent {
  raceDriverStandingsList$ = this.store.select(RaceDriverStandingsListSelectors.selectAllRaceDriverStandingsRecords);

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(RaceDriverStandingsListActions.enterRaceDriverStandingsList());
  }
}
