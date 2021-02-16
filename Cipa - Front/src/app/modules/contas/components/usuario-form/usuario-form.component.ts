import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '@shared/models/usuario';
import { MetodoAutenticacao } from '@shared/models/eleitor';
import { ToastMessage } from '@core/components/toasts/toasts.component';
import { ToastsService } from '@core/services/toasts.service';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  @Input() usuario = new Usuario();
  @Output() salvar = new EventEmitter<Usuario>();
  @Output() cancelar = new EventEmitter<void>();

  MetodoAutenticacao = MetodoAutenticacao;
  form: FormGroup;
  constructor(private fb: FormBuilder, private location: Location, private toasts: ToastsService) { }

  ngOnInit() {
    this.form = this.fb.group({
      id: [{ value: this.usuario.id, disabled: true }],
      nome: [this.usuario.nome, [Validators.required, Validators.maxLength(255)]],
      login: [this.usuario.login, [Validators.maxLength(100)]],
      email: [this.usuario.email, [Validators.required, Validators.email, Validators.maxLength(100)]],
      cargo: [this.usuario.cargo, [Validators.required, Validators.maxLength(255)]],
      metodoAutenticacao: [this.usuario.metodoAutenticacao || MetodoAutenticacao.UsuarioRede]
    });
  }

  cancelarEdicao() {
    this.location.back();
    this.cancelar.emit();
  }

  salvarUsuario() {
    const usuario = this.form.getRawValue() as Usuario;
    if (usuario.metodoAutenticacao == MetodoAutenticacao.Email) {
      usuario.login = usuario.email;
    } else if(!usuario.login) {
      this.toasts.errorModal('O usuário de rede deve ser informado.', 'Inválido.');
      return;
    }
    this.salvar.emit(usuario);
  }

}
