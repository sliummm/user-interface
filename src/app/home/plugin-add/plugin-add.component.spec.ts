import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginAddComponent } from './plugin-add.component';

describe('PluginAddComponent', () => {
  let component: PluginAddComponent;
  let fixture: ComponentFixture<PluginAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PluginAddComponent]
    });
    fixture = TestBed.createComponent(PluginAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
