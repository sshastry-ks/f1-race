import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { ListHeaderDataService } from "./list-header-data.service";
import { RaceEffects } from "./race.effects";
import { RaceReducer } from "./race.reducer";
import { RaceService } from "./race.service";

@NgModule({
    imports: [
        StoreModule.forFeature('races', RaceReducer),
        EffectsModule.forFeature([RaceEffects])
    ],
    providers: [
        RaceService,
        ListHeaderDataService
    ]
})
export class RaceDataModule {}