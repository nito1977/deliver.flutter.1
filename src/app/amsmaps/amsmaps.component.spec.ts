import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AmsmapsComponent } from './amsmaps.component';

describe('AmsmapsComponent', () => {
  let component: AmsmapsComponent;
  let fixture: ComponentFixture<AmsmapsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmsmapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmsmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
