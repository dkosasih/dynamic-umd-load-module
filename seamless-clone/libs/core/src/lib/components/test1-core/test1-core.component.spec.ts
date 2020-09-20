import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Test1CoreComponent } from './test1-core.component';

describe('Test1CoreComponent', () => {
  let component: Test1CoreComponent;
  let fixture: ComponentFixture<Test1CoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Test1CoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1CoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
