import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service
      .listar(this.paginaAtual, undefined, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  carregarMaisPensamentos() {
    if (this.filtro.trim().length < 2) {
      return
    }
    this.service
      .listar(this.paginaAtual + 1, undefined, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos);
        this.paginaAtual += 1;
        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
      });
  }

  pesquisarPensamentos() {
    this.paginaAtual = 1;
    this.haMaisPensamentos = true;
    this.service
      .listar(this.paginaAtual, undefined, this.filtro)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }
}
