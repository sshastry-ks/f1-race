import { Component } from '@angular/core';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.scss']
})
export class SeasonDetailsComponent {
  navLinks = [
    {
        label: 'Drivers',
        path: './drivers',
    }, {
        label: 'Races',
        path: './races',
    }
  ];
}
