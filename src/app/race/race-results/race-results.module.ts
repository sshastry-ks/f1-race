import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceResultsComponent } from './race-results.component';
import { RaceResultsDataModule } from './store/race-results.data.module';
import { MatCardModule } from '@angular/material/card';
import { ListHeaderModule } from 'src/app/shared/list-header/list-header.module';
import { LIST_HEADER_DATA_SERVICE } from 'src/app/models';
import { ListHeaderDataService } from './store/list-header-data.service';


@NgModule({
  declarations: [
    RaceResultsComponent
  ],
  imports: [
    CommonModule,
    RaceResultsDataModule,
    ListHeaderModule,
    MatCardModule,
  ],
  providers: [
    {
      provide: LIST_HEADER_DATA_SERVICE,
      useClass: ListHeaderDataService
    }
  ]
})
export class RaceResultsModule { }
