import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spl2Component } from './spl2.component';

describe('Spl2Component', () => {
  let component: Spl2Component;
  let fixture: ComponentFixture<Spl2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Spl2Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Spl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
