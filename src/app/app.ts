import {Component, signal} from '@angular/core';
import {CabecalhoComponent} from './componentes/cabecalho-component/cabecalho-component';
import {RodapeComponent} from './componentes/rodape-component/rodape-component';
import {ListaLivrosComponent} from './componentes/lista-livros-component/lista-livros-component';

@Component({
  selector: 'app-root',
  imports: [CabecalhoComponent, RodapeComponent, ListaLivrosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}
