import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as RaceActions from './race.actions';
import * as RaceSelectors from './race.selectors';
import * as SeasonSelectors from '../../../seasons/store/seasons.selectors';
import * as SeasonActions from '../../../seasons/store/seasons.actions';
import { switchMap, map } from "rxjs";
import { RaceService } from "./race.service";
import { RacesListResponse } from "src/app/models";


@Injectable()
export class RaceEffects {

    constructor(private actions$: Actions, private store: Store, private raceService: RaceService) {}

    triggerLoadRaceList$ = createEffect(() => this.actions$.pipe(
        ofType(
            RaceActions.enterRaceList,
            RaceActions.pageSizeChanged,
            RaceActions.navigatePage,
            RaceActions.resetPaginationParams
        ),
        map((_) => RaceActions.loadRaceList())
    ));

    loadDriverList$ = createEffect(() => this.actions$.pipe(
        ofType(RaceActions.loadRaceList),
        concatLatestFrom(_ => [
            this.store.select(SeasonSelectors.selectCurrentSeason),
            this.store.select(RaceSelectors.selectRaceQueryParams)
        ]),
        switchMap(([_, season, queryParams]) => {

            return this.raceService.getRacesList(season, queryParams.offset * queryParams.limit, queryParams.limit).pipe(
                map((response: RacesListResponse) => {
                    const { MRData: { RaceTable: { Races: races}, total: totalItems}} = response;
                    return RaceActions.loadRaceListSuccess({ races, totalItems})
                })
                //error handling
            )
        })
    ));

    resetPaginationparams$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SeasonActions.seasonSelectionChanged),
            map((_) => RaceActions.resetPaginationParams())
        )
    });


}