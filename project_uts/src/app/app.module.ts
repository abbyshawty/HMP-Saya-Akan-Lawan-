import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular/lazy';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { TransactionService } from './services/transaction.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Mendaftarkan service secara eksplisit
    ProductService,
    CartService,
    TransactionService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
