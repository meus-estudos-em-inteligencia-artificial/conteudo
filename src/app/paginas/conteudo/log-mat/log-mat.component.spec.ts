import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LOGMATComponent } from './log-mat.component';

describe('LOGMATComponent', () => {
  let component: LOGMATComponent;
  let fixture: ComponentFixture<LOGMATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LOGMATComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LOGMATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
