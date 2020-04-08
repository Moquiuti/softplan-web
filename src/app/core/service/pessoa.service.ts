import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) {
  }
  remover(id ?: number): Observable<any> {

  }
  byQuery(nome ?: string, cpf ?: string, nascimento ?: Date, email ?: string, page ?: string, perPage ?: string): Observable<any> {
    let httpParams = new HttpParams();

    if (page) {
      httpParams = httpParams.append('page', page);
    }

    if (perPage) {
      httpParams = httpParams.append('perPage', perPage);
    }

    if (nome) {
      httpParams = httpParams.append('nome', nome);
    }

    if (cpf) {
      httpParams = httpParams.append('cpf', cpf);
    }

    if (nascimento) {
      httpParams = httpParams.append('nascimento', nascimento.getDate().toString());
    }

    if (email) {
      httpParams = httpParams.append('email', email);
    }
    console.log(httpParams);
    return this.http.get<any>(
      `${environment.app_local}/pessoa/query`,
      {params: httpParams}
    );
  }

}
