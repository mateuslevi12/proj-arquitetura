import { Venda } from "./Venda";

export class TPDV {
    private vendas: Venda[];

    constructor() {
        this.vendas = [];
    }

    public registrarVenda(venda: Venda): void {
        this.vendas.push(venda);
    }

    public getVendas(): Venda[] {
        return this.vendas;
    }
}
