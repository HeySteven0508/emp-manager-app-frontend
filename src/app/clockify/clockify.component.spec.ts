import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockifyComponent } from './clockify.component';

describe('ClockifyComponent', () => {
  let component: ClockifyComponent;
  let fixture: ComponentFixture<ClockifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
