import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CampeonatosComponent } from './campeonatos.component';

describe('CampeonatosComponent', () => {
  let component: CampeonatosComponent;
  let fixture: ComponentFixture<CampeonatosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CampeonatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampeonatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
