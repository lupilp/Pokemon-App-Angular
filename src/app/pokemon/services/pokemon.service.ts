import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Result } from '../interface/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public resultados: Result[] = [];

  constructor(private http: HttpClient) {}

  // getAllPokemons(limit: number, offset: number) {
  //   return this.http.get(
  //     `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  //   );
  // }

  getPokemons(limit: number, offset: number) {
    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
  }

  getDetails(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
