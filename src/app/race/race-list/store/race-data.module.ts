import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { RaceEffects } from "./race.effects";
import { RaceListReducer } from "./race.reducer";
import { RaceService } from "./race.service";

@NgModule({
    imports: [
        StoreModule.forFeature('racesList', RaceListReducer),
        EffectsModule.forFeature([RaceEffects])
    ],
    providers: [
        RaceService
    ]
})
export class RaceDataModule {}