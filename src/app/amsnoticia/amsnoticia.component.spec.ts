import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AmsnoticiaComponent } from './amsnoticia.component';

describe('AmsnoticiaComponent', () => {
  let component: AmsnoticiaComponent;
  let fixture: ComponentFixture<AmsnoticiaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AmsnoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmsnoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
