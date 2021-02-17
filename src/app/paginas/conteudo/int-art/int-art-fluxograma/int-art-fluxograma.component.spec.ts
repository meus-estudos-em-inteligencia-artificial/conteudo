import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntArtFluxogramaComponent } from './int-art-fluxograma.component';

describe('IntArtFluxogramaComponent', () => {
  let component: IntArtFluxogramaComponent;
  let fixture: ComponentFixture<IntArtFluxogramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntArtFluxogramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntArtFluxogramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
