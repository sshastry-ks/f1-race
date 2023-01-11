import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as RaceResultActions from './race-results.actions';
import * as RaceResultSelectors from './race-results.selectors';
import * as SeasonSelectors from '../../../seasons/store/seasons.selectors';
import * as SeasonActions from '../../../seasons/store/seasons.actions';
import * as RaceListSelectors from '../../race-list/store/race.selectors'
import { switchMap, map, filter } from "rxjs";
import { RaceResultService } from "./race-results.service";
import { RacesResultsListResponse } from "src/app/models";
import { routerRequestAction } from "@ngrx/router-store";


@Injectable()
export class RaceResultsEffects {

    constructor(private actions$: Actions, private store: Store, private raceResultsService: RaceResultService) {}

    triggerLoadRaceList$ = createEffect(() => this.actions$.pipe(
        ofType(
            RaceResultActions.enterRaceResultList,
            RaceResultActions.pageSizeChanged,
            RaceResultActions.navigatePage,
            RaceResultActions.resetPaginationParams
        ),
        map((_) => RaceResultActions.loadRaceResultList())
    ));

    loadDriverList$ = createEffect(() => this.actions$.pipe(
        ofType(RaceResultActions.loadRaceResultList),
        concatLatestFrom(_ => [
            this.store.select(SeasonSelectors.selectActiveSeason),
            this.store.select(RaceListSelectors.selectActiveRaceId),
            this.store.select(RaceResultSelectors.selectRaceResultsQueryParams)
        ]),
        filter(([_, season, round, _queryParams]) => {
            return season && round;
        }),
        switchMap(([_, season, round, queryParams]) => {
            return this.raceResultsService.getRaceResultsList(season, round, queryParams.offset * queryParams.limit, queryParams.limit).pipe(
                map((response: RacesResultsListResponse) => {
                    const { MRData: { RaceTable: { Races: races}, total: totalItems}} = response;
                    
                    return RaceResultActions.loadRaceResultListSuccess({ raceResults: races[0].Results, totalItems})
                })
                //error handling
            )
        })
    ));

    resetPaginationparams$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(SeasonActions.seasonSelectionChanged),
            map((_) => RaceResultActions.resetPaginationParams())
        )
    });

    // triggerActiveRaceIdChanged$ = createEffect(() => {
    //     return this.actions$.pipe(
    //         ofType(routerRequestAction),
    //         concatLatestFrom(() => this.store.select(RaceListSelectors.selectActiveRaceId)),
    //         filter(([{payload: { event }}, activeRaceId]) => {
    //             console.log(event.url.indexOf(activeRaceId) < 0)
    //             if(event.url.indexOf(activeRaceId) < 0) {
    //                 return true;
    //             }

    //             return false;
    //         }),
    //         map(() => {
    //             return SeasonActions.seasonSelectionChanged();
    //         })
    //     )
    // })
}