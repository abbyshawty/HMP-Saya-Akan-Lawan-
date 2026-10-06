import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular/lazy';

import { ProdukDetailPageRoutingModule } from './produk-detail-routing.module';

import { ProdukDetailPage } from './produk-detail.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProdukDetailPageRoutingModule
  ],
  declarations: [ProdukDetailPage]
})
export class ProdukDetailPageModule {}
