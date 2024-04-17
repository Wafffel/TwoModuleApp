import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInside2Component } from './component-inside2.component';

describe('ComponentInside2Component', () => {
  let component: ComponentInside2Component;
  let fixture: ComponentFixture<ComponentInside2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentInside2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentInside2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
