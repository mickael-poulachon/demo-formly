import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocinfoComponent } from './step.component';

describe('ConfirmationComponent', () => {
  let component: BlocinfoComponent;
  let fixture: ComponentFixture<BlocinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
