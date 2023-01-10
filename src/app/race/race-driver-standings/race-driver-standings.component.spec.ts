import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceDriverStandingsComponent } from './race-driver-standings.component';

describe('RaceDriverStandingsComponent', () => {
  let component: RaceDriverStandingsComponent;
  let fixture: ComponentFixture<RaceDriverStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceDriverStandingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceDriverStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
