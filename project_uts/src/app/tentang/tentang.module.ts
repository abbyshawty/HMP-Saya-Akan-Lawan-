import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular/lazy';

import { TentangPageRoutingModule } from './tentang-routing.module';

import { TentangPage } from './tentang.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TentangPageRoutingModule
  ],
  declarations: [TentangPage]
})
export class TentangPageModule {}
