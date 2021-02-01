import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonvolverComponent } from './botonvolver.component';

describe('BotonvolverComponent', () => {
  let component: BotonvolverComponent;
  let fixture: ComponentFixture<BotonvolverComponent>;

  beforeEach(async(() => {
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
