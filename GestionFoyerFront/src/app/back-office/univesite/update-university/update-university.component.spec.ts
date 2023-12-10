import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUniversityComponent } from './update-university.component';

describe('UpdateUniversityComponent', () => {
  let component: UpdateUniversityComponent;
  let fixture: ComponentFixture<UpdateUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUniversityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
