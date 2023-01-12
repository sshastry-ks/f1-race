import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { RaceDetailsService } from "./race-details.service";
import * as RaceDetailsActions from './race-details.actions';
import * as RaceListSelectors from '../../race-list/store/race.selectors';
import { SeasonsSelectors } from '@seasons/store';
import { filter, map, switchMap } from "rxjs";
import { RacesListResponse } from "@race/models";
import { catchError } from "rxjs";
import { of } from "rxjs";


@Injectable()
export class RaceDetailsEffects {
    
    constructor(
        private actions$: Actions,
        private store: Store,
        private raceDetailsService: RaceDetailsService
    ) { }

    /**
     * We can optimize loading race details further by querying the
     * store for a specific race and only approach to the API if the store
     * doesnt have the required race details. 
     */
    loadRaceDetails$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(RaceDetailsActions.loadRaceEntity),
            concatLatestFrom(() => [
                this.store.select(SeasonsSelectors.selectActiveSeason),
                this.store.select(RaceListSelectors.selectActiveRaceId)
            ]),
            filter(([_, season, raceId]) => {
                return season && raceId;
            }),
            switchMap(([_, season, raceId]) => {
                return this.raceDetailsService.getRacesDetails(season, raceId).pipe(
                    map((response: RacesListResponse) => {
                        const {MRData: { RaceTable: { Races: races}}} = response;

                        return RaceDetailsActions.loadRaceEntitySuccess({race: races[0]})
                    })
                )
            }),
            catchError((_) => {
                return of(RaceDetailsActions.loadRaceEntityFailure());
            })
        )
    });
}