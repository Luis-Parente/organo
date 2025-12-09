import {Component, input} from '@angular/core';
import {Livro} from './Livro';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-livro-component',
  imports: [
    NgClass
  ],
  templateUrl: './livro-component.html',
  styleUrl: './livro-component.css',
})
export class LivroComponent {
  livro = input.required<Livro>();

  alternarFavorito() {
    this.livro().favorito = !this.livro().favorito;
  }
}
