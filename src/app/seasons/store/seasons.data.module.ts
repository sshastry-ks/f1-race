import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { SeasonsEffects } from "./seasons.effects";

@NgModule({
    imports: [
        EffectsModule.forFeature([SeasonsEffects])
    ]
})
export class SeasonsDataModule {}