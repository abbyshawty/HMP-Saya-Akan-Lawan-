import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdukFormPage } from './produk-form.page';

const routes: Routes = [
  {
    path: '',
    component: ProdukFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdukFormPageRoutingModule {}
