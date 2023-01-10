import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonsComponent } from './seasons.component';
import { StoreModule } from '@ngrx/store';
import { SeasonReducer } from './store/seasons.reducer';
import { DriversModule } from '../drivers/drivers.module';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from '../drivers/drivers.component';
import { RaceListComponent } from '../race/race-list/race-list.component';
import { RaceListModule } from '../race/race-list/race-list.module';

const routes: Routes = [
  
]

@NgModule({
  declarations: [SeasonsComponent],
  exports: [SeasonsComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('seasons', SeasonReducer),
    MatCardModule,
    MatTabsModule,
    RouterModule.forChild(routes)
  ]
})
export class SeasonsModule { }
