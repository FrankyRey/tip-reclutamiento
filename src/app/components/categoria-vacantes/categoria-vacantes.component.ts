import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-vacantes',
  templateUrl: './categoria-vacantes.component.html',
  styleUrls: ['./categoria-vacantes.component.scss']
})
export class CategoriaVacantesComponent implements OnInit {

  constructor(   private router: Router ) { }

  ngOnInit(): void {
  }

}
