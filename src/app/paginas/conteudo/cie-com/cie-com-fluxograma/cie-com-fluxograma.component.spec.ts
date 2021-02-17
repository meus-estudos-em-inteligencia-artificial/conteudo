import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CieComFluxogramaComponent } from './cie-com-fluxograma.component';

describe('CieComFluxogramaComponent', () => {
  let component: CieComFluxogramaComponent;
  let fixture: ComponentFixture<CieComFluxogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CieComFluxogramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CieComFluxogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
