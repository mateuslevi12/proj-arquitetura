import { Pagamento } from "./Pagamento";

export class Venda {
    private pagamentos: Pagamento[];
    private valorTotal: number;

    constructor(valorTotal: number) {
        this.valorTotal = valorTotal;
        this.pagamentos = [];
    }

    public adicionarPagamento(pagamento: Pagamento): void {
        this.pagamentos.push(pagamento);
    }

    public getValorTotal(): number {
        return this.valorTotal;
    }

    public estaPaga(): boolean {
        const totalPago = this.pagamentos.reduce((total, pagamento) => total + pagamento.getValor(), 0);
        return totalPago >= this.valorTotal;
    }

    public getPagamentos(): Pagamento[] {
        return this.pagamentos;
    }
}
