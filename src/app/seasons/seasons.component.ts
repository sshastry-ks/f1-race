import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SeasonsSelectors } from './store';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent {
  /**
   * Available seasons
   */
  seasons = ['2021', '2020', '2019', '2018'];

  /**
   * Current selected season stream
   */
  selectedSeason$: Observable<string> = this.store.select(SeasonsSelectors.selectActiveSeason);

  constructor(private store: Store) {}

}
