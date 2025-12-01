import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabladetalleComponent } from './tabladetalle.component';

describe('TabladetalleComponent', () => {
  let component: TabladetalleComponent;
  let fixture: ComponentFixture<TabladetalleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabladetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabladetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
