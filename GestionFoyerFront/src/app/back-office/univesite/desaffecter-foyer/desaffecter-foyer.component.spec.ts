import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesaffecterFoyerComponent } from './desaffecter-foyer.component';

describe('DesaffecterFoyerComponent', () => {
  let component: DesaffecterFoyerComponent;
  let fixture: ComponentFixture<DesaffecterFoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesaffecterFoyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesaffecterFoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
