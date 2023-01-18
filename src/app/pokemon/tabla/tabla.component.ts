import { Component } from '@angular/core';
import { Result } from '../interface/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent {
  pokemons: Result[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((response: any) => {
      response.results.forEach((result: Result) => {
        this.pokemonService.getDetails(result.name).subscribe((resp: any) => {
          this.pokemons.push(resp);
        });
      });
    });
  }
}
