import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerComponent } from './foyer.component';

describe('FoyerComponent', () => {
  let component: FoyerComponent;
  let fixture: ComponentFixture<FoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
