import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceQualifyingComponent } from './race-qualifying.component';
import { LIST_HEADER_DATA_SERVICE } from 'src/app/models';
import { ListHeaderDataService } from './store/list-header-data.service';
import { MatCardModule } from '@angular/material/card';
import { ListHeaderModule } from 'src/app/shared/list-header/list-header.module';
import { RaceResultsDataModule } from './store/race-qualifying.data.module';


@NgModule({
  declarations: [
    RaceQualifyingComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ListHeaderModule,
    RaceResultsDataModule
  ],
  providers: [
    {
      provide: LIST_HEADER_DATA_SERVICE,
      useClass: ListHeaderDataService
    }
  ]
})
export class RaceQualifyingModule { }
