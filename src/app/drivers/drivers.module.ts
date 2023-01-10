import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverdataModule } from './store/drivers-data.module';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DriversComponent } from './drivers.component';
import { LIST_HEADER_DATA_SERVICE } from '../models';
import { ListHeaderDataService } from './store/list-header-data.service';
import { ListHeaderModule } from '../shared/list-header/list-header.module';


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
    BrowserAnimationsModule,
    ListHeaderModule
  ],
  providers: [
    {
      provide: LIST_HEADER_DATA_SERVICE,
      useClass: ListHeaderDataService
    }
  ]
})
export class DriversModule { }
