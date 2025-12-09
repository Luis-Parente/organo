import {Component, OnInit} from '@angular/core';
import {GeneroLiterario} from '../genero-literario-component/GeneroLiterario';
import {Livro} from '../livro-component/Livro';
import {livros} from '../../mock-livros';
import {GeneroLiterarioComponent} from '../genero-literario-component/genero-literario-component';

@Component({
  selector: 'app-lista-livros-component',
  imports: [
    GeneroLiterarioComponent
  ],
  templateUrl: './lista-livros-component.html',
  styleUrl: './lista-livros-component.css',
})
export class ListaLivrosComponent implements OnInit {
  listaGeneros: GeneroLiterario[] = [];
  livrosPorGenero: Map<string, Livro[]> = new Map();

  ngOnInit(): void {
    livros.forEach((livro: Livro) => {
      const generoId = livro.generoId;

      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, []);
      }
      this.livrosPorGenero.get(generoId)?.push(livro);
    })

    this.livrosPorGenero.forEach((livros, generoId) => {
      const genero: GeneroLiterario = {
        id: generoId,
        livros: livros,
      }
      this.listaGeneros.push(genero);
    })
  }
}
