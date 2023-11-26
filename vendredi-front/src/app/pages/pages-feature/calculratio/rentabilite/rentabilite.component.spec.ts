import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentabiliteComponent } from './rentabilite.component';

describe('RentabiliteComponent', () => {
  let component: RentabiliteComponent;
  let fixture: ComponentFixture<RentabiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentabiliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentabiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});