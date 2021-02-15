export enum MetodoAutenticacao {
    UsuarioRede = 0,
    Email = 1
}

export class Eleitor {
    id: number;
    metodoAutenticacao?: MetodoAutenticacao; 
    nome: string;
    login?: string;
    email: string;
    matricula: string;
    area: string;
    cargo: string;
    dataNascimento: Date;
    dataAdmissao: Date;
    eleicaoId: number;
    nomeGestor: string;
    emailGestor: string;
}
