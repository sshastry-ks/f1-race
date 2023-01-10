import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DriverActions from "./store/drivers.actions";
import * as DriverSelectors from './store/drivers.selectors';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss'],
})
export class DriversComponent {
  drivers$ = this.store.select(DriverSelectors.selectAllDrivers);

  constructor(private store: Store) { }
  

  ngOnInit() {
    this.store.dispatch(DriverActions.enterDriverList());
  }
}
