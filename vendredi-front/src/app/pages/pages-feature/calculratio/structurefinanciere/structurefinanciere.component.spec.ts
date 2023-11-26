import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureFinanciereComponent } from './structurefinanciere.component';

describe('StructureFinanciereComponent', () => {
  let component: StructureFinanciereComponent;
  let fixture: ComponentFixture<StructureFinanciereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureFinanciereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureFinanciereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});