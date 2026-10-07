import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { KeranjangService } from './services/keranjang.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(
    private alertController: AlertController,
    private router: Router,
    private keranjangService: KeranjangService
  ) {}

  /** Belum ada login di UTS, jadi Logout mengosongkan keranjang lalu kembali ke Dashboard. */
  async konfirmasiLogout(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Logout',
      message: 'Keranjang akan dikosongkan. Lanjutkan?',
      buttons: [
        { text: 'Batal', role: 'cancel' },
        {
          text: 'Logout',
          role: 'confirm',
          handler: () => {
            this.keranjangService.kosongkan();
            this.router.navigateByUrl('/dashboard');
          },
        },
      ],
    });
    await alert.present();
  }
}
