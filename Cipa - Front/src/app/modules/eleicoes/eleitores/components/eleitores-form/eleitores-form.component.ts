import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Eleitor, MetodoAutenticacao } from '@shared/models/eleitor';

@Component({
  selector: 'app-eleitores-form',
  templateUrl: './eleitores-form.component.html',
  styleUrls: ['./eleitores-form.component.css']
})
export class EleitoresFormComponent implements OnInit {

  @Input() eleitor: Eleitor;
  @Output() salvar = new EventEmitter<Eleitor>();
  @Output() cancelar = new EventEmitter<void>();

  MetodoAutenticacao = MetodoAutenticacao;
  constructor() { }

  ngOnInit() {
    if (!this.eleitor) {
      this.eleitor = new Eleitor();
      this.eleitor.metodoAutenticacao = MetodoAutenticacao.UsuarioRede;
    }
  }

  reset() {
    this.cancelar.emit();
  }

  submit() {
    if (this.eleitor.metodoAutenticacao == MetodoAutenticacao.Email) {
      this.eleitor.login = this.eleitor.email;
    }
    this.salvar.emit(this.eleitor);
  }


}
