import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: ()=>import('./search-city/search-city.module').then(mod=>mod.SearchCityModule)},
  { path: 'info', loadChildren: ()=>import('./weather-info/weather-info.module').then(mod=>mod.WeatherInfoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
