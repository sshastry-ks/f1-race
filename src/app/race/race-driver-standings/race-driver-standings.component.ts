import { Component } from '@angular/core';
import * as RaceDriverStandingsListActions from './store/race-driver-standings.actions';
import * as RaceDriverStandingsListSelectors from './store/race-driver-standings.selectors';
import { Store } from '@ngrx/store';
import { DriverStanding } from 'src/app/models';
import { combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-race-driver-standings',
  templateUrl: './race-driver-standings.component.html',
  styleUrls: ['./race-driver-standings.component.scss']
})
export class RaceDriverStandingsComponent {
  columns = [
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

  vm$ = combineLatest([
    this.store.select(RaceDriverStandingsListSelectors.selectAllRaceDriverStandingsRecords),
    this.store.select(RaceDriverStandingsListSelectors.selectTotalRaceDriverStandingsRecords),
    this.store.select(RaceDriverStandingsListSelectors.selectCurrentPageSize),
    this.store.select(RaceDriverStandingsListSelectors.selectCurrnetPage),
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

  handlePageSizeChange(newPageSize: number) {
    this.store.dispatch(RaceDriverStandingsListActions.pageSizeChanged({newPageSize}));
  }

  handlePageMoved(direction: number) {
    this.store.dispatch(RaceDriverStandingsListActions.navigatePage({direction}));
  }
}
