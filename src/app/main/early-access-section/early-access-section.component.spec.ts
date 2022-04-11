import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarlyAccessSectionComponent } from './early-access-section.component';

describe('EarlyAccessSectionComponent', () => {
  let component: EarlyAccessSectionComponent;
  let fixture: ComponentFixture<EarlyAccessSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarlyAccessSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarlyAccessSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
