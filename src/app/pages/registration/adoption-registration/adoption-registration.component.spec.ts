import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionRegistrationComponent } from './adoption-registration.component';

describe('AdoptionRegistrationComponent', () => {
  let component: AdoptionRegistrationComponent;
  let fixture: ComponentFixture<AdoptionRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
