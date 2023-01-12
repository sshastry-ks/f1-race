import { createAction, props } from "@ngrx/store";
import { Race } from "@race/models";

export const loadRaceEntity = createAction(
    '[Race Details Page] Load Race entity'
);

// API actions
export const loadRaceEntitySuccess = createAction(
    '[Race Details Effects] Load Race entity success',
    props<{ race: Race}>()
);

export const loadRaceEntityFailure = createAction(
    '[Race Details Effects] Load Race entity failure',
    props<{ error: any}>()
);