import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilStatisticsComponent } from './civil-statistics.component';

describe('CivilStatisticsComponent', () => {
  let component: CivilStatisticsComponent;
  let fixture: ComponentFixture<CivilStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CivilStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
