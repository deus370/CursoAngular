import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: '', 
    poder: 0
  }

  agregar(  ) {
    if( this.nuevo.nombre.trim().length === 0 ) {
      return;
    }

    this.personajes.push( this.nuevo );
    this.nuevo = {
      nombre: '', 
      poder: 0
    }
  }

  constructor( private dbzService: DbzService) {
    this.personajes = this.dbzService.personajes;
  }
}
