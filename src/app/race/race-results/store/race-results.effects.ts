import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as RaceResultActions from './race-results.actions';
import * as RaceResultSelectors from './race-results.selectors';
import { SeasonsSelectors } from '@seasons/store'
import * as RaceListSelectors from '../../race-list/store/race.selectors'
import { switchMap, map, filter } from "rxjs";
import { RaceResultsService } from "./race-results.service";
import { RacesResultsListResponse } from '@race/models';
import { catchError } from "rxjs";
import { of } from "rxjs";

@Injectable()
export class RaceResultsEffects {

    constructor(
        private actions$: Actions,
        private store: Store,
        private raceResultsService: RaceResultsService
    ) {}

    triggerLoadRaceResults$ = createEffect(() => this.actions$.pipe(
        ofType(
            RaceResultActions.enterRaceResultsList,
            RaceResultActions.pageSizeChangedOrPageMoved
        ),
        map((_) => RaceResultActions.loadRaceResultsList())
    ));

    loadLoadRaceResults$ = createEffect(() => this.actions$.pipe(
        ofType(RaceResultActions.loadRaceResultsList),
        concatLatestFrom(_ => [
            this.store.select(SeasonsSelectors.selectActiveSeason),
            this.store.select(RaceListSelectors.selectActiveRaceId),
            this.store.select(RaceResultSelectors.selectRaceResultsQueryParams)
        ]),
        filter(([_, season, round, _queryParams]) => {
            return season && round;
        }),
        switchMap(([_, season, round, queryParams]) => {
            return this.raceResultsService.getRaceResultsList(season, round, queryParams.offset, queryParams.limit).pipe(
                map((response: RacesResultsListResponse) => {
                    const { MRData: { RaceTable: { Races: races}, total: totalItems}} = response;
                    
                    return RaceResultActions.loadRaceResultsListSuccess({ raceResults: races[0].Results, totalItems})
                })
            )
        }),
        catchError((_) => {
            return of(RaceResultActions.loadRaceResultsListFailure());
        })
    ));
}