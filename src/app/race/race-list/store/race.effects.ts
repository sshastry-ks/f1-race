import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as RaceListActions from './race.actions';
import * as RaceListSelectors from './race.selectors';
import { SeasonsSelectors } from '@seasons/store'
import { switchMap, map } from "rxjs";
import { RaceService } from "./race.service";
import { RacesListResponse } from "@race/models";

@Injectable()
export class RaceListEffects {

    constructor(private actions$: Actions, private store: Store, private raceService: RaceService) {}

    triggerLoadRaceList$ = createEffect(() => this.actions$.pipe(
        ofType(
            RaceListActions.enterRaceList,
            RaceListActions.pageSizeChangedOrPageMoved
        ),
        map((_) => RaceListActions.loadRaceList())
    ));

    loadRaceList$ = createEffect(() => this.actions$.pipe(
        ofType(RaceListActions.loadRaceList),
        concatLatestFrom(_ => [
            this.store.select(SeasonsSelectors.selectActiveSeason),
            this.store.select(RaceListSelectors.selectRaceListQueryParams)
        ]),
        switchMap(([_, season, queryParams]) => {

            return this.raceService.getRacesList(season, queryParams.offset, queryParams.limit).pipe(
                map((response: RacesListResponse) => {
                    const { MRData: { RaceTable: { Races: races}, total: totalItems}} = response;
                    return RaceListActions.loadRaceListSuccess({ races, totalItems})
                })
                //error handling
            )
        })
    ));
}