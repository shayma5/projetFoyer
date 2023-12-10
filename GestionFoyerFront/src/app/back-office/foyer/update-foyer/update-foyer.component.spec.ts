import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFoyerComponent } from './update-foyer.component';

describe('UpdateFoyerComponent', () => {
  let component: UpdateFoyerComponent;
  let fixture: ComponentFixture<UpdateFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
