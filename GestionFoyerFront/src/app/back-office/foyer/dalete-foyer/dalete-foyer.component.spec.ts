import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaleteFoyerComponent } from './dalete-foyer.component';

describe('DaleteFoyerComponent', () => {
  let component: DaleteFoyerComponent;
  let fixture: ComponentFixture<DaleteFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaleteFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaleteFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
