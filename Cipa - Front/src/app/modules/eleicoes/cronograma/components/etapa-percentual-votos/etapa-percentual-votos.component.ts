import { Dimensionamento } from '@shared/models/dimensionamento';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-etapa-percentual-votos',
  templateUrl: './etapa-percentual-votos.component.html',
  styleUrls: ['./etapa-percentual-votos.component.css']
})
export class EtapaPercentualVotosComponent implements OnInit {

  @Input() dimensionamento: Dimensionamento;
  @Output() atualizar = new EventEmitter<void>();
  ultimaAtualizacao: Date;
  constructor() { }

  ngOnInit() {
    this.ultimaAtualizacao = new Date();
  }

  get possuiQtdaMinimaVotos(): boolean {
    return this.dimensionamento.qtdaVotos >= this.dimensionamento.qtdaMinimaVotos;
  }

  onAtualizar() {
    this.atualizar.emit();
  }

}
