import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as RaceDriverStandingsListActions from './race-driver-standings.actions';
import * as RaceDriverStandingsSelectors from './race-driver-standings.selectors';
import { SeasonsSelectors } from '@seasons/store'
import * as RaceListSelectors from '../../race-list/store/race.selectors'
import { switchMap, map } from "rxjs";
import { RaceDriverStandingsListService } from "./race-driver-standings.service";
import { RaceDriverStandingsResponse } from '@race/models';


@Injectable()
export class RaceDriverStandingsListEffects {

    constructor(
        private actions$: Actions,
        private store: Store,
        private raceDriverStandingsListService: RaceDriverStandingsListService
    ) {}

    triggerLoadRaceDriverStandingsList$ = createEffect(() => this.actions$.pipe(
        ofType(
            RaceDriverStandingsListActions.enterRaceDriverStandingsList,
            RaceDriverStandingsListActions.pageSizeChangedOrPageMoved,
        ),
        map((_) => RaceDriverStandingsListActions.loadRaceDriverStandingsList())
    ));

    loadRaceDriverStandingsList$ = createEffect(() => this.actions$.pipe(
        ofType(RaceDriverStandingsListActions.loadRaceDriverStandingsList),
        concatLatestFrom(_ => [
            this.store.select(SeasonsSelectors.selectActiveSeason),
            this.store.select(RaceListSelectors.selectActiveRaceId),
            this.store.select(RaceDriverStandingsSelectors.selectRaceDriverStandingsListQueryParams)
        ]),
        switchMap(([_, season, round, queryParams]) => {
            return this.raceDriverStandingsListService
                .getRaceDriverStandingsListList(season, round, queryParams.offset, queryParams.limit)
                .pipe(
                    map((response: RaceDriverStandingsResponse) => {
                        const { MRData: { StandingsTable: { StandingsLists: standingsList}, total: totalItems}} = response;
                        
                        return RaceDriverStandingsListActions.loadRaceDriverStandingsListSuccess(
                            { driverStandingsList: standingsList[0].DriverStandings, totalItems}
                        );
                    })
                //error handling
                );
        })
    ));
}