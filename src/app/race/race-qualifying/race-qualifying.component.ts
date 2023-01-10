import { Component } from '@angular/core';
import * as RaceQualifyingListSelectors from './store/race-qualifying.selectors';
import * as RaceQualifyingListActions from './store/race-qualifying.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-race-qualifying',
  templateUrl: './race-qualifying.component.html',
  styleUrls: ['./race-qualifying.component.scss']
})
export class RaceQualifyingComponent {
  raceQualifyingList$ = this.store.select(RaceQualifyingListSelectors.selectAllRaceQulifyingRecords);

  constructor(private store: Store) { }
  

  ngOnInit() {
    this.store.dispatch(RaceQualifyingListActions.enterRaceQualifyingList());
  }
}
