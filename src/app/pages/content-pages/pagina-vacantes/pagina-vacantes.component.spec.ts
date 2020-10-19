import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaVacantesComponent } from './pagina-vacantes.component';

describe('PaginaVacantesComponent', () => {
  let component: PaginaVacantesComponent;
  let fixture: ComponentFixture<PaginaVacantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaVacantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaVacantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
