import { Component, OnInit } from '@angular/core';
import { ProdukService } from '../produk';
import { TemaService } from '../services/tema.service';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.page.html',
  styleUrls: ['./produk.page.scss'],
  standalone: false,
})
export class ProdukPage implements OnInit {
  keyword: string = '';
  produk: any[] = [];


  constructor(private ProdukService: ProdukService, public temaService: TemaService) { }

  ngOnInit() {
    this.produk = this.ProdukService.cariProduk('');
  }

  cari() {
    this.produk = this.ProdukService.cariProduk(this.keyword);
  }

}
