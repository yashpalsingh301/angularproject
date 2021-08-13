import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInsuranceApplicationComponent } from './project-insurance-application.component';

describe('ProjectInsuranceApplicationComponent', () => {
  let component: ProjectInsuranceApplicationComponent;
  let fixture: ComponentFixture<ProjectInsuranceApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectInsuranceApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInsuranceApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
