import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevxNglibComponent } from './devx-nglib.component';

describe('DevxNglibComponent', () => {
  let component: DevxNglibComponent;
  let fixture: ComponentFixture<DevxNglibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevxNglibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevxNglibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
