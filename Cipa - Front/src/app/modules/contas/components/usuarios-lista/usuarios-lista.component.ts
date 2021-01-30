import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Usuario } from '@shared/models/usuario';
import { ToastsService } from 'src/app/core/services/toasts.service';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  @Input() usuarios: Usuario[];
  @Input() permitirExclusao = true;
  @Output() excluir = new EventEmitter<Usuario>();
  @Output() editar = new EventEmitter<Usuario>();

  constructor(
    private toast: ToastsService
  ) { }

  ngOnInit() {
  }

  exclui(usuario: Usuario) {
    this.toast.confirmModal('Deseja mesmo excluir esse usuário? Essa ação não poderá ser defeita.', 'Confirmação')
      .pipe(filter(confirmacao => confirmacao), tap(_ => this.excluir.emit(usuario))).subscribe();
  }

  editarUsuario(usuario: Usuario) {
    this.editar.emit(usuario);
  }

}
