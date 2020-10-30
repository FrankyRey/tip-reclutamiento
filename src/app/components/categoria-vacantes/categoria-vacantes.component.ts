import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

//Import Model
import { CategoriaVacante } from 'app/models/categoriaVacante';

//Import Service
import { CategoriaVacanteService } from 'app/services/categoriaVacante.service';

@Component({
  selector: 'app-categoria-vacantes',
  templateUrl: './categoria-vacantes.component.html',
  styleUrls: ['./categoria-vacantes.component.scss'],
  providers: [CategoriaVacanteService]
})
export class CategoriaVacantesComponent implements OnInit {
  public categoriaVacante: CategoriaVacante;
  public categoriasVacantes;

  constructor(
    private router: Router,
    public _categoriaVacanteService: CategoriaVacanteService
  ) {

  }

  ngOnInit(): void {
    this.getCategoriasVacantes();
  }

  getCategoriasVacantes() {
    this._categoriaVacanteService.index().subscribe(
      response => {
        if(response.status == 'success') {
          console.log(response.categoriasVacantes);
          this.categoriasVacantes = response.categoriasVacantes;
          console.log(this.categoriasVacantes);
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }
}
