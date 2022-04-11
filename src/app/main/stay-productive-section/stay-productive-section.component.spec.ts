import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayProductiveSectionComponent } from './stay-productive-section.component';

describe('StayProductiveSectionComponent', () => {
  let component: StayProductiveSectionComponent;
  let fixture: ComponentFixture<StayProductiveSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StayProductiveSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StayProductiveSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
