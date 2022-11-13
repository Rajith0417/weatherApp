import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchCityRoutingModule } from './search-city-routing.module';
import { CityComponent } from './city/city.component';


@NgModule({
  declarations: [
    CityComponent
  ],
  imports: [
    CommonModule,
    SearchCityRoutingModule
  ]
})
export class SearchCityModule { }
