import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceDriverStandingsComponent } from './race-driver-standings.component';
import { LIST_HEADER_DATA_SERVICE } from 'src/app/models';
import { ListHeaderDataService } from './store/list-header-data.service';
import { MatCardModule } from '@angular/material/card';
import { ListHeaderModule } from 'src/app/shared/list-header/list-header.module';
import { RaceDriverStandingsDataModule } from './store/race-driver-standings.data.module';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [
    CommonModule,
    MatCardModule,
    ListHeaderModule,
    RaceDriverStandingsDataModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: LIST_HEADER_DATA_SERVICE,
      useClass: ListHeaderDataService
    }
  ]
})
export class RaceDriverStandingsModule { }
