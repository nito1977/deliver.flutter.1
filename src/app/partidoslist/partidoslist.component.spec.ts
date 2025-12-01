import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PartidoslistComponent } from './partidoslist.component';

describe('PartidoslistComponent', () => {
  let component: PartidoslistComponent;
  let fixture: ComponentFixture<PartidoslistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PartidoslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
