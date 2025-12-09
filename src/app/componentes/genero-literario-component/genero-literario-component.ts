import {Component, input} from '@angular/core';
import {GeneroLiterario} from './GeneroLiterario';
import {LivroComponent} from '../livro-component/livro-component';

@Component({
  selector: 'app-genero-literario-component',
  imports: [
    LivroComponent
  ],
  templateUrl: './genero-literario-component.html',
  styleUrl: './genero-literario-component.css',
})
export class GeneroLiterarioComponent {
  genero = input.required<GeneroLiterario>();
}
