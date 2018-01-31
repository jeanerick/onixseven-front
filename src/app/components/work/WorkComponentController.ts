import { Profissao } from '../../entities/Profissao';

export class WorkComponentController {

    public works: Profissao[] = [];
    public entity: Profissao;
    constructor() {
        this.entity = new Profissao();
    }

    save() {
        this.works.push(this.entity.clone());
    }
}
