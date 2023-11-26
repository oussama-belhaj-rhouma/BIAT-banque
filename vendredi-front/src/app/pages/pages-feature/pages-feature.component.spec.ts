import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesFeatureComponent } from './pages-feature.component';

describe('PagesFeatureComponent', () => {
  let component: PagesFeatureComponent;
  let fixture: ComponentFixture<PagesFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
