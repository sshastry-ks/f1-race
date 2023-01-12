import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SeasonSelectors from './store/seasons.selectors';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent {
  seasons = ['2021', '2020', '2019', '2018'];

  constructor(private store: Store) {}

  selectedSeason$ = this.store.select(SeasonSelectors.selectActiveSeason);
}
