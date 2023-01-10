import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceListComponent } from './race-list.component';
import { RaceDataModule } from './store/race-data.module';
import { LIST_HEADER_DATA_SERVICE } from 'src/app/models';
import { ListHeaderDataService } from './store/list-header-data.service';
import { ListHeaderModule } from 'src/app/shared/list-header/list-header.module';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    RaceListComponent
  ],
  imports: [
    CommonModule,
    RaceDataModule,
    ListHeaderModule,
    MatCardModule,
    RouterModule
  ],
  providers: [
    {
      provide: LIST_HEADER_DATA_SERVICE,
      useClass: ListHeaderDataService
    }
  ]
})
export class RaceListModule { }
