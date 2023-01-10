import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as DriverActions from './drivers.actions';
import * as DriverSelectors from './drivers.selectors';
import * as SeasonSelectors from '../../seasons/store/seasons.selectors';
import * as SeasonActions from '../../seasons/store/seasons.actions';
import { switchMap, map } from "rxjs";
import { DriverService } from "./drivers.service";
import { DriversListResponse } from "src/app/models";


@Injectable()
export class DriverEffects {

    constructor(private actions$: Actions, private store: Store, private driverService: DriverService) {}

    triggerLoadDriversList$ = createEffect(() => this.actions$.pipe(
        ofType(
            DriverActions.enterDriverList,
            DriverActions.pageSizeChanged,
            DriverActions.navigatePage,
            DriverActions.resetPaginationParams
        ),
        map((_) => DriverActions.loadDriversList())
    ));

    loadDriverList$ = createEffect(() => this.actions$.pipe(
        ofType(DriverActions.loadDriversList),
        concatLatestFrom(_ => [
            this.store.select(SeasonSelectors.selectCurrentSeason),
            this.store.select(DriverSelectors.selectDriverQueryParams)
        ]),
        switchMap(([_, season, queryParams]) => {

            return this.driverService.getDriversList(season, queryParams.offset * queryParams.limit, queryParams.limit).pipe(
                map((response: DriversListResponse) => {
                    const { MRData: { DriverTable: { Drivers: drivers}, total: totalItems}} = response;
                    console.log(drivers, totalItems)
                    return DriverActions.loadDriversListSuccess({ drivers, totalItems})
                })
                //error handling
            )
        })
    ));

    resetPaginationparams$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SeasonActions.seasonSelectionChanged),
            map((_) => DriverActions.resetPaginationParams())
        )
    });


}