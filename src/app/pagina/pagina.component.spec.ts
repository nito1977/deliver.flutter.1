import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaginaComponent } from './pagina.component';

describe('PaginaComponent', () => {
  let component: PaginaComponent;
  let fixture: ComponentFixture<PaginaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
