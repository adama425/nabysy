import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VILLEPage } from './ville.page';

const routes: Routes = [
  {
    path: '',
    component: VILLEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VILLEPageRoutingModule {}
