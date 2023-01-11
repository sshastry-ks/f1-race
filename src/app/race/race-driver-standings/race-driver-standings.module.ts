import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceDriverStandingsComponent } from './race-driver-standings.component';
import { RaceDriverStandingsDataModule } from './store/race-driver-standings.data.module';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'src/app/shared/table/table.module';

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
