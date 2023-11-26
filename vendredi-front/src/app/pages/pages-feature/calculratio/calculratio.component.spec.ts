import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculRatioComponent } from './calculratio.component';

describe('CalculRatioComponent', () => {
  let component: CalculRatioComponent;
  let fixture: ComponentFixture<CalculRatioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculRatioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});