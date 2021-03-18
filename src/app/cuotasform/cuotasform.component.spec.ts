import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuotasformComponent } from './cuotasform.component';

describe('CuotasformComponent', () => {
  let component: CuotasformComponent;
  let fixture: ComponentFixture<CuotasformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuotasformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuotasformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
