import { MetodoAutenticacao } from "./eleitor";

export enum Perfil {
  SESMT = 'SESMT',
  Eleitor = 'Eleitor',
  Administrador = 'Administrador'
}

export class Usuario {
  id: number;
  metodoAutenticacao?: MetodoAutenticacao;
  nome: string;
  login?: string;
  email: string;
  senha: string;
  confirmacaoSenha: string;
  perfil: Perfil;
  codigoRecuperacao: string;
  cargo: string;
}

export class AuthInfo {
  nome: string;
  id: number;
  contaAtiva: boolean;
  qtdaMaxEstabelecimentos: number;
  expiracao: Date;
  email: string;
  login?: string;
  perfil: Perfil;
  nomePlano: string;
}

export class Conta {
  id: number;
  planoId: number;
  planoDescricao: string;
  ativa: boolean;
  qtdaEstabelecimentos: number;
  dataInicio: Date;
  dataFim: Date;
  usuarios: Usuario[];
}
