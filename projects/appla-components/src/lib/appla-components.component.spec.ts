import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplaComponentsComponent } from './appla-components.component';

describe('ApplaComponentsComponent', () => {
  let component: ApplaComponentsComponent;
  let fixture: ComponentFixture<ApplaComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplaComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplaComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
