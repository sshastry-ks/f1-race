import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as StatusCountsSelectors from './store/status-counts.selectors';
import * as StatusCountsActions from './store/status-counts.actions';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-status-counts',
  templateUrl: './status-counts.component.html',
  styleUrls: ['./status-counts.component.scss']
})
export class StatusCountsComponent {
  vm$ = combineLatest([
    this.store.select(StatusCountsSelectors.selectStatusCounts),
    this.store.select(StatusCountsSelectors.selectIsLoadingStatusCounts)
  ]).pipe(
    map(([statusCounts, isLoadingStatusCounts]) => {
      return {
        statusCounts,
        isLoadingStatusCounts
      }
    })
  );

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(StatusCountsActions.enterStatusCounts());
  }
}
