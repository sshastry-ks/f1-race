import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCountsComponent } from './status-counts.component';

describe('StatusCountsComponent', () => {
  let component: StatusCountsComponent;
  let fixture: ComponentFixture<StatusCountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusCountsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
