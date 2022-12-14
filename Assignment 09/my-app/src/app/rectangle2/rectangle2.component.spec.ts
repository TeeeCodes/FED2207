import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rectangle2Component } from './rectangle2.component';

describe('Rectangle2Component', () => {
  let component: Rectangle2Component;
  let fixture: ComponentFixture<Rectangle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rectangle2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rectangle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
