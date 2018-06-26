import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsExampleComponent } from './alerts-example.component';

describe('AlertsExampleComponent', () => {
  let component: AlertsExampleComponent;
  let fixture: ComponentFixture<AlertsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
