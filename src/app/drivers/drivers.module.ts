import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverdataModule } from './store/drivers-data.module';
import { DriversComponent } from './drivers.component';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from '../shared/table/table.module';

const routes: Routes = [
  {
    path: '',
    component: DriversComponent
  }
];

@NgModule({
  declarations: [DriversComponent],
  exports: [
    DriversComponent
  ],
  imports: [
    CommonModule,
    DriverdataModule,
    TableModule,
    RouterModule.forChild(routes)
  ]
})
export class DriversModule { }
