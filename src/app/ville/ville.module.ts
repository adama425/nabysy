import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VILLEPageRoutingModule } from './ville-routing.module';

import { VILLEPage } from './ville.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VILLEPageRoutingModule
  ],
  declarations: [VILLEPage]
})
export class VILLEPageModule {}
