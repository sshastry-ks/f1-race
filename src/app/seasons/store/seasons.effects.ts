import { Injectable } from  '@angular/core'
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { filter, map, scan } from 'rxjs/operators';
import * as SeasonActions from './seasons.actions';
import * as SeasonSelectors from './seasons.selectors'

@Injectable()
export class SeasonEffects {

    constructor(private actions$: Actions, private store: Store) {}

    triggerActiveSeasonChanged$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(routerNavigatedAction),
            concatLatestFrom(() => this.store.select(SeasonSelectors.selectActiveSeason)),
            map(([_, season]) => season),
            scan((previous, currentSeason) => {
                console.log(previous, currentSeason)
                return {
                    previousSeason: previous.currentSeason,
                    currentSeason
                }
            }, { previousSeason: null, currentSeason: null}),
            filter(({previousSeason, currentSeason}) => previousSeason !== currentSeason),
            map(() => {
                console.log('herere')
                return SeasonActions.seasonSelectionChanged();
            })
        );
    })
}