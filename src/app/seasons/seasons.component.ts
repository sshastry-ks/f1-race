import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as SeasonActions from './store/seasons.actions';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent {

  seasons = ['2018', '2019', '2020', '2021'];

  navLinks = [
    {
        label: 'Drivers',
        path: './drivers',
        index: 0
    }, {
        label: 'Races',
        path: './races',
        index: 1
    }
];

  constructor(private store: Store) { }

  updateSeasonSelection(season: string) {
    this.store.dispatch(SeasonActions.seasonSelectionChanged({newSeason: season}));
  }
}
