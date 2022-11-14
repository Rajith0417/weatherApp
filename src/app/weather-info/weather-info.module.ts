import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherInfoRoutingModule } from './weather-info-routing.module';
import { InfoComponent } from './info/info.component';
import { CelsiusPipe } from '../shared/pipe/celsius.pipe';


@NgModule({
  declarations: [
    InfoComponent,
    CelsiusPipe
  ],
  imports: [
    CommonModule,
    WeatherInfoRoutingModule
  ]
})
export class WeatherInfoModule { }
