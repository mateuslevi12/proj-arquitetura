import { Conta } from "./Conta";

export class ContaCorrente extends Conta {

    processarPagamento(valor: number): void {
        this.saldo -= valor;
    }

}