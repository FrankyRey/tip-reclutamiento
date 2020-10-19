import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFiltrosComponent } from './sidebar-filtros.component';

describe('SidebarFiltrosComponent', () => {
  let component: SidebarFiltrosComponent;
  let fixture: ComponentFixture<SidebarFiltrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarFiltrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
