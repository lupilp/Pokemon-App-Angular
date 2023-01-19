import { Component, OnInit } from '@angular/core';
import { Result } from '../interface/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  pokemons: any[] = [];
  pokemonsTotal: any[] = [];
  page: number = 1;
  totalPokemons: number = 0;
  public keyword: string = 'name';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.pokemonService.getPokemons(1000, 0).subscribe((res: any) => {
      this.pokemonsTotal = res.results;
    });
  }

  getPokemons() {
    this.pokemonService
      .getPokemons(10, (this.page - 1) * 10)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        response.results.forEach((result: Result) => {
          this.pokemonService.getDetails(result.name).subscribe((resp: any) => {
            this.pokemons.push(resp);
          });
        });
      });
  }
}
