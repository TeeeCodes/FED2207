import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScooterHowtoComponent } from './scooter-howto.component';

describe('ScooterHowtoComponent', () => {
  let component: ScooterHowtoComponent;
  let fixture: ComponentFixture<ScooterHowtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScooterHowtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScooterHowtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
