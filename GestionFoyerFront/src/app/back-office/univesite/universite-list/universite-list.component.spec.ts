import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversiteListComponent } from './universite-list.component';

describe('UniversiteListComponent', () => {
  let component: UniversiteListComponent;
  let fixture: ComponentFixture<UniversiteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversiteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversiteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
