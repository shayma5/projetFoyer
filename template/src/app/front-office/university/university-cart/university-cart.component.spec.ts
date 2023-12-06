import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityCartComponent } from './university-cart.component';

describe('UniversityCartComponent', () => {
  let component: UniversityCartComponent;
  let fixture: ComponentFixture<UniversityCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
