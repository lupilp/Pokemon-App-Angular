import { Component, OnInit } from '@angular/core';
import { Result, PokemonDetail, Sprites } from '../interface/pokemon.interface';
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
  abecedario: any = {};
  newNameInput: string = '';

  detallePokemon: PokemonDetail = {
    name: '',
    weight: 0,
    height: 0,
    stats: [],
    types: [],
    sprites: {
      front_default: '',
    },
  };

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemons();
    this.getAllPokemons();
  }

  getAbcedario(arrPokemons: any) {
    let resultadosOrdenados = arrPokemons.sort(function (a: any, b: any) {
      if (a.name > b.name) {
        return 1;
      }
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    });

    let abecedario: any = {};

    resultadosOrdenados.forEach((pokemon: any) => {
      if (!abecedario.hasOwnProperty(pokemon.name[0])) {
        abecedario[pokemon.name[0]] = 1;
      } else {
        abecedario[pokemon.name[0]] += 1;
      }
    });
    return abecedario;
  }

  checkObjetoEmpty(objeto: any) {
    return Object.entries(objeto).length === 0;
  }

  changeName(newName: string) {
    this.detallePokemon.name = newName;
  }

  getAllPokemons() {
    this.pokemonService.getPokemons(1000, 0).subscribe((res: any) => {
      this.pokemonsTotal = res.results;
      this.abecedario = this.getAbcedario(res.results);
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

  onChangeSearch(event: any) {
    console.log(event);
  }

  getDetail(name: string) {
    this.pokemonService.getDetails(name).subscribe((res: any) => {
      this.detallePokemon = {
        name: res.name,
        weight: res.weight,
        height: res.height,
        stats: res.stats,
        types: res.types.map((t: any) => t.type.name),
        sprites: res.sprites.other.dream_world.front_default,
      };
    });
  }
}
