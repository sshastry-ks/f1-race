import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, map } from 'rxjs';
import * as DriverSelectors from '../store/drivers.selectors';
import * as DriverActions from '../store/drivers.actions';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent {

  constructor(private store: Store) {}

  vm$ = combineLatest([
    this.store.select(DriverSelectors.selectTotalPages),
    this.store.select(DriverSelectors.selectCurrnetPage),
    this.store.select(DriverSelectors.selectCurrentPageSize),
    this.store.select(DriverSelectors.selectPageSizeOptions)
  ]).pipe(
    map(([totalPages, currnetPage, currentPageSize, pageSizeOptions]) => {
      return {
        totalPages,
        currentPageSize,
        currnetPage,
        pageSizeOptions
      }
    })
  );

  movePage(direction: number) {
    this.store.dispatch(DriverActions.navigatePage({direction}));
  }

  updatePageSize(newPageSize: number) {
    this.store.dispatch(DriverActions.pageSizeChanged({newPageSize}));
  }

}
