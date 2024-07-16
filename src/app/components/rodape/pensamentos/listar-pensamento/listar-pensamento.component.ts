import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'conteudo 1',
      autoria: 'nome',
      modelo: 'modelo3'
    },
    {
      conteudo: 'conteudo 2',
      autoria: 'nome',
      modelo: 'modelo3'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
