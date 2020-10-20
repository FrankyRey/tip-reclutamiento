import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolaridadComponent } from './escolaridad.component';

describe('EscolaridadComponent', () => {
  let component: EscolaridadComponent;
  let fixture: ComponentFixture<EscolaridadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscolaridadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolaridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
