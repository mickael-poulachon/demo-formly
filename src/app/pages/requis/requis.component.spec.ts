import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisComponent } from './requis.component';

describe('RequisComponent', () => {
  let component: RequisComponent;
  let fixture: ComponentFixture<RequisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
