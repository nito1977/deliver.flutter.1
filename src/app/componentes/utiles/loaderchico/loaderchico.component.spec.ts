import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoaderchicoComponent } from './loaderchico.component';

describe('LoaderchicoComponent', () => {
  let component: LoaderchicoComponent;
  let fixture: ComponentFixture<LoaderchicoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderchicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderchicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
