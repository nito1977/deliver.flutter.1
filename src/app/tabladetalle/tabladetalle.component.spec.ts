import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabladetalleComponent } from './tabladetalle.component';

describe('TabladetalleComponent', () => {
  let component: TabladetalleComponent;
  let fixture: ComponentFixture<TabladetalleComponent>;

  beforeEach(async(() => {
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
