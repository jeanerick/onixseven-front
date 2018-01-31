import { Entity } from './entity';
import { Profissao } from './Profissao';

export class Pessoa extends Entity {

    constructor() {
        super();
    }

    nome: string;
    dataNascimento: Date;
    cpf: string;
    telefone: string;
    observacoes: string;
    profissao: Profissao;
}
