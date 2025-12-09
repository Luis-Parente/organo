import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CabecalhoComponent} from './componentes/cabecalho/cabecalho.component';
import {RodapeComponent} from './componentes/rodape/rodape.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
