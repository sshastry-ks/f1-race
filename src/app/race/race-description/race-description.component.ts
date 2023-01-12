import { Component, Input } from '@angular/core';
import { Race } from '@race/models';

@Component({
  selector: 'app-race-description',
  templateUrl: './race-description.component.html',
  styleUrls: ['./race-description.component.scss']
})
export class RaceDescriptionComponent {
  @Input() raceEntity!: Race | null;
}
