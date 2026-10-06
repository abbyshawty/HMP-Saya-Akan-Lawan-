import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdukDetailPage } from './produk-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProdukDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdukDetailPageRoutingModule {}
