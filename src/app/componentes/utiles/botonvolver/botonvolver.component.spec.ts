import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BotonvolverComponent } from './botonvolver.component';

describe('BotonvolverComponent', () => {
  let component: BotonvolverComponent;
  let fixture: ComponentFixture<BotonvolverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonvolverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonvolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
