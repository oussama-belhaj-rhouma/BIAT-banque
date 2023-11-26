import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VuRapportComponent } from './vurapport.component';

describe('VuRapportComponent', () => {
  let component: VuRapportComponent;
  let fixture: ComponentFixture<VuRapportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VuRapportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VuRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});