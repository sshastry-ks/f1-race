import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as RaceActions from './race.actions';
import * as RaceSelectors from './race.selectors';
import * as SeasonSelectors from '../../../seasons/store/seasons.selectors';
import { switchMap, map } from "rxjs";
import { RaceService } from "./race.service";
import { RacesListResponse } from "src/app/models";


@Injectable()
export class RaceEffects {

    constructor(private actions$: Actions, private store: Store, private raceService: RaceService) {}

    triggerLoadRaceList$ = createEffect(() => this.actions$.pipe(
        ofType(
            RaceActions.enterRaceList,
            RaceActions.pageSizeChangedOrPageMoved
        ),
        map((_) => RaceActions.loadRaceList())
    ));

    loadDriverList$ = createEffect(() => this.actions$.pipe(
        ofType(RaceActions.loadRaceList),
        concatLatestFrom(_ => [
            this.store.select(SeasonSelectors.selectActiveSeason),
            this.store.select(RaceSelectors.selectRaceListQueryParams)
        ]),
        switchMap(([_, season, queryParams]) => {

            return this.raceService.getRacesList(season, queryParams.offset, queryParams.limit).pipe(
                map((response: RacesListResponse) => {
                    const { MRData: { RaceTable: { Races: races}, total: totalItems}} = response;
                    return RaceActions.loadRaceListSuccess({ races, totalItems})
                })
                //error handling
            )
        })
    ));
}