import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAdministratonManagementProgramComponent } from './business-administraton-management-program.component';

describe('BusinessAdministratonManagementProgramComponent', () => {
  let component: BusinessAdministratonManagementProgramComponent;
  let fixture: ComponentFixture<BusinessAdministratonManagementProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessAdministratonManagementProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAdministratonManagementProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
