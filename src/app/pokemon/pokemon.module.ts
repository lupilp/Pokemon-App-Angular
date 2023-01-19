import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonPageComponent } from './pokemon-page/pokemon-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { TablaComponent } from './tabla/tabla.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    PokemonPageComponent,
    BusquedaComponent,
    ResultadosComponent,
    TablaComponent,
  ],
  exports: [PokemonPageComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    AutocompleteLibModule,
  ],
})
export class PokemonModule {}
