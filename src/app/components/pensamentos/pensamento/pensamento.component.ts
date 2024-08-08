import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css'],
})
export class PensamentoComponent implements OnInit {
  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'conteudo',
    autoria: 'nome',
    modelo: 'modelo3',
    favorito: false,
  };

  constructor(
    private service: PensamentoService,
  ) {}

  ngOnInit(): void {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  mudarIconeFavorito(): string {
    return this.pensamento.favorito ? 'ativo' : 'inativo';
  }

  atualizarFavoritos() {
    this.service.favoritar(this.pensamento).subscribe();
  }
}
