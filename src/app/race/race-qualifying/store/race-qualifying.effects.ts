import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import * as RaceQualifyingListActions from './race-qualifying.actions';
import * as RaceQualifyingListSelectors from './race-qualifying.selectors';
import * as SeasonSelectors from '../../../seasons/store/seasons.selectors';
import * as RaceListSelectors from '../../race-list/store/race.selectors'
import { switchMap, map } from "rxjs";
import { RaceQualifyingListService } from "./race-qualifying.service";
import { RacesQualifyingListResponse } from "src/app/models";

@Injectable()
export class RaceQualifyingListEffects {

    constructor(
        private actions$: Actions,
        private store: Store,
        private raceQualifyingListService: RaceQualifyingListService
    ) {}

    triggerLoadRaceQualifyingList$ = createEffect(() => this.actions$.pipe(
        ofType(
            RaceQualifyingListActions.enterRaceQualifyingList,
            RaceQualifyingListActions.pageSizeChangedOrPageMoved
        ),
        map((_) => RaceQualifyingListActions.loadRaceQualifyingList())
    ));

    loadRaceQualifyingList$ = createEffect(() => this.actions$.pipe(
        ofType(RaceQualifyingListActions.loadRaceQualifyingList),
        concatLatestFrom(_ => [
            this.store.select(SeasonSelectors.selectActiveSeason),
            this.store.select(RaceListSelectors.selectActiveRaceId),
            this.store.select(RaceQualifyingListSelectors.selectRaceQualifyingListQueryParams)
        ]),
        switchMap(([_, season, round, queryParams]) => {

            return this.raceQualifyingListService
                .getRaceQualifyingListList(season, round, queryParams.offset, queryParams.limit)
                .pipe(
                    map((response: RacesQualifyingListResponse) => {
                        const { MRData: { RaceTable: { Races: races}, total: totalItems}} = response;
                        
                        return RaceQualifyingListActions.loadRaceQualifyingListSuccess(
                            { raceQualifyingList: races[0].QualifyingResults, totalItems}
                        )
                    })
                    //error handling
                );
        })
    ));
}