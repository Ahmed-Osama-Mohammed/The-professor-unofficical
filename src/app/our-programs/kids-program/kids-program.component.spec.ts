import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsProgramComponent } from './kids-program.component';

describe('KidsProgramComponent', () => {
  let component: KidsProgramComponent;
  let fixture: ComponentFixture<KidsProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
