import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AmscampstatsComponent } from './amscampstats.component';

describe('AmscampstatsComponent', () => {
  let component: AmscampstatsComponent;
  let fixture: ComponentFixture<AmscampstatsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmscampstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmscampstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
