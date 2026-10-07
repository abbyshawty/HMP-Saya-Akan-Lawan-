import { Component } from '@angular/core';
import { TemaService } from '../services/tema.service';

@Component({
  selector: 'app-pengaturan',
  templateUrl: './pengaturan.page.html',
  standalone: false,
})
export class PengaturanPage {
  constructor(public temaService: TemaService) {}

  ubahTema(gelap: boolean): void {
    this.temaService.atur(gelap);
  }
}
