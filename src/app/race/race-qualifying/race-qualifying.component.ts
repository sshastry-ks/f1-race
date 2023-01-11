import { Component } from '@angular/core';
import * as RaceQualifyingListSelectors from './store/race-qualifying.selectors';
import * as RaceQualifyingListActions from './store/race-qualifying.actions';
import { Store } from '@ngrx/store';
import { combineLatest, map } from 'rxjs';
import { RaceQualifying } from 'src/app/models';

@Component({
  selector: 'app-race-qualifying',
  templateUrl: './race-qualifying.component.html',
  styleUrls: ['./race-qualifying.component.scss']
})
export class RaceQualifyingComponent {
  columns = [
    {
      columnDef: 'position',
      header: 'Position',
      cell: (item: RaceQualifying) => `${item.position}`,
    },
    {
      columnDef: 'driver',
      header: 'Driver',
      cell: (item: RaceQualifying) => `${item.Driver.driverId}`,
    },
    {
      columnDef: 'q1',
      header: 'Q1',
      cell: (item: RaceQualifying) => item.Q1 ?`${item.Q1}` : '-',
    },
    {
      columnDef: 'q2',
      header: 'Q2',
      cell: (item: RaceQualifying) => item.Q2 ?`${item.Q2}` : '-',
    },
    {
      columnDef: 'q3',
      header: 'Q3',
      cell: (item: RaceQualifying) => item.Q3 ?`${item.Q3}` : '-',
    }
  ];
  displayedColumns = this.columns.map(c => c.columnDef);
  vm$ = combineLatest([
    this.store.select(RaceQualifyingListSelectors.selectAllRaceQulifyingRecords),
    this.store.select(RaceQualifyingListSelectors.selectTotalRaceResults),
    this.store.select(RaceQualifyingListSelectors.selectCurrentPageSize),
    this.store.select(RaceQualifyingListSelectors.selectCurrnetPage),
    this.store.select(RaceQualifyingListSelectors.selectPageSizeOptions),
    this.store.select(RaceQualifyingListSelectors.SelectIsLoadingRaceQualifyingList),
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
    this.store.dispatch(RaceQualifyingListActions.enterRaceQualifyingList());
  }

  handlePageSizeChange(newPageSize: number) {
    this.store.dispatch(RaceQualifyingListActions.pageSizeChanged({newPageSize}));
  }

  handlePageMoved(direction: number) {
    this.store.dispatch(RaceQualifyingListActions.navigatePage({direction}));
  }
}
