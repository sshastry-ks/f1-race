import { Injectable } from "@angular/core";
import { ListHeaderDataFacade } from "src/app/models";
import { Observable, combineLatest, map } from 'rxjs';
import { Store } from "@ngrx/store";
import * as RaceDriverStandingsListActions from './race-driver-standings.actions';
import * as RaceDriverStandingsSelectors from './race-driver-standings.selectors';

@Injectable()
export class ListHeaderDataService implements ListHeaderDataFacade {
    
    constructor(private store: Store) {}
    
    dispatchMovePageAction(direction: number): void {
      this.store.dispatch(RaceDriverStandingsListActions.navigatePage({direction}));
    }
    dispatchPageSizeChangedAction(newPageSize: number): void {
      this.store.dispatch(RaceDriverStandingsListActions.pageSizeChanged({newPageSize}));
    }

    getViewModel$(): Observable<{
        totalPages: number;
        currentPage: number;
        currentPageSize: number;
        pageSizeOptions: number[]
    }> {
        return combineLatest([
            this.store.select(RaceDriverStandingsSelectors.selectTotalPages),
            this.store.select(RaceDriverStandingsSelectors.selectCurrnetPage),
            this.store.select(RaceDriverStandingsSelectors.selectCurrentPageSize),
            this.store.select(RaceDriverStandingsSelectors.selectPageSizeOptions)
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