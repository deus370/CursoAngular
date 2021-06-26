import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

    heroes: String[] = ['Spiderman','Thor','Hulk','IronMan'];
    heroeBorrado: String = '';

    borrarHeroe() {
      this.heroeBorrado = this.heroes.shift() || '';

    }

}
