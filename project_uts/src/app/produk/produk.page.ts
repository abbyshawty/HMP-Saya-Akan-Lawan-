import { Component, OnInit } from '@angular/core';
import { ProdukService } from '../produk';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {
  keyword: string = '';
  produk: any[] = [];


  constructor(private ProdukService: ProdukService) { }

  ngOnInit() {
    this.produk = this.ProdukService.cariProduk('');
  }

  cari() {
    this.produk = this.ProdukService.cariProduk(this.keyword);
  }

}
