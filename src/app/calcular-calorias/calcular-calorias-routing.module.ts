import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcularCaloriasPage } from './calcular-calorias.page';

const routes: Routes = [
  {
    path: '',
    component: CalcularCaloriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcularCaloriasPageRoutingModule {}
