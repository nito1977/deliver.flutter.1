import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PartidoeventosComponent } from './partidoeventos.component';

describe('PartidoeventosComponent', () => {
  let component: PartidoeventosComponent;
  let fixture: ComponentFixture<PartidoeventosComponent>;

  beforeEach(waitForAsync(() => {
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
