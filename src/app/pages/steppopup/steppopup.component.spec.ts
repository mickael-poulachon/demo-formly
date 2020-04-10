import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteppopupComponent } from './step.component';

describe('ConfirmationComponent', () => {
  let component: SteppopupComponent;
  let fixture: ComponentFixture<SteppopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteppopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteppopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
