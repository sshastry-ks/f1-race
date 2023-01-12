import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StatusCountsSelectors, StatusCountsActions } from './store';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-status-counts',
  templateUrl: './status-counts.component.html',
  styleUrls: ['./status-counts.component.scss']
})
export class StatusCountsComponent {
  vm$ = combineLatest([
    this.store.select(StatusCountsSelectors.selectStatusCounts),
    this.store.select(StatusCountsSelectors.selectTotalStatus),
    this.store.select(StatusCountsSelectors.selectIsLoadingStatusCounts)
  ]).pipe(
    map(([statusCounts, totalStatus, isLoadingStatusCounts]) => {
      return {
        statusCounts,
        totalStatus,
        isLoadingStatusCounts
      }
    })
  );

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(StatusCountsActions.enterStatusCounts());
  }
}
