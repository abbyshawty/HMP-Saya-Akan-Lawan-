import { Component, OnInit } from '@angular/core';
import { AnimationController, AlertController } from '@ionic/angular';
import { KeranjangService, ItemKeranjang } from '../services/keranjang.service';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  //styleUrls: ['./cart.page.scss'],
  standalone: false,
})
export class CartPage {
  constructor(
    private animationCtrl: AnimationController,
    private alertController: AlertController,
    public keranjangService: KeranjangService,
    private transactionService: TransactionService
  ) {}

  ionViewDidEnter() {
    this.animateCartCard();
  }

  get cartItems(): ItemKeranjang[] {
    return this.keranjangService.items;
  }

  get totalHarga(): number {
    return this.keranjangService.total();
  }

  tambahQty(item: ItemKeranjang) {
    this.keranjangService.ubahQty(item.id, 1);
  }

  kurangQty(item: ItemKeranjang) {
    this.keranjangService.ubahQty(item.id, -1);
  }

  async checkout() {
    if (this.cartItems.length === 0) {
      const alert = await this.alertController.create({
        header: 'Keranjang Kosong',
        message: 'Silakan pilih produk terlebih dahulu.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Map ItemKeranjang ke format yang dibutuhkan TransactionService
    const itemsForTransaction = this.cartItems.map(item => ({
      id: item.id,
      nama: item.nama,
      harga: item.harga,
      qty: item.qty,
    }));
    this.transactionService.addTransaction(itemsForTransaction, this.totalHarga);
    this.keranjangService.kosongkan();

    const alert = await this.alertController.create({
      header: 'Checkout Berhasil!',
      message: 'Transaksi Anda telah disimpan.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  animateCartCard() {
    const cardElement = document.querySelector('ion-card') as HTMLElement;
    if (cardElement) {
      const animation = this.animationCtrl
        .create()
        .addElement(cardElement)
        .duration(800)
        .iterations(1)
        .keyframes([
          { offset: 0, opacity: '0', transform: 'translateY(30px)' },
          { offset: 1, opacity: '1', transform: 'translateY(0px)' },
        ]);
      animation.play();
    }
  }
}
