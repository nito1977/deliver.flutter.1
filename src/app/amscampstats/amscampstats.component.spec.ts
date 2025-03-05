import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmscampstatsComponent } from './amscampstats.component';

describe('AmscampstatsComponent', () => {
  let component: AmscampstatsComponent;
  let fixture: ComponentFixture<AmscampstatsComponent>;

  beforeEach(async(() => {
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
