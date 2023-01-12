import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { RouterState } from "./app-route-serializer";

export interface State {
    router: RouterReducerState<RouterState>;
}
    
export const reducers: ActionReducerMap<State> = {
    router: routerReducer
};