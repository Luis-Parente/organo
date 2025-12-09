import { Component } from '@angular/core';
import {Livro} from './livro';

@Component({
  selector: 'app-livro-component',
  imports: [],
  templateUrl: './livro-component.html',
  styleUrl: './livro-component.css',
})
export class LivroComponent {

  livro: Livro = {
    titulo: "Mistborn: The Final Empire",
    autoria: "Brandon Sanderson",
    genero: "Fantasia",
    imagem: "sem-livros.png",
    favorito: false
  }

  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito;
  }
}
