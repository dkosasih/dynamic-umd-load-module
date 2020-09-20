import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleNotAvailableComponent } from './module-not-available.component';

describe('ModuleNotAvailableComponent', () => {
  let component: ModuleNotAvailableComponent;
  let fixture: ComponentFixture<ModuleNotAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleNotAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleNotAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
