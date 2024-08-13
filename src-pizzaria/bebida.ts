import { Produto } from "./produto";

export class Bebida extends Produto {
    quantidade: string;

    constructor(data: Bebida) {
        super(data);
        this.quantidade = data.quantidade;
    }

}