import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  formulario!: FormGroup

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['formulario reativo'],
      autoria: ['teste'],
      modelo: ['modelo1']
    });


  }

  criarPensamento() {
    this.service.criar(this.formulario.value).subscribe(() => {
      alert('Pensamento criado!');
      this.router.navigate(['/pensamentos']);
    });
  }

  cancelar() {
    this.router.navigate(['/pensamentos']);
  }
}
