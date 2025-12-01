import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AmsbotonesutilesComponent } from './amsbotonesutiles.component';

describe('AmsbotonesutilesComponent', () => {
  let component: AmsbotonesutilesComponent;
  let fixture: ComponentFixture<AmsbotonesutilesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmsbotonesutilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmsbotonesutilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
