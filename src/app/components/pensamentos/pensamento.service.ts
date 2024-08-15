import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  listar(page: number, limit: number = 6, filter: string, favorite: boolean = false): Observable<Pensamento[]> {
    let params = new HttpParams()
      .set('_page', page)
      .set('_limit', limit);

    if (filter.trim().length > 2) {
      params = params.set('q', filter);
    }

    if (favorite) {
      params = params.set('favorito', 'true')
    }

    return this.http.get<Pensamento[]>(
      this.API,
      // inital implement
      // {
      //   params: {
      //     '_page': page,
      //     '_limit': limit,
      //   }
      // }
      // course implement
      { params }
    );
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  favoritar(pensamento: Pensamento): Observable<Pensamento> {
    pensamento.favorito = !pensamento.favorito;
    return this.editar(pensamento);
  }
}
