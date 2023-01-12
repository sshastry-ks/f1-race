import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as DriverActions from './drivers.actions';
import * as DriverSelectors from './drivers.selectors';
import * as SeasonSelectors from '../../seasons/store/seasons.selectors';
import * as SeasonActions from '../../seasons/store/seasons.actions';
import { switchMap, map, filter } from "rxjs";
import { DriverService } from "./drivers.service";
import { DriverListResponse } from "src/app/models";

@Injectable()
export class DriversListEffects {

    constructor(
        private actions$: Actions,
        private store: Store,
        private driverService: DriverService
    ) {}

    triggerLoadDriversList$ = createEffect(() => this.actions$.pipe(
        ofType(
            DriverActions.enterDriversList,
            DriverActions.pageSizeChangedOrPageMoved,
            DriverActions.resetPaginationParams
        ),
        map((_) => DriverActions.loadDriversList())
    ));

    loadDriversList$ = createEffect(() => this.actions$.pipe(
        ofType(DriverActions.loadDriversList),
        concatLatestFrom(_ => [
            this.store.select(SeasonSelectors.selectActiveSeason),
            this.store.select(DriverSelectors.selectDriverListQueryParams)
        ]),
        filter(([_, season, _queryParams]) => {
            return season
        }),
        switchMap(([_, season, queryParams]) => {
            return this.driverService.getDriversList(season, queryParams.offset, queryParams.limit).pipe(
                map((response: DriverListResponse) => {
                    const { MRData: { DriverTable: { Drivers: drivers}, total: totalItems}} = response;
                    return DriverActions.loadDriversListSuccess({ drivers, totalItems})
                })
                //error handling
            )
        })
    ));

    resetPaginationparams$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SeasonActions.seasonSelectionChanged),
            map((_) => {
                return DriverActions.resetPaginationParams()
            })
        )
    });
}