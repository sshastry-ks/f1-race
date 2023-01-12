import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceDriverStandingsComponent } from './race-driver-standings.component';
import { RaceDriverStandingsDataModule } from './store';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from '@app/shared';

const routes: Routes = [
  {
    path: '',
    component: RaceDriverStandingsComponent
  }
]

@NgModule({
  declarations: [
    RaceDriverStandingsComponent
  ],
  exports: [
    RaceDriverStandingsComponent
  ],
  imports: [
    CommonModule,
    RaceDriverStandingsDataModule,
    TableModule,
    RouterModule.forChild(routes)
  ],
})
export class RaceDriverStandingsModule { }
