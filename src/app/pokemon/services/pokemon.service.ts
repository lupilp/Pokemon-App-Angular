import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../interface/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public resultados: Result[] = [];

  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=20`);
  }

  getDetails(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
