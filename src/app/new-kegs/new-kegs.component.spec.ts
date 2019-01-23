import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewKegsComponent } from './new-kegs.component';

describe('NewKegsComponent', () => {
  let component: NewKegsComponent;
  let fixture: ComponentFixture<NewKegsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewKegsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewKegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
