import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular/lazy';

import { PengaturanPageRoutingModule } from './pengaturan-routing.module';

import { PengaturanPage } from './pengaturan.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PengaturanPageRoutingModule
  ],
  declarations: [PengaturanPage]
})
export class PengaturanPageModule {}
