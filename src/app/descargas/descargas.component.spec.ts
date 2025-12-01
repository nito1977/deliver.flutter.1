import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DescargasComponent } from './descargas.component';

describe('DescargasComponent', () => {
  let component: DescargasComponent;
  let fixture: ComponentFixture<DescargasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DescargasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
