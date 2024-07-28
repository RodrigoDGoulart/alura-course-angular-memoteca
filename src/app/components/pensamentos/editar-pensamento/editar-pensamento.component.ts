import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from 'src/utils/minusculoValidator';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css'],
})
export class EditarPensamentoComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      conteudo: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
        ]),
      ],
      autoria: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          minusculoValidator
        ]),
      ],
      modelo: ['modelo1'],
    });
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id as string)).subscribe((pensamento) => {
      this.form.setValue({
        conteudo: pensamento.conteudo,
        autoria: pensamento.autoria,
        modelo: pensamento.modelo
      });
    })
  }

  editarPensamento() {
    if (this.form.valid) {
      this.service.editar(this.form.value).subscribe(() => {
        this.router.navigate(['/pensamentos']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/pensamentos']);
  }

  habilitarBotao(): string {
    return this.form.valid ? 'botao' : 'botao__desabilitado';
  }
}
