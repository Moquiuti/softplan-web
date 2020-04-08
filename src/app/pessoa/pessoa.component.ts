import {Component, OnInit} from '@angular/core';
import {Pessoa} from './pessoa.model';
import {PessoaService} from '../core/service/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {
  pessoas: Pessoa[];
  nome: string;
  cpf: string;
  email: string;
  nascimento: Date;

  constructor(private pessoaService: PessoaService) {
  }

  ngOnInit() {
    this.pessoaService.byQuery(undefined, undefined, undefined, undefined,
      undefined, undefined).subscribe(resp => {
      console.log(resp);
      this.pessoas = resp.body;
    });
  }

  remover(id: number) {
    this.pessoaService.remover(id).subscribe(remov => {
      this.pessoaService.byQuery(undefined, undefined, undefined, undefined,
        undefined, undefined).subscribe(resp => {
        this.pessoas = resp.body;
      });
    });
  }
}
