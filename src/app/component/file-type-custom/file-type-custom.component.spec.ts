import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTypeCustomComponent } from './file-type-custom.component';

describe('FileTypeCustomComponent', () => {
  let component: FileTypeCustomComponent;
  let fixture: ComponentFixture<FileTypeCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileTypeCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTypeCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
