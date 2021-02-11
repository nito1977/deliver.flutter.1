import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmsmapsComponent } from './amsmaps.component';

describe('AmsmapsComponent', () => {
  let component: AmsmapsComponent;
  let fixture: ComponentFixture<AmsmapsComponent>;

  beforeEach(async(() => {
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
