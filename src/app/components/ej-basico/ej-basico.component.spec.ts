import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjBasicoComponent } from './ej-basico.component';

describe('EjBasicoComponent', () => {
  let component: EjBasicoComponent;
  let fixture: ComponentFixture<EjBasicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjBasicoComponent]
    });
    fixture = TestBed.createComponent(EjBasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
