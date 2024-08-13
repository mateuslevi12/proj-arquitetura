import { Conta } from "./Conta";
import { ProcessadorPagamento } from "./interfaces/ProcessarPagamento";

export class ContaPoupanca extends Conta implements ProcessadorPagamento{
    processarPagamento(valor: number): void {
        if (valor > 1000) {
            throw new Error("O valor do pagamento não pode ser superior a R$ 1000,00.");
        } 
        this.saldo -= valor;
    }

}