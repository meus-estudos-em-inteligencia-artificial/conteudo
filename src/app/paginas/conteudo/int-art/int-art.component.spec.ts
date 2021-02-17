import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntArtComponent } from './int-art.component';

describe('IntArtComponent', () => {
  let component: IntArtComponent;
  let fixture: ComponentFixture<IntArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
