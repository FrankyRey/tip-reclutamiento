import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCategoriaVacantesComponent } from './form-categoria-vacantes.component';

describe('FormCategoriaVacantesComponent', () => {
  let component: FormCategoriaVacantesComponent;
  let fixture: ComponentFixture<FormCategoriaVacantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCategoriaVacantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCategoriaVacantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
