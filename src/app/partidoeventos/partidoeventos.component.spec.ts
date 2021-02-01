import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidoeventosComponent } from './partidoeventos.component';

describe('PartidoeventosComponent', () => {
  let component: PartidoeventosComponent;
  let fixture: ComponentFixture<PartidoeventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidoeventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidoeventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
