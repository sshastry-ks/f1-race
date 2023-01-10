import { createAction, props } from "@ngrx/store";

export const seasonSelectionChanged = createAction(
    '[seasons selection] Season selection changed',
    props<{ newSeason: string}>()
);