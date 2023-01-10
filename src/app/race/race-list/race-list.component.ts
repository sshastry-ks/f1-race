import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RaceSelectors from './store/race.selectors';
import * as RaceActions from './store/race.actions';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent {
  races$ = this.store.select(RaceSelectors.selectAllRaces);

  constructor(private store: Store) { }
  

  ngOnInit() {
    this.store.dispatch(RaceActions.enterRaceList());
  }
}
