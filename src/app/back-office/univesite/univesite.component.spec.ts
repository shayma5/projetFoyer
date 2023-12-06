import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivesiteComponent } from './univesite.component';

describe('UnivesiteComponent', () => {
  let component: UnivesiteComponent;
  let fixture: ComponentFixture<UnivesiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivesiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnivesiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
