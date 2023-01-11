import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as RaceResultActions from './store/race-results.actions';
import * as RaceResultSelectors from './store/race-results.selectors';
import { combineLatest, map } from 'rxjs';
import { RaceResult } from 'src/app/models';

@Component({
  selector: 'app-race-results',
  templateUrl: './race-results.component.html',
  styleUrls: ['./race-results.component.scss']
})
export class RaceResultsComponent {
  columns = [
    {
      columnDef: 'position',
      header: 'Position',
      cell: (item: RaceResult) => `${item.position}`,
    },
    {
      columnDef: 'driver',
      header: 'Driver',
      cell: (item: RaceResult) => `${item.Driver.driverId}`,
    },
    {
      columnDef: 'time',
      header: 'Time',
      cell: (item: RaceResult) => item.Time?.time ?`${item.Time.time}` : '-',
    },
    {
      columnDef: 'status',
      header: 'Status',
      cell: (item: RaceResult) => `${item.status}`,
    },
    {
      columnDef: 'grid',
      header: 'Grid',
      cell: (item: RaceResult) => `${item.grid}`,
    },
    {
      columnDef: 'laps',
      header: 'Laps',
      cell: (item: RaceResult) => `${item.laps}`,
    }
  ];

  displayedColumns = this.columns.map(c => c.columnDef);

  vm$ = combineLatest([
    this.store.select(RaceResultSelectors.selectAllRaceResults),
    this.store.select(RaceResultSelectors.selectTotalRaceResults),
    this.store.select(RaceResultSelectors.selectCurrentPageSize),
    this.store.select(RaceResultSelectors.selectCurrnetPage),
    this.store.select(RaceResultSelectors.selectPageSizeOptions),
    this.store.select(RaceResultSelectors.SelectIsLoadingRaceResultsList),
    ]).pipe(
    map(([items, totalItems, currentPageSize, currentPage, pageSizeOptions, isLoading]) => {
        return {
        items,
        totalItems,
        currentPageSize,
        currentPage,
        pageSizeOptions,
        isLoading
        }
    }));
  
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(RaceResultActions.enterRaceResultList());
  }

  handlePageSizeChange(newPageSize: number) {
    this.store.dispatch(RaceResultActions.pageSizeChanged({newPageSize}));
  }

  handlePageMoved(direction: number) {
    this.store.dispatch(RaceResultActions.navigatePage({direction}));
  }
}
