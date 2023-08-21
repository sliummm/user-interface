import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatNavComponent } from './cat-nav.component';

describe('CatNavComponent', () => {
  let component: CatNavComponent;
  let fixture: ComponentFixture<CatNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatNavComponent]
    });
    fixture = TestBed.createComponent(CatNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
