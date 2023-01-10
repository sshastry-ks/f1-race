import { Injectable } from "@angular/core";
import { ListHeaderDataFacade } from "src/app/models";
import { Observable, combineLatest, map } from 'rxjs';
import { Store } from "@ngrx/store";
import * as RaceQualifyingListActions from './race-qualifying.actions';
import * as RaceQualifyingListSelectors from './race-qualifying.selectors';

@Injectable()
export class ListHeaderDataService implements ListHeaderDataFacade {
    
    constructor(private store: Store) {}
    
    dispatchMovePageAction(direction: number): void {
      this.store.dispatch(RaceQualifyingListActions.navigatePage({direction}));
    }
    dispatchPageSizeChangedAction(newPageSize: number): void {
      this.store.dispatch(RaceQualifyingListActions.pageSizeChanged({newPageSize}));
    }

    getViewModel$(): Observable<{
        totalPages: number;
        currentPage: number;
        currentPageSize: number;
        pageSizeOptions: number[]
    }> {
        return combineLatest([
            this.store.select(RaceQualifyingListSelectors.selectTotalPages),
            this.store.select(RaceQualifyingListSelectors.selectCurrnetPage),
            this.store.select(RaceQualifyingListSelectors.selectCurrentPageSize),
            this.store.select(RaceQualifyingListSelectors.selectPageSizeOptions)
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