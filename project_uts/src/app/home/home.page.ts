import { Component } from '@angular/core';
import { TemaService } from '../services/tema.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(public temaService: TemaService) {}

}
