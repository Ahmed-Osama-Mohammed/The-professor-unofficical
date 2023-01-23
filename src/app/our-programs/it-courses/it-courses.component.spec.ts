import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ITCoursesComponent } from './it-courses.component';

describe('ITCoursesComponent', () => {
  let component: ITCoursesComponent;
  let fixture: ComponentFixture<ITCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ITCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ITCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
