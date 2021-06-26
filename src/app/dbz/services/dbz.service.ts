import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    personajes: Personaje[] = [{
        nombre: 'Goku',
        poder: 150000
      }, {
        nombre: 'Vegueta',
        poder: 10000
      }
      ]

    constructor() {
        console.log('Servicio inicializado');
    }
}

