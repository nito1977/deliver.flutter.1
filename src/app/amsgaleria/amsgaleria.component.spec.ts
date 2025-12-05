import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmsgaleriaComponent } from './amsgaleria.component';

describe('AmsgaleriaComponent', () => {
  let component: AmsgaleriaComponent;
  let fixture: ComponentFixture<AmsgaleriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmsgaleriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmsgaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
