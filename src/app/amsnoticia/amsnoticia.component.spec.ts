import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmsnoticiaComponent } from './amsnoticia.component';

describe('AmsnoticiaComponent', () => {
  let component: AmsnoticiaComponent;
  let fixture: ComponentFixture<AmsnoticiaComponent>;

  beforeEach(async(() => {
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
