import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { StatusCountsService } from "./status-counts.service";
import * as StatusCountsActions from './status-counts.actions';
import { SeasonsSelectors } from '@seasons/store'
import { filter, map, switchMap } from 'rxjs/operators';
import { StatusCount, StatusCountsResponse } from "@seasons/status-counts/models";

@Injectable()
export class StatusCountsEffects {

    constructor(
        private actions$: Actions,
        private store: Store,
        private statusCountsService: StatusCountsService
    ) {}

    triggerStatusCounts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(StatusCountsActions.enterStatusCounts),
            concatLatestFrom(() =>   this.store.select(SeasonsSelectors.selectActiveSeason)),
            filter(([_, currentSeason]) => currentSeason === '2021'),
            map(([_, season]) => {
                return StatusCountsActions.loadStatusCounts({season});
            })
        )
    });

    loadStatusCounts$ = createEffect(() => {
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

                        return StatusCountsActions.loadStatusCountsSuccess({statusCounts: requiredStatusCounts})
                    })
                )
            })

        )
    })
}