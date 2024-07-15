import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    id: 1,
    conteudo: 'aprendendo angular',
    autoria: 'dev',
    modelo: ''
  };

  criarPensamento() {
    alert('criado')
  }

  cancelar() {
    alert('cancelado')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
