import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RequestState } from "src/app/models";
import { adapter, RaceListState } from "./race.state";
import * as AppSelectors from '../../../store/app.selectors';
import { RouterState } from "src/app/store/app-route-serializer";

export const selectRaceListFeature = createFeatureSelector<RaceListState>('racesList');

const {
    selectAll,
    selectEntities
} = adapter.getSelectors();

export const SelectIsLoadingRaceList = createSelector(
    selectRaceListFeature, (state: RaceListState) => state.requestState === RequestState.LOADING
);

export const selectAllRaces = createSelector(selectRaceListFeature, selectAll);

export const selectAllEntities = createSelector(selectRaceListFeature, selectEntities);

export const selectTotalRaces = createSelector(
    selectRaceListFeature,
    (state: RaceListState) => state.totalItems
);

export const selectCurrentPageSize = createSelector(
    selectRaceListFeature,
    (state: RaceListState) => state.limit
);

export const selectCurrnetPage = createSelector(
    selectRaceListFeature,
    (state: RaceListState) => state.offset
);

export const selectTotalPages = createSelector(
    selectTotalRaces,
    selectCurrentPageSize,
    (total, pageSize) => Math.ceil(total / pageSize)
);

export const selectPageSizeOptions = createSelector(
    selectRaceListFeature,
    (state: RaceListState) => state.pageSizeOptions
);

export const selectRaceListQueryParams = createSelector(selectCurrnetPage, selectCurrentPageSize, (page, limit) => {
    return {
        offset: page * limit,
        limit
    }
});

// route params selector 
export const selectActiveRaceId = createSelector(AppSelectors.selectRouterState, (routerstate: RouterState | null) => {
    if(!routerstate || !routerstate.allParams) {
        return null;
    }

    return routerstate.allParams['raceId'] || '';
 })

export const selectActiveRaceEntity = createSelector(
    selectAllEntities,
    selectActiveRaceId,
    (entites, raceId) => {
        return entites[raceId]
    }
);