import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { TransaksiDetailPageRoutingModule } from './transaksi-detail-routing.module';

import { TransaksiDetailPage } from './transaksi-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransaksiDetailPageRoutingModule
  ],
  declarations: [TransaksiDetailPage]
})
export class TransaksiDetailPageModule {}
