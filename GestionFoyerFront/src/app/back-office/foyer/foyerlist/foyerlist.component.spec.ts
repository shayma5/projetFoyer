import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerlistComponent } from './foyerlist.component';

describe('FoyerlistComponent', () => {
  let component: FoyerlistComponent;
  let fixture: ComponentFixture<FoyerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
