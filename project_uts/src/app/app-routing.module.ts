import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'produk/:id',
    loadChildren: () => import('./produk-detail/produk-detail.module').then( m => m.ProdukDetailPageModule)
  },
  {
    path: 'produk-form',
    loadChildren: () => import('./produk-form/produk-form.module').then( m => m.ProdukFormPageModule)
  },
  {
    path: 'produk-form/:id',
    loadChildren: () => import('./produk-form/produk-form.module').then( m => m.ProdukFormPageModule)
  },
  {
    path: 'transaksi/:id',
    loadChildren: () => import('./transaksi-detail/transaksi-detail.module').then( m => m.TransaksiDetailPageModule)
  },
  {
    path: 'pengaturan',
    loadChildren: () => import('./pengaturan/pengaturan.module').then( m => m.PengaturanPageModule)
  },
  {
    path: 'tentang',
    loadChildren: () => import('./tentang/tentang.module').then( m => m.TentangPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
