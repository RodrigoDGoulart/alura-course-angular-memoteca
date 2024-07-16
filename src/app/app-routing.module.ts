import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './components/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  { path: '', redirectTo: 'pensamentos', pathMatch: 'full' },
  { path: 'criar-pensamento', component: CriarPensamentoComponent },
  { path: 'pensamentos', component: ListarPensamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
