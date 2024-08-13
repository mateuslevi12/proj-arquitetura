import { Conta } from "./Conta";
import { ProcessadorPagamento } from "./interfaces/ProcessarPagamento";

export class ContaCorrente extends Conta implements ProcessadorPagamento {

    processarPagamento(valor: number): void {
        this.saldo -= valor;
    }

}