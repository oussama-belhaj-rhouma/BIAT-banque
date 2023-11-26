import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresorieComponent } from './tresorie.component';

describe('TresorieComponent', () => {
  let component: TresorieComponent;
  let fixture: ComponentFixture<TresorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TresorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TresorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
