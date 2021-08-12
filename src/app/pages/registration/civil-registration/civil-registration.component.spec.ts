import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilRegistrationComponent } from './civil-registration.component';

describe('CivilRegistrationComponent', () => {
  let component: CivilRegistrationComponent;
  let fixture: ComponentFixture<CivilRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
