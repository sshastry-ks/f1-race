import { Injectable } from "@angular/core";
import { ListHeaderDataFacade } from "src/app/models";
import { Observable, combineLatest, map } from 'rxjs';
import { Store } from "@ngrx/store";
import * as DriverSelectors from './drivers.selectors';
import * as DriverActions from './drivers.actions';

@Injectable()
export class DriversListHeaderDataService implements ListHeaderDataFacade {
    
    constructor(private store: Store) {}
    
    dispatchMovePageAction(direction: number): void {
      this.store.dispatch(DriverActions.navigatePage({direction}));
    }
    dispatchPageSizeChangedAction(newPageSize: number): void {
      this.store.dispatch(DriverActions.pageSizeChanged({newPageSize}));
    }

    getViewModel$(): Observable<{
        totalPages: number;
        currentPage: number;
        currentPageSize: number;
        pageSizeOptions: number[]
    }> {
        return combineLatest([
            this.store.select(DriverSelectors.selectTotalPages),
            this.store.select(DriverSelectors.selectCurrentPage),
            this.store.select(DriverSelectors.selectCurrentPageSize),
            this.store.select(DriverSelectors.selectPageSizeOptions)
          ]).pipe(
            map(([totalPages, currentPage, currentPageSize, pageSizeOptions]) => {
              return {
                totalPages,
                currentPageSize,
                currentPage,
                pageSizeOptions
              }
            })
          );
    }
}