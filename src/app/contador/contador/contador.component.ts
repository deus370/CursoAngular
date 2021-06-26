import { Component } from "@angular/core";

@Component ({
    selector: 'app-contador',
    template: `
        <button (click)="acumular( base )">+ {{ base }} </button>
        <span> {{ numero }} </span>
        <button (click)="acumular( -base ) ">- {{ base }} </button>
    `
})

export class ContadorComponent {
    title = 'prototipo-angular';
    numero: number = 10;
    base: number = 5;
  
    acumular( valor: number ) {
      this.numero += valor;
    }
}