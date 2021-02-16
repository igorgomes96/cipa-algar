export class Voto {
    id: number;
    eleitorId: number;
    eleitorNome: string;
    eleitorEmail: string;
    eleitorLogin?: string;
    eleicaoId: number;
    ip: string;
    horario: Date;
}
