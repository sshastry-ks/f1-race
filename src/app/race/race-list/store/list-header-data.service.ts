import { Injectable } from "@angular/core";
import { ListHeaderDataFacade } from "src/app/models";
import { Observable, combineLatest, map } from 'rxjs';
import { Store } from "@ngrx/store";
import * as RaceSelectors from './race.selectors';
import * as RaceActions from './race.actions';

@Injectable()
export class ListHeaderDataService implements ListHeaderDataFacade {
    
    constructor(private store: Store) {}
    
    dispatchMovePageAction(direction: number): void {
      this.store.dispatch(RaceActions.navigatePage({direction}));
    }
    dispatchPageSizeChangedAction(newPageSize: number): void {
      this.store.dispatch(RaceActions.pageSizeChanged({newPageSize}));
    }

    getViewModel$(): Observable<{
        totalPages: number;
        currentPage: number;
        currentPageSize: number;
        pageSizeOptions: number[]
    }> {
        return combineLatest([
            this.store.select(RaceSelectors.selectTotalPages),
            this.store.select(RaceSelectors.selectCurrnetPage),
            this.store.select(RaceSelectors.selectCurrentPageSize),
            this.store.select(RaceSelectors.selectPageSizeOptions)
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