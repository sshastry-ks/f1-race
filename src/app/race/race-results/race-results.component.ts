import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RaceResultsActions, RaceResultSelectors } from './store'
import { combineLatest, map } from 'rxjs';
import { RaceResult } from '@race/models';
import { PageEvent } from '@angular/material/paginator';
import { ColDef, TableViewModel } from '@app/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-race-results',
  templateUrl: './race-results.component.html',
  styleUrls: ['./race-results.component.scss']
})
export class RaceResultsComponent {
  columns: ColDef[] = [
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
      columnDef: 'permanentNumber',
      header: 'Permanent Number',
      cell: (item: RaceResult) => `${item.Driver.permanentNumber}`,
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

  vm$: Observable<TableViewModel<RaceResult>> = combineLatest([
    this.store.select(RaceResultSelectors.selectAllRaceResults),
    this.store.select(RaceResultSelectors.selectTotalRaceResults),
    this.store.select(RaceResultSelectors.selectCurrentPageSize),
    this.store.select(RaceResultSelectors.selectCurrentPage),
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
    this.store.dispatch(RaceResultsActions.enterRaceResultsList());
  }

  handlePageSizeChangedOrMoved(pageOptions: PageEvent) {
    this.store.dispatch(RaceResultsActions.pageSizeChangedOrPageMoved({pageOptions}))
  }
}
