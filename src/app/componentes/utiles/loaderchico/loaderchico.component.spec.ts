import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderchicoComponent } from './loaderchico.component';

describe('LoaderchicoComponent', () => {
  let component: LoaderchicoComponent;
  let fixture: ComponentFixture<LoaderchicoComponent>;

  beforeEach(async(() => {
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
