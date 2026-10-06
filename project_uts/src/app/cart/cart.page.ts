import { Component, OnInit } from '@angular/core';
import { AnimationController, AlertController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false,
})
export class CartPage implements OnInit {
  cartItems: any[] = [];
  totalHarga: number = 0;

  constructor(
    private animationCtrl: AnimationController,
    private alertController: AlertController,
    private cartService: CartService,
    private transactionService: TransactionService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.loadCart();
  }

  ionViewDidEnter() {
    this.animateCartCard();
  }

  loadCart() {
    this.cartItems = this.cartService.getCart();
    this.hitugTotal();
  }

  hitugTotal() {
    this.totalHarga = this.cartItems.reduce(
      (sum, item) => sum + item.harga * item.qty,
      0
    );
  }

  tambahQty(item: any) {
    this.cartService.increaseQty(item.id);
    this.loadCart();
  }

  kurangQty(item: any) {
    this.cartService.decreaseQty(item.id);
    this.loadCart();
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

    this.transactionService.addTransaction(this.cartItems, this.totalHarga);
    this.cartService.clearCart();
    this.loadCart();

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
