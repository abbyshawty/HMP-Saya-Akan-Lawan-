import { Injectable } from '@angular/core';
import { Product } from './product.service';

export interface CartItem extends Product {
  qty: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];

  constructor() { }

  getCart(): CartItem[] {
    return this.cart;
  }

  addToCart(product: Product) {
    const existingItem = this.cart.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      this.cart.push({ ...product, qty: 1 });
    }
  }

  increaseQty(id: number) {
    const item = this.cart.find(i => i.id === id);
    if (item) {
      item.qty += 1;
    }
  }

  decreaseQty(id: number) {
    const index = this.cart.findIndex(i => i.id === id);
    if (index !== -1) {
      if (this.cart[index].qty > 1) {
        this.cart[index].qty -= 1;
      } else {
        this.cart.splice(index, 1);
      }
    }
  }

  clearCart() {
    this.cart = [];
  }
}
