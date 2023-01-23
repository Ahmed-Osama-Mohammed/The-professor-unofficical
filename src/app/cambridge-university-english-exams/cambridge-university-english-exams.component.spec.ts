import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambridgeUniversityEnglishExamsComponent } from './cambridge-university-english-exams.component';

describe('CambridgeUniversityEnglishExamsComponent', () => {
  let component: CambridgeUniversityEnglishExamsComponent;
  let fixture: ComponentFixture<CambridgeUniversityEnglishExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambridgeUniversityEnglishExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambridgeUniversityEnglishExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
