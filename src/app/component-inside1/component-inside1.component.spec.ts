import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInside1Component } from './component-inside1.component';

describe('ComponentInside1Component', () => {
  let component: ComponentInside1Component;
  let fixture: ComponentFixture<ComponentInside1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentInside1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentInside1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
