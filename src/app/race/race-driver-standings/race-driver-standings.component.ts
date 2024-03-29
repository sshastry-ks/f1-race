import { Component } from '@angular/core';
import {RaceDriverStandingsListActions, RaceDriverStandingsListSelectors } from './store';
import { Store } from '@ngrx/store';
import { DriverStanding } from '@race/models';
import { combineLatest, map } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { ColDef, TableViewModel } from '@app/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-race-driver-standings',
  templateUrl: './race-driver-standings.component.html',
  styleUrls: ['./race-driver-standings.component.scss']
})
export class RaceDriverStandingsComponent {
  columns: ColDef[] = [
    {
      columnDef: 'position',
      header: 'Position',
      cell: (item: DriverStanding) => `${item.position}`,
    },
    {
      columnDef: 'driver',
      header: 'Driver',
      cell: (item: DriverStanding) => `${item.Driver.driverId}`,
    },
    {
      columnDef: 'permanentNumber',
      header: 'Permanent Number',
      cell: (item: DriverStanding) => `${item.Driver.permanentNumber}`,
    },
    {
      columnDef: 'points',
      header: 'Points',
      cell: (item: DriverStanding) => `${item.points}`,
    },
    {
      columnDef: 'wins',
      header: 'Wins',
      cell: (item: DriverStanding) => `${item.wins}`,
    }
  ];

  displayedColumns = this.columns.map(c => c.columnDef);

  vm$: Observable<TableViewModel<DriverStanding>> = combineLatest([
    this.store.select(RaceDriverStandingsListSelectors.selectAllRaceDriverStandingsRecords),
    this.store.select(RaceDriverStandingsListSelectors.selectTotalRaceDriverStandingsRecords),
    this.store.select(RaceDriverStandingsListSelectors.selectCurrentPageSize),
    this.store.select(RaceDriverStandingsListSelectors.selectCurrentPage),
    this.store.select(RaceDriverStandingsListSelectors.selectPageSizeOptions),
    this.store.select(RaceDriverStandingsListSelectors.SelectIsLoadingRaceDriverStandingsList),
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
    this.store.dispatch(RaceDriverStandingsListActions.enterRaceDriverStandingsList());
  }

  handlePageSizeChangedOrMoved(pageOptions: PageEvent) {
    this.store.dispatch(RaceDriverStandingsListActions.pageSizeChangedOrPageMoved({pageOptions}))
  }
}
