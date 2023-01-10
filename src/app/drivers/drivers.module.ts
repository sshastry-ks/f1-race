import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverdataModule } from './store/drivers-data.module';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {MatButtonModule} from '@angular/material/button';
import { DriversComponent } from './drivers.component';
import { ListHeaderComponent } from './list-header/list-header.component';


@NgModule({
  declarations: [DriversComponent, ListHeaderComponent],
  exports: [
    DriversComponent
  ],
  imports: [
    CommonModule,
    DriverdataModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
  ]
})
export class DriversModule { }
