import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard', // Mengarahkan ke dashboard saat pertama dibuka
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'dashboard', // Rute Dashboard
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'cart', // Rute Cart / Keranjang
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'produk/:id',
    loadChildren: () => import('./produk-detail/produk-detail.module').then( m => m.ProdukDetailPageModule)
  },
  {
    path: 'produk',
    loadChildren: () => import('./produk/produk.module').then( m => m.ProdukPageModule)
  },
  {
    path: 'produk-form',
    loadChildren: () => import('./produk-form/produk-form.module').then( m => m.ProdukFormPageModule)
  },
  {
    path: 'produk-form/:id',
    loadChildren: () => import('./produk-form/produk-form.module').then( m => m.ProdukFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
