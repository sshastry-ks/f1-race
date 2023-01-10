import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverdataModule } from './store/drivers-data.module';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { DriversComponent } from './drivers.component';
import { LIST_HEADER_DATA_SERVICE } from '../models';
import { ListHeaderDataService } from './store/list-header-data.service';
import { ListHeaderModule } from '../shared/list-header/list-header.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DriversComponent
  }
]


@NgModule({
  declarations: [DriversComponent],
  exports: [
    DriversComponent
  ],
  imports: [
    CommonModule,
    DriverdataModule,
    MatCardModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatButtonModule,
    ListHeaderModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: LIST_HEADER_DATA_SERVICE,
      useClass: ListHeaderDataService
    }
  ]
})
export class DriversModule { }
