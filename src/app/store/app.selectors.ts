import { RouterReducerState } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterState } from "./app-route-serializer";

const selectRouterReducerState = createFeatureSelector<RouterReducerState<RouterState>>('router');

export const selectRouterState = createSelector(
    selectRouterReducerState,
    (routerReducerState: RouterReducerState<RouterState>) => {
        if(!routerReducerState || !routerReducerState.state) {
            return null;
        }

        return routerReducerState.state;
    }
);