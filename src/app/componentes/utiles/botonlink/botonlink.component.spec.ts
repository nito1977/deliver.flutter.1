import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonlinkComponent } from './botonlink.component';

describe('BotonlinkComponent', () => {
  let component: BotonlinkComponent;
  let fixture: ComponentFixture<BotonlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
