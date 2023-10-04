import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maquina1Component } from './maquina1.component';

describe('Maquina1Component', () => {
  let component: Maquina1Component;
  let fixture: ComponentFixture<Maquina1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Maquina1Component]
    });
    fixture = TestBed.createComponent(Maquina1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
