import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BoletinComponent } from './boletin.component';

describe('BoletinComponent', () => {
  let component: BoletinComponent;
  let fixture: ComponentFixture<BoletinComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BoletinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
