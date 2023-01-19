import { Component, ElementRef, ViewChild } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private pokemonService: PokemonService) {}

  

  buscar() {
    console.log('Entré');
    const valor = this.txtBuscar.nativeElement.value;

    if (valor.trim().length === 0) {
      return;
    }

    // this.pokemonService.buscarPokemones(valor);
    this.txtBuscar.nativeElement.value = '';
  }
}
