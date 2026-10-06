import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TemaService {
  gelap = false;

  /** Kelas ion-palette-dark di <html> mengaktifkan penimpaan warna di variables.scss. */
  atur(gelap: boolean): void {
    this.gelap = gelap;
    document.documentElement.classList.toggle('ion-palette-dark', gelap);
  }

  balik(): void {
    this.atur(!this.gelap);
  }
}
