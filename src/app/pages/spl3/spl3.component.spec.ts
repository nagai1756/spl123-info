import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spl3Component } from './spl3.component';

describe('Spl3Component', () => {
  let component: Spl3Component;
  let fixture: ComponentFixture<Spl3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Spl3Component]
    })
      .compileComponents();

    fixture = TestBed.createComponent(Spl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
