import { Injectable } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class AnimasiService {
  constructor(private animationCtrl: AnimationController) {}

  /** Animasi 1: elemen muncul dari bawah satu per satu. Dipanggil dari ionViewDidEnter(). */
  munculBertahap(selector: string): void {
    if (this.kurangiGerak()) {
      return;
    }
    const daftar = Array.from(document.querySelectorAll<HTMLElement>(selector));
    daftar.forEach((el, urutan) => {
      this.animationCtrl
        .create()
        .addElement(el)
        .duration(350)
        .delay(urutan * 90)
        .easing('ease-out')
        .fill('backwards')
        .keyframes([
          { offset: 0, opacity: '0', transform: 'translateY(16px)' },
          { offset: 1, opacity: '1', transform: 'translateY(0)' },
        ])
        .play();
    });
  }

  /** Animasi 2: elemen membesar sebentar lalu kembali. Dipakai pada angka keranjang saat barang masuk. */
  membesarSebentar(selector: string): void {
    if (this.kurangiGerak()) {
      return;
    }
    const el = document.querySelector<HTMLElement>(selector);
    if (!el) {
      return;
    }
    this.animationCtrl
      .create()
      .addElement(el)
      .duration(300)
      .easing('ease-in-out')
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.5)' },
        { offset: 1, transform: 'scale(1)' },
      ])
      .play();
  }

  /** Animasi 3: kolom yang salah bergetar ke samping sebentar. Tujuannya menarik mata ke kolom bermasalah setelah tombol simpan ditekan. */
  getarSebentar(selector: string): void {
    if (this.kurangiGerak()) {
      return;
    }
    document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      this.animationCtrl
        .create()
        .addElement(el)
        .duration(350)
        .easing('ease-in-out')
        .keyframes([
          { offset: 0, transform: 'translateX(0)' },
          { offset: 0.2, transform: 'translateX(-8px)' },
          { offset: 0.4, transform: 'translateX(8px)' },
          { offset: 0.6, transform: 'translateX(-6px)' },
          { offset: 0.8, transform: 'translateX(6px)' },
          { offset: 1, transform: 'translateX(0)' },
        ])
        .play();
    });
  }

  /** Pengguna yang mematikan animasi di perangkatnya tidak dipaksa melihat gerakan. */
  private kurangiGerak(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
