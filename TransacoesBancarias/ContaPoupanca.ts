import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
    processarPagamento(valor: number): void {
        if (valor > 1000) {
            throw new Error("O valor do pagamento não pode ser superior a R$ 1000,00.");
        } 
        this.saldo -= valor;
    }

}