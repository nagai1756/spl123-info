import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spl1Component } from './spl1.component';

describe('Spl1Component', () => {
  let component: Spl1Component;
  let fixture: ComponentFixture<Spl1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Spl1Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Spl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
