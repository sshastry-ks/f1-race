import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusCountsComponent } from './status-counts.component';
import { StatusCountsDataModule } from './store/status-counts.data.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    StatusCountsComponent
  ],
  exports: [
    StatusCountsComponent
  ],
  imports: [
    CommonModule,
    StatusCountsDataModule,
    MatListModule
  ]
})
export class StatusCountsModule { }
