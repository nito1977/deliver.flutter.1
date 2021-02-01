import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmsnoticiasComponent } from './amsnoticias.component';

describe('AmsnoticiasComponent', () => {
  let component: AmsnoticiasComponent;
  let fixture: ComponentFixture<AmsnoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmsnoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmsnoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
