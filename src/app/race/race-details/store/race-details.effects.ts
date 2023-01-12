import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { RaceDetailsService } from "./race-details.service";
import * as RaceDetailsActions from './race-details.actions';
import * as RaceListSelectors from '../../race-list/store/race.selectors';
import * as SeasonSelectors from '../../../seasons/store/seasons.selectors';
import { filter, map, switchMap } from "rxjs";
import { RacesListResponse } from "src/app/models";


@Injectable()
export class RaceDetailsEffects {
    
    constructor(
        private actions$: Actions,
        private store: Store,
        private raceDetailsService: RaceDetailsService
    ) { }

    loadRaceDetails$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(RaceDetailsActions.loadRaceEntity),
            concatLatestFrom(() => [
                this.store.select(SeasonSelectors.selectActiveSeason),
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
            })
        )
    });
}