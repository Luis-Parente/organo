import {Component, signal} from '@angular/core';
import {CabecalhoComponent} from './componentes/cabecalho-component/cabecalho-component';
import {RodapeComponent} from './componentes/rodape-component/rodape-component';
import {LivroComponent} from './componentes/livro-component/livro-component';

@Component({
  selector: 'app-root',
  imports: [CabecalhoComponent, RodapeComponent, LivroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
