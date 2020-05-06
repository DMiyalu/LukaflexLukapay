import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheComponentComponent } from './recherche-component.component';

describe('RechercheComponentComponent', () => {
  let component: RechercheComponentComponent;
  let fixture: ComponentFixture<RechercheComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
