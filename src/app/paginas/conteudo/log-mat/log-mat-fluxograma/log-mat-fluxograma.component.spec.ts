import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogMatFluxogramaComponent } from './log-mat-fluxograma.component';

describe('LogMatFluxogramaComponent', () => {
  let component: LogMatFluxogramaComponent;
  let fixture: ComponentFixture<LogMatFluxogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogMatFluxogramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogMatFluxogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
