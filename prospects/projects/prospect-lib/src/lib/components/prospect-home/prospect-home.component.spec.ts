import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectHomeComponent } from './prospect-home.component';

describe('ProspectHomeComponent', () => {
  let component: ProspectHomeComponent;
  let fixture: ComponentFixture<ProspectHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
