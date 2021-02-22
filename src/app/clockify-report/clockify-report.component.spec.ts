import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockifyReportComponent } from './clockify-report.component';

describe('ClockifyReportComponent', () => {
  let component: ClockifyReportComponent;
  let fixture: ComponentFixture<ClockifyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockifyReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockifyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
