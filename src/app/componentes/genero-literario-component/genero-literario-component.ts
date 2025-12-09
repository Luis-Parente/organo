import {Component, input} from '@angular/core';
import {GeneroLiterario} from './GeneroLiterario';
import {LivroComponent} from '../livro-component/livro-component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-genero-literario-component',
  imports: [
    LivroComponent,
    NgClass
  ],
  templateUrl: './genero-literario-component.html',
  styleUrl: './genero-literario-component.css',
})
export class GeneroLiterarioComponent {
  genero = input.required<GeneroLiterario>();
}
