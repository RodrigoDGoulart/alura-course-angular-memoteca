import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './components/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  { path: '', redirectTo: 'pensamentos', pathMatch: 'full' },
  { path: 'criar-pensamento', component: CriarPensamentoComponent },
  { path: 'pensamentos', component: ListarPensamentoComponent },
  { path: 'pensamentos/excluir/:id', component: ExcluirPensamentoComponent },
  { path: 'pensamentos/editar/:id', component: EditarPensamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
