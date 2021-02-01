import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmscardcarrouselComponent } from './amscardcarrousel.component';

describe('AmscardcarrouselComponent', () => {
  let component: AmscardcarrouselComponent;
  let fixture: ComponentFixture<AmscardcarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmscardcarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmscardcarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
