import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransaksiDetailPage } from './transaksi-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TransaksiDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransaksiDetailPageRoutingModule {}
