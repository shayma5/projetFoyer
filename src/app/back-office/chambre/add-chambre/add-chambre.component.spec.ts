import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChambreComponent } from './add-chambre.component';

describe('AddChambreComponent', () => {
  let component: AddChambreComponent;
  let fixture: ComponentFixture<AddChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
