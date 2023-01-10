import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as SeasonActions from './store/seasons.actions';
import * as selectors from './store/seasons.selectors';
import { tap } from 'rxjs'

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent {

  seasons = ['2018', '2019', '2020', '2021'];

  constructor(private store: Store) { }

  updateSeasonSelection(season: string) {
    // this.store.dispatch(SeasonActions.seasonSelectionChanged({newSeason: season}));
  }
}
