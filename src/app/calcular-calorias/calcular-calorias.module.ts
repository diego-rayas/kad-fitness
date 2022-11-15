import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcularCaloriasPageRoutingModule } from './calcular-calorias-routing.module';

import { CalcularCaloriasPage } from './calcular-calorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcularCaloriasPageRoutingModule
  ],
  declarations: [CalcularCaloriasPage]
})
export class CalcularCaloriasPageModule {}
