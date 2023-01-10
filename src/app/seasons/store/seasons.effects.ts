import { Injectable } from  '@angular/core'
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { routerRequestAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as SeasonActions from './seasons.actions';
import * as SeasonSelectors from './seasons.selectors'
@Injectable()
export class SeasonEffects {

    constructor(private actions$: Actions, private store: Store) {}

    triggerSeasonChanged$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(routerRequestAction),
            concatLatestFrom(() => this.store.select(SeasonSelectors.selectCurrentSeason)),
            filter(([{payload: { event }}, currentSeason]) => {
                console.log(event.url.indexOf(currentSeason) < 0)
                if(event.url.indexOf(currentSeason) < 0) {
                    return true;
                }

                return false;
            }),
            map(() => {
                console.log('herer')
                return SeasonActions.seasonSelectionChanged();
            })
        )
    })
}