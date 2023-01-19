import { Component } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
  public keyword = 'name';

  constructor(private pokemonService: PokemonService) {
    this.buscar();
  }

  buscar() {}
}
