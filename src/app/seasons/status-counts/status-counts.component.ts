import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as StatusCountsSelectors from './store/status-counts.selectors';
import * as StatusCountsActions from './store/status-counts.actions';

@Component({
  selector: 'app-status-counts',
  templateUrl: './status-counts.component.html',
  styleUrls: ['./status-counts.component.scss']
})
export class StatusCountsComponent {
  statusCounts$ = this.store.select(StatusCountsSelectors.selectStatusCounts);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(StatusCountsActions.enterSeasonDetails());
  }
}
