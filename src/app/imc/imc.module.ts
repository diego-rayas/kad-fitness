import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IMCPageRoutingModule } from './imc-routing.module';

import { IMCPage } from './imc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IMCPageRoutingModule
  ],
  declarations: [IMCPage]
})
export class IMCPageModule {}
