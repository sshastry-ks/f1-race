import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceDescriptionComponent } from './race-description.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    RaceDescriptionComponent
  ],
  exports: [
    RaceDescriptionComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ]
})
export class RaceDescriptionModule { }
