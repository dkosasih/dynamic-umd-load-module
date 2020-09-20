import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectLazyComponent } from './prospect-lazy.component';

describe('ProspectLazyComponent', () => {
  let component: ProspectLazyComponent;
  let fixture: ComponentFixture<ProspectLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
