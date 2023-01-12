import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DriverSelectors from './store/drivers.selectors';
import * as DriverActions from './store/drivers.actions';
import { combineLatest, map } from 'rxjs';
import { Driver } from '../models';
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
    this.store.select(DriverSelectors.selectAllDrivers),
    this.store.select(DriverSelectors.selectTotalDrivers),
    this.store.select(DriverSelectors.selectCurrentPageSize),
    this.store.select(DriverSelectors.selectCurrentPage),
    this.store.select(DriverSelectors.selectPageSizeOptions),
    this.store.select(DriverSelectors.SelectIsLoadingDriverList),
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
    this.store.dispatch(DriverActions.enterDriverList());
  }

  handlePageSizeChangedOrMoved(pageOptions: PageEvent) {
    this.store.dispatch(DriverActions.pageSizeChangedOrPageMoved({pageOptions}))
  }
}
