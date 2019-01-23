import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegComponent } from './keg.component';

describe('KegComponent', () => {
  let component: KegComponent;
  let fixture: ComponentFixture<KegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
