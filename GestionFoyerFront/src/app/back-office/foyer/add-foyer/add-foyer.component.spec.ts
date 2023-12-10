import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoyerComponent } from './add-foyer.component';

describe('AddFoyerComponent', () => {
  let component: AddFoyerComponent;
  let fixture: ComponentFixture<AddFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
