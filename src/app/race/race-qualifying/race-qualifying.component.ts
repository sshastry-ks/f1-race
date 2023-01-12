import { Component } from '@angular/core';
import { RaceQualifyingListActions, RaceQualifyingListSelectors} from './store';
import { Store } from '@ngrx/store';
import { combineLatest, map } from 'rxjs';
import { RaceQualifying } from '@race/models';
import { PageEvent } from '@angular/material/paginator';
import { ColDef, TableViewModel } from '@app/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-race-qualifying',
  templateUrl: './race-qualifying.component.html',
  styleUrls: ['./race-qualifying.component.scss']
})
export class RaceQualifyingComponent {
  columns: ColDef[] = [
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
      columnDef: 'permanentNumber',
      header: 'Permanent Number',
      cell: (item: RaceQualifying) => `${item.Driver.permanentNumber}`,
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
  vm$: Observable<TableViewModel<RaceQualifying>> = combineLatest([
    this.store.select(RaceQualifyingListSelectors.selectAllRaceQulifyingRecords),
    this.store.select(RaceQualifyingListSelectors.selectTotalRaceResults),
    this.store.select(RaceQualifyingListSelectors.selectCurrentPageSize),
    this.store.select(RaceQualifyingListSelectors.selectCurrentPage),
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
  
  handlePageSizeChangedOrMoved(pageOptions: PageEvent) {
    this.store.dispatch(RaceQualifyingListActions.pageSizeChangedOrPageMoved({pageOptions}))
  }
}
