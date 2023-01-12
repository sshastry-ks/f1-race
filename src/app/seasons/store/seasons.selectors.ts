import { createSelector } from "@ngrx/store";
import { RouterState } from "src/app/store/app-route-serializer";
import { AppSelectors } from '@app/store';

export const selectActiveSeason = createSelector(
    AppSelectors.selectRouterState,
    (routerstate: RouterState | null) => {
        if(!routerstate || !routerstate.allParams) {
            return null;
        }

        return routerstate.allParams['season'] || '';
    }
);

export const selectIsCurrentSeason2021 = createSelector(
    selectActiveSeason, (selectedSeason: string | null) => {
        if(!selectedSeason) {
            return null;
        }

        return selectedSeason === '2021';
    }
)