import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptNavComponent } from './dept-nav.component';

describe('DeptNavComponent', () => {
  let component: DeptNavComponent;
  let fixture: ComponentFixture<DeptNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeptNavComponent]
    });
    fixture = TestBed.createComponent(DeptNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
