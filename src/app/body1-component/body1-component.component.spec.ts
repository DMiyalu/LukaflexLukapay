import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Body1ComponentComponent } from './body1-component.component';

describe('Body1ComponentComponent', () => {
  let component: Body1ComponentComponent;
  let fixture: ComponentFixture<Body1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Body1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Body1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
