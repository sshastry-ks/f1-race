import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RaceResultSelectors from './store/race-results.selectors';
import * as RaceResultActions from './store/race-results.actions';

@Component({
  selector: 'app-race-results',
  templateUrl: './race-results.component.html',
  styleUrls: ['./race-results.component.scss']
})
export class RaceResultsComponent {
  raceResults$ = this.store.select(RaceResultSelectors.selectAllRaceResults);

  constructor(private store: Store) { }
  

  ngOnInit() {
    this.store.dispatch(RaceResultActions.enterRaceResultList());
  }
}
