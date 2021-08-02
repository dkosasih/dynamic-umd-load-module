import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Test1PublicComponent } from './test1-public.component';

describe('Test1PublicComponent', () => {
  let component: Test1PublicComponent;
  let fixture: ComponentFixture<Test1PublicComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Test1PublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1PublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
