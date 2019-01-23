import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKegsComponent } from './edit-kegs.component';

describe('EditKegsComponent', () => {
  let component: EditKegsComponent;
  let fixture: ComponentFixture<EditKegsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKegsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
