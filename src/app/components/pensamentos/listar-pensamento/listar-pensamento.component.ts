import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'conteudo 2',
      autoria: 'nome',
      modelo: 'modelo3',
    },
    {
      conteudo: 'conteudo 2',
      autoria: 'nome',
      modelo: 'modelo3',
    },
    {
      conteudo: `
      Nulla vulputate purus vitae libero dignissim varius. Aenean vel lorem aliquet, dapibus sapien id, vehicula ipsum. Sed varius bibendum elementum. Ut pulvinar quis felis eget cursus. Maecenas quis nunc tincidunt, vulputate nisi sit amet, molestie est. Curabitur scelerisque, elit sit amet tempor malesuada, erat orci congue nunc, at euismod justo turpis vitae diam. Nunc tempus, nisl eget sodales porttitor, augue odio aliquet libero, malesuada ornare dolor neque ut purus. Praesent fermentum lorem nec auctor lacinia. Maecenas vestibulum risus nec dui pharetra, et fringilla nisi vehicula. Quisque pulvinar, nibh vitae feugiat vestibulum, mauris diam sagittis est, in commodo metus sem sed turpis. Nunc et ex risus. Duis id turpis tempor, laoreet diam sit amet, fringilla erat. Aliquam ac leo et sapien aliquam lacinia. Nulla et venenatis magna.
      `,
      autoria: 'nome',
      modelo: 'modelo3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
