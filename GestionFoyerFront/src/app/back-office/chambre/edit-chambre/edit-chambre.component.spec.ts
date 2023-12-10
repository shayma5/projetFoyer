import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChambreComponent } from './edit-chambre.component';

describe('EditChambreComponent', () => {
  let component: EditChambreComponent;
  let fixture: ComponentFixture<EditChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChambreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
