import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaceDetailsComponent } from './race-details.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    RaceDetailsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule
  ]
})
export class RaceDetailsModule { }
