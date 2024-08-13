import { Produto } from "./produto";

export class Bebida extends Produto {
    quantidade: number;

    constructor(data: Bebida) {
        super(data);
        this.quantidade = data.quantidade;
    }

}