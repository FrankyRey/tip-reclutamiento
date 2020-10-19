import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-vacantes',
  templateUrl: './pagina-vacantes.component.html',
  styleUrls: ['./pagina-vacantes.component.scss']
})
export class PaginaVacantesComponent implements OnInit {

   private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
