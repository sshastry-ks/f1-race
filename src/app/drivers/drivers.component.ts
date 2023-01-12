import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DriversListActions, DriversListSelectors } from './store';
import { combineLatest, map } from 'rxjs';
import { Driver } from '@drivers/models';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent {
  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (item: Driver) => `${item.familyName},${item.givenName}`,
    },
    {
      columnDef: 'code',
      header: 'Code',
      cell: (item: Driver) => `${item.code}`,
    },
    {
      columnDef: 'permanentNumber',
      header: 'Permanent Number',
      cell: (item: Driver) => `${item.permanentNumber}`,
    },
    {
      columnDef: 'dob',
      header: 'Date of Birth',
      cell: (item: Driver) => `${item.dateOfBirth}`,
    },
    {
      columnDef: 'nationality',
      header: 'Nationality',
      cell: (item: Driver) => `${item.nationality}`,
    }
];

displayedColumns = this.columns.map(c => c.columnDef);

vm$ = combineLatest([
    this.store.select(DriversListSelectors.selectAllDrivers),
    this.store.select(DriversListSelectors.selectTotalDrivers),
    this.store.select(DriversListSelectors.selectCurrentPageSize),
    this.store.select(DriversListSelectors.selectCurrentPage),
    this.store.select(DriversListSelectors.selectPageSizeOptions),
    this.store.select(DriversListSelectors.SelectIsLoadingDriverList),
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
    this.store.dispatch(DriversListActions.enterDriversList());
  }

  handlePageSizeChangedOrMoved(pageOptions: PageEvent) {
    this.store.dispatch(DriversListActions.pageSizeChangedOrPageMoved({pageOptions}))
  }
}
