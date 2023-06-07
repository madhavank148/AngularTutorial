import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RESTAPIComponent } from './restapi.component';

describe('RESTAPIComponent', () => {
  let component: RESTAPIComponent;
  let fixture: ComponentFixture<RESTAPIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RESTAPIComponent]
    });
    fixture = TestBed.createComponent(RESTAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
