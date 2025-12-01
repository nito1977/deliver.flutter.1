import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TabladetalleCompactoComponent } from './tabladetallecompacto.component';

describe('TabladetalleComponent', () => {
  let component: TabladetalleCompactoComponent;
  let fixture: ComponentFixture<TabladetalleCompactoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TabladetalleCompactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabladetalleCompactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
