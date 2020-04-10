import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositionComponent } from './confirmation.component';

describe('ConfirmationComponent', () => {
  let component: DispositionComponent;
  let fixture: ComponentFixture<DispositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
