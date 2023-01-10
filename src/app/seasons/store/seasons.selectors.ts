import { createSelector } from "@ngrx/store";
import { RouterState } from "src/app/store/app-route-serializer";
import * as AppSelectors from '../../store/app.selectors';

// route params selector 
export const selectCurrentSeason = createSelector(AppSelectors.selectRouterState, (routerstate: RouterState | null) => {
    if(!routerstate || !routerstate.allParams) {
        return null;
    }
    console.log(routerstate.allParams)
    return routerstate.allParams['season'] || '';
 })