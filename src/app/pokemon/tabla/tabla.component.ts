import { Component, OnInit } from '@angular/core';
import { Result } from '../interface/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  pokemons: any[] = [];
  page: number = 1;
  totalPokemons: number = 0;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService
      .getPokemons(10, (this.page - 1) * 10)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        console.log(response.count);
        response.results.forEach((result: Result) => {
          this.pokemonService.getDetails(result.name).subscribe((resp: any) => {
            this.pokemons.push(resp);
            console.log(this.pokemons);
          });
        });
      });
  }
}
