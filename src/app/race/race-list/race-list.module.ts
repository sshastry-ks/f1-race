import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceListComponent } from './race-list.component';
import { RaceDataModule } from './store/race-data.module';

@NgModule({
  declarations: [
    RaceListComponent
  ],
  imports: [
    CommonModule,
    RaceDataModule
  ]
})
export class RaceListModule { }
