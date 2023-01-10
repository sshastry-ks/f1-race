import { Injectable } from "@angular/core";
import { ListHeaderDataFacade } from "src/app/models";
import { Observable, combineLatest, map } from 'rxjs';
import { Store } from "@ngrx/store";
import * as RaceResultSelectors from './race-results.selectors';
import * as RaceResultActions from './race-results.actions';

@Injectable()
export class ListHeaderDataService implements ListHeaderDataFacade {
    
    constructor(private store: Store) {}
    
    dispatchMovePageAction(direction: number): void {
      this.store.dispatch(RaceResultActions.navigatePage({direction}));
    }
    dispatchPageSizeChangedAction(newPageSize: number): void {
      this.store.dispatch(RaceResultActions.pageSizeChanged({newPageSize}));
    }

    getViewModel$(): Observable<{
        totalPages: number;
        currentPage: number;
        currentPageSize: number;
        pageSizeOptions: number[]
    }> {
        return combineLatest([
            this.store.select(RaceResultSelectors.selectTotalPages),
            this.store.select(RaceResultSelectors.selectCurrnetPage),
            this.store.select(RaceResultSelectors.selectCurrentPageSize),
            this.store.select(RaceResultSelectors.selectPageSizeOptions)
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