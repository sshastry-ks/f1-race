import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { StatusCountsService } from "./status-counts.service";
import * as StatusCountsActions from './status-counts.actions';
import * as SeasonSelectors from '../../store/seasons.selectors';
import { filter, map, switchMap } from 'rxjs/operators';
import { StatusCount, StatusCountsResponse } from "src/app/models";

@Injectable()
export class StatusCountsEffects {

    constructor(
        private actions$: Actions,
        private store: Store,
        private statusCountsService: StatusCountsService
    ) {}

    triggercarStatusCounts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(StatusCountsActions.enterSeasonDetails),
            concatLatestFrom(() =>   this.store.select(SeasonSelectors.selectActiveSeason)),
            filter(([_, currentSeason]) => currentSeason === '2021'),
            map(([_, season]) => {
                return StatusCountsActions.loadStatusCounts({season});
            })
        )
    });

    loadStatusDefinitions$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(StatusCountsActions.loadStatusCounts),
            switchMap(({season}) => {
                return this.statusCountsService.getStatusCounts(season).pipe(
                    map((response: StatusCountsResponse) => {
                        const { MRData: { StatusTable: { Status: status}}} = response;
                        const requiredStatusCounts = status.filter(
                            (statusCount: StatusCount) =>
                                statusCount.status.toLocaleLowerCase().includes('finished') ||
                                statusCount.status.toLocaleLowerCase().includes('accident') ||
                                statusCount.status.toLocaleLowerCase().includes('+1 lap')
                        );

                        return StatusCountsActions.loadCarStatusCountsSuccess({statusCounts: requiredStatusCounts})
                    })
                )
            })

        )
    })
}