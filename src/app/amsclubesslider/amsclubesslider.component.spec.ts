import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmsclubessliderComponent } from './amsclubesslider.component';

describe('AmsclubessliderComponent', () => {
  let component: AmsclubessliderComponent;
  let fixture: ComponentFixture<AmsclubessliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmsclubessliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmsclubessliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
