import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { TablaComponent } from './tabla/tabla.component';

@NgModule({
  declarations: [PokemonPageComponent, BusquedaComponent, ResultadosComponent, TablaComponent],
  exports: [PokemonPageComponent],
  imports: [CommonModule],
})
export class PokemonModule {}
