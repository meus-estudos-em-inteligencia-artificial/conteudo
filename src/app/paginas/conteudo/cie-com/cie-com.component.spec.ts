import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CieComComponent } from './cie-com.component';

describe('CieComComponent', () => {
  let component: CieComComponent;
  let fixture: ComponentFixture<CieComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CieComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CieComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
